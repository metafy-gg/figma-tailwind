(function () {
  let tailwind = 
    <<REPLACE>>
    ;

  /* Preprocess TailwindCSS file to make it easier to parse:
  Remove `--tw-text-opacity: 1;` style declarations so we can make the regex faster */
  tailwind = tailwind.replace(/\s+--tw-.+;\n\s/g, '\n');

  const rgbaRe = /rgba\(([0-9]+, [0-9]+, [0-9]+), .+\)/;
  const opacityRe = /rgba\([0-9]+, [0-9]+, [0-9]+, ([0-9\.]+)\)/;
  /* For given rule like "color: #FFFFFF;" matches "text-white" */
  function findClasses(css) {
    /* Figma defines `background` instead of `background-color`, fix that: */
    css = css.replace('background: ', 'background-color: ');

    /* Convert from Figma units to Tailwind units */
    css = convertPxToRem(css);
    css = convertPercentToDec(css);
    css = convertHexToRgb(css);
    let rules = [];

    /* Some CSS snippets can produce multiple classnames, so we need to match multiple rules:
      `background: rgba(255, 255, 255, 0.8);` should return: `['bg-white', 'bg-opacity-80']` */
    if (css.match(rgbaRe)) {
      /* Add first rule: `background-color`, `color`, etc... */
      rules.push(css.replace(rgbaRe, `rgba\\($1, var\\(--tw-.+\\)\\)`));

      /* Add second rule: text-opacity, bg-opacity, etc... */
      const opacityMatch = css.match(opacityRe);
      if (opacityMatch) {
        const opacityKinds = [
          { cssName: '^background-color:', tailwindName: 'bg' },
          { cssName: '^color:', tailwindName: 'text' },
          { cssName: '^border-color:', tailwindName: 'border' },
        ];
        let opacityName;
        for (const opacityKind of opacityKinds) {
          if (css.match(opacityKind.cssName)) {
            opacityName = opacityKind.tailwindName;
            break;
          }
        }
        /* For rules with decimals like `0.8`, try matching all versions: `0.8`, `0.80`, and `.8` and `.80`. */
        const opacity = parseFloat(opacityMatch[1]);
        rules.push(`--tw-${opacityName}-opacity: ${opacity};`);
        rules.push(`--tw-${opacityName}-opacity: ${opacity.toFixed(2)};`);
        rules.push(`--tw-${opacityName}-opacity: ${opacity.toString().slice(1)};`);
        rules.push(`--tw-${opacityName}-opacity: ${opacity.toFixed(2).toString().slice(1)};`);
      }
    } else {
      /* Just a single rule. */
      rules.push(css);
    }
    
    let matches = [];
    for (const rule of rules) {
      const re = new RegExp(`\\.([a-z-.\\\\0-9]+) {\\n\\s*${rule}\\n}`);
      const match = tailwind.match(re);
      if (match) {
        matches.push(match[1]);
      }
    }
    return matches;
  }
  global.findClasses = findClasses;

  const baseFontSize = 16;
  const pxRe = /([0-9]+)px/;
  /* Converts "16px" to "1rem", or
    "24px" to "1.5rem". */
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
  /* Converts "100%" to "1", or
    "150%" to "1.5". */
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
  /* Converts "#FFFFFF" to "rgba(255, 255, 255, var(--tw-.+)))". */
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

  const observer = typeof(window) !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(appendTailwindClasses) : null;

  const ignoreClasses = [/absolute/, /h-[0-9]+/, /flex/, /items-center/, /relative/, /text-center/];
  const classImportance = [/font-.+/, /text-.+/, /bg-.+/, /uppercase/, /rounded-.+/, /tracking-.+/, /leading-.+/];
  function appendTailwindClasses() {
    if (!observer) {
      return;
    }

    /* Stop MutationObserver while this function runs, and re-enable it at the end. */
    observer.disconnect();

    const targetEl = document.querySelector(targetSelector);
    if (targetEl.querySelector('.metafy-translated-classnames')) {
      /* If already exists, remove. */
      targetEl.querySelector('.metafy-translated-classnames').remove();
    }

    const figmaRules = Array.from(document.querySelectorAll(lineSelector)).map(el => el.textContent);
    const classes = figmaRules
      .map((css) => {
        let classes;
        try {
          classes = findClasses(css).join(' ');
        } catch {
          return null;
        }
        return classes;
      })
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
  appendTailwindClasses();
})();
