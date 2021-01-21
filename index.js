// Add your built TailwindCSS file here, then select the entire file and
// copy-paste into the dev console in an opened Figma tab.
var tailwind = ``;

// Preprocess TailwindCSS file to make it easier to parse:
// Remove `--tw-text-opacity: 1;` style declarations so we can make the regex faster
tailwind = tailwind.replace(/\s+--tw-.+;/g, '');

function findClass(rule) {
  // Figma defines `background` instead of `background-color`, fix that:
  rule = rule.replace('background: ', 'background-color: ');
  // Convert from Figma units to Tailwind units
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

var baseFontSize = 16;
var pxRe = /([0-9]+)px/;
function convertPxToRem(rule) {
  const match = rule.match(pxRe);
  if (!match) {
    return rule;
  }
  const px = parseInt(match[1]);
  const rem = px / baseFontSize;
  return rule.replace(pxRe, `${rem}rem`);
}

var percRe = /([0-9]+)%/;
function convertPercentToDec(rule) {
  const match = rule.match(percRe);
  if (!match) {
    return rule;
  }
  const perc = parseInt(match[1]);
  const dec = perc / 100;
  return rule.replace(percRe, dec);
}

var hexRe = /#([0-9a-fA-F]+)/;
function convertHexToRgb(rule) {
  const match = rule.match(hexRe);
  if (!match) {
    return rule;
  }
  const rgb = hexToRgb(match[1]);
  return rule.replace(hexRe, `rgba\\(${rgb}, var\\(--tw-.+\\)\\)`);
}
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return r + ', ' + g + ', ' + b;
}

var targetSelector = '[class^="raw_components--panel--"] [class^="scroll_container--innerScrollContainer"] > div';
var lineSelector = '[class^="css_code_panel--cssLine"]';

var observer = new MutationObserver(appendTailwindClassnames);
var ignoreClasses = [/absolute/, /h-[0-9]+/, /flex/, /items-center/, /relative/, /text-center/];
function appendTailwindClassnames() {
  // Stop MutationObserver while this function runs, and re-enable it at the end.
  observer.disconnect();

  var targetEl = document.querySelector(targetSelector);
  if (targetEl && targetEl.querySelector('.metafy-translated-classnames')) {
    // If already exists, remove.
    targetEl.querySelector('.metafy-translated-classnames').remove();
  }

  var figmaRules = Array.from(document.querySelectorAll(lineSelector)).map(el => el.textContent);
  const classImportance = [/font-.+/, /text-.+/, /bg-.+/, /uppercase/, /rounded-.+/, /tracking-.+/, /leading-.+/];
  var classes = figmaRules
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

  var translationEl = document.createElement('p');
  translationEl.classList.add('metafy-translated-classnames');
  translationEl.innerText = classes;
  targetEl.appendChild(translationEl);

  observer.observe(targetEl, {
    childList: true,
    subtree: true,
  });
}

appendTailwindClassnames();
