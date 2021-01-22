(function () {
  let tailwind = 
    <<REPLACE>>
    ;

  /* Preprocess TailwindCSS file to make it easier to parse:
  Remove `--tw-text-opacity: 1;` style declarations so we can make the regex faster */
  tailwind = tailwind.replace(/\s+--tw-.+;/g, '');

  function findClass(rule) {
    /* Figma defines `background` instead of `background-color`, fix that: */
    rule = rule.replace('background: ', 'background-color: ');
    /* Convert from Figma units to Tailwind units */
    rule = convertPxToRem(rule);
    rule = convertPercentToDec(rule);
    rule = convertHexToRgb(rule);
    const re = new RegExp(`\\.([a-z-.\\\\0-9]+) {\\n\\s*${rule}\\n}`);
    const match = tailwind.match(re);
    if (match) {
      return match[1];
    }
    console.warn("can't find rule: " + rule);
    return null;
  }

  const baseFontSize = 16;
  const pxRe = /([0-9]+)px/;
  function convertPxToRem(rule) {
    const match = rule.match(pxRe);
    if (!match) {
      return rule;
    }
    const px = parseInt(match[1]);
    const rem = px / baseFontSize;
    return rule.replace(pxRe, `${rem}rem`);
  }

  const percRe = /([0-9]+)%/;
  function convertPercentToDec(rule) {
    const match = rule.match(percRe);
    if (!match) {
      return rule;
    }
    const perc = parseInt(match[1]);
    const dec = perc / 100;
    return rule.replace(percRe, dec);
  }

  const hexRe = /#([0-9a-fA-F]+)/;
  function convertHexToRgb(rule) {
    const match = rule.match(hexRe);
    if (!match) {
      return rule;
    }
    const rgb = hexToRgb(match[1]);
    return rule.replace(hexRe, `rgba\\(${rgb}, var\\(--tw-.+\\)\\)`);
  }
  function hexToRgb(hex) {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return r + ', ' + g + ', ' + b;
  }

  const targetSelector = '[class^="raw_components--panel--"] [class^="scroll_container--innerScrollContainer"] > div';
  const lineSelector = '[class^="css_code_panel--cssLine"]';

  const observer = new MutationObserver(appendTailwindClassnames);
  const ignoreClasses = [/absolute/, /h-[0-9]+/, /flex/, /items-center/, /relative/, /text-center/];
  function appendTailwindClassnames() {
    /* Stop MutationObserver while this function runs, and re-enable it at the end. */
    observer.disconnect();

    const targetEl = document.querySelector(targetSelector);
    if (targetEl.querySelector('.metafy-translated-classnames')) {
      /* If already exists, remove. */
      targetEl.querySelector('.metafy-translated-classnames').remove();
    }

    const figmaRules = Array.from(document.querySelectorAll(lineSelector)).map(el => el.textContent);
    const classImportance = [/font-.+/, /text-.+/, /bg-.+/, /uppercase/, /rounded-.+/, /tracking-.+/, /leading-.+/];
    const classes = figmaRules
      .map(findClass)
      .filter(Boolean)
      .filter(c => {
        for (const ignore of ignoreClasses) {
          if (c.match(ignore)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        return classImportance.findIndex(re => a.match(re)) - classImportance.findIndex(re => b.match(re));
      })
      .join(' ');

    const translationEl = document.createElement('p');
    translationEl.classList.add('metafy-translated-classnames');
    translationEl.innerText = classes;
    targetEl.appendChild(translationEl);

    observer.observe(targetEl, {
      childList: true,
      subtree: true,
    });
  }
  appendTailwindClassnames();
})();
