(function () {
  /* Add your built TailwindCSS file here, then select the entire file and
  copy-paste into the dev console in an opened Figma tab. */
  var tailwind = `
/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
     tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
  margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
  font-family:
		system-ui,
		-apple-system, /* Firefox supports this but not yet system-ui */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
  text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

/**
Restore the focus styles unset by the previous rule.
*/

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
  padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

/**
 * Work around a Firefox/IE bug where the transparent button background
 * results in a loss of the default button focus styles.
 */

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Tailwind custom reset styles
 */

/**
 * 1. Use the user's configured  sans  font-family (with Tailwind's default
 *    sans-serif font stack as a fallback) as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 *    to override it to ensure consistency even when using the default theme.
 */

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}

/**
 * Inherit font-family and line-height from  html  so users can set them as
 * a class directly on the  html  element.
 */

body {
  font-family: inherit;
  line-height: inherit;
}

/**
 * 1. Prevent padding and border from affecting element width.
 *
 *    We used to set this in the html element and inherit from
 *    the parent element for everything else. This caused issues
 *    in shadow-dom-enhanced elements like <details> where the content
 *    is wrapped by a div with box-sizing set to  content-box .
 *
 *    https://github.com/mozdevs/cssremedy/issues/4
 *
 *
 * 2. Allow adding a border to an element by just adding a border-width.
 *
 *    By default, the way the browser specifies that an element should have no
 *    border is by setting it's border-style to  none  in the user-agent
 *    stylesheet.
 *
 *    In order to easily add borders to elements by just setting the  border-width 
 *    property, we change the default border-style for all elements to  solid , and
 *    use border-width to hide them instead. This way our  border  utilities only
 *    need to set the  border-width  property instead of the entire  border 
 *    shorthand, making our border utilities much more straightforward to compose.
 *
 *    https://github.com/tailwindcss/tailwindcss/pull/116
 */

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

/*
 * Ensure horizontal rules are visible by default
 */

hr {
  border-top-width: 1px;
}

/**
 * Undo the  border-style: none  reset that Normalize applies to images so that
 * our  border-{width}  utilities have the expected effect.
 *
 * The Normalize reset is unnecessary for us since we default the border-width
 * to 0 on all elements.
 *
 * https://github.com/tailwindcss/tailwindcss/issues/362
 */

img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #9ca3af;
}

input::-ms-input-placeholder, textarea::-ms-input-placeholder {
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */

a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */

pre,
code,
kbd,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/**
 * Make replaced elements  display: block  by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with  svg  added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

/**
 * Constrain images and videos to the parent width and preserve
 * their instrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

img,
video {
  max-width: 100%;
  height: auto;
}


      [type='text'],
      [type='email'],
      [type='url'],
      [type='password'],
      [type='number'],
      [type='date'],
      [type='month'],
      [type='search'],
      [type='time'],
      [multiple],
      textarea,
      select
     {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='month']:focus, [type='search']:focus, [type='time']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::-ms-input-placeholder, textarea::-ms-input-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder, textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
}

[multiple] {
  background-image: none;
  background-image: initial;
  background-position: 0 0;
  background-position: initial;
  background-repeat: unset;
  background-size: auto auto;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          color-adjust: unset;
}


      [type='checkbox'],
      [type='radio']
     {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}


      [type='checkbox']:focus,
      [type='radio']:focus
     {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}


      [type='checkbox']:checked,
      [type='radio']:checked
     {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}


      [type='checkbox']:checked:hover,
      [type='checkbox']:checked:focus,
      [type='radio']:checked:hover,
      [type='radio']:checked:focus
     {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}


      [type='checkbox']:indeterminate:hover,
      [type='checkbox']:indeterminate:focus
     {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto -webkit-focus-ring-color;
}

/* TODO: 
  We place these rules here so that we can override them using Tailwind classes.
  
  Additionally, for some reason, when placing these styles in FormControl.svelte Svelte will add
  3 of its .svelte-**** auto-generated class names to these rules, which raises the specificity by a lot and
  makes these rules not overridable from page styles, unless we artificially raise the specificity of those rules by repeating
  the class name 4 times, which is very ugly.
  A temporary solution is to place these rules here as a global style. */

/* Custom input, textarea */

.input, .textarea {
  --tw-bg-opacity: 1;
  background-color: rgba(24, 26, 30, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(24, 26, 30, var(--tw-border-opacity));
  border-radius: 0.375rem;
  border-width: 1px;
  font-size: 0.875rem;
  line-height: 1;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  width: 100%;
}

.input, .textarea {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

@media (min-width: 768px) {

.input,
.textarea {
    font-size: 1rem;

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 1.25rem;

    padding-bottom: 1.25rem;
}
  }

.input::-moz-placeholder, .textarea::-moz-placeholder {
    --tw-text-opacity: 1;
    color: rgba(121, 134, 148, var(--tw-text-opacity));
    --tw-text-opacity: .60;
  }

.input:-ms-input-placeholder, .textarea:-ms-input-placeholder {
    --tw-text-opacity: 1;
    color: rgba(121, 134, 148, var(--tw-text-opacity));
    --tw-text-opacity: .60;
  }

.input::-ms-input-placeholder, .textarea::-ms-input-placeholder {
    --tw-text-opacity: 1;
    color: rgba(121, 134, 148, var(--tw-text-opacity));
    --tw-text-opacity: .60;
  }

.input::placeholder, .textarea::placeholder {
    --tw-text-opacity: 1;
    color: rgba(121, 134, 148, var(--tw-text-opacity));
    --tw-text-opacity: .60;
  }

.input:hover, .textarea:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(33, 37, 42, var(--tw-bg-opacity));
  }

.input:focus, .textarea:focus {
    --tw-bg-opacity: 1;
    background-color: rgba(24, 26, 30, var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: rgba(190, 52, 52, var(--tw-border-opacity));
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

.input:disabled, .textarea:disabled {
    background-color: transparent;
    --tw-border-opacity: 1;
    border-color: rgba(121, 134, 148, var(--tw-border-opacity));
    --tw-border-opacity: .15;
    --tw-text-opacity: .40;
  }

.textarea {
  line-height: 1.5;
  padding-left: 0.75rem;
  padding-right: 0.75rem
}

@media (min-width: 768px) {

.textarea {
    padding-top: 0.75rem;

    padding-bottom: 0.75rem
}
  }

.input[type='checkbox']:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(190, 52, 52, var(--tw-ring-opacity));
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}

.space-x-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.5rem * var(--tw-space-x-reverse));
  margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3rem * var(--tw-space-y-reverse));
}

.space-x-10px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(10px * var(--tw-space-x-reverse));
  margin-left: calc(10px * calc(1 - var(--tw-space-x-reverse)));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-neutrals-l50 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgba(142, 148, 154, var(--tw-divide-opacity));
}

.divide-opacity-15 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: .15;
}

.divide-opacity-25 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 0.25;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.bg-transparent {
  background-color: transparent;
}

.bg-current {
  background-color: currentColor;
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--tw-bg-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.bg-neutrals-d00 {
  --tw-bg-opacity: 1;
  background-color: rgba(33, 37, 42, var(--tw-bg-opacity));
}

.bg-neutrals-d10 {
  --tw-bg-opacity: 1;
  background-color: rgba(24, 26, 30, var(--tw-bg-opacity));
}

.bg-neutrals-d20 {
  --tw-bg-opacity: 1;
  background-color: rgba(26, 30, 35, var(--tw-bg-opacity));
}

.bg-neutrals-d30 {
  --tw-bg-opacity: 1;
  background-color: rgba(3, 4, 4, var(--tw-bg-opacity));
}

.bg-neutrals-d40 {
  --tw-bg-opacity: 1;
  background-color: rgba(27, 32, 37, var(--tw-bg-opacity));
}

.bg-neutrals-l10 {
  --tw-bg-opacity: 1;
  background-color: rgba(235, 236, 240, var(--tw-bg-opacity));
}

.bg-neutrals-l20 {
  --tw-bg-opacity: 1;
  background-color: rgba(158, 160, 165, var(--tw-bg-opacity));
}

.bg-neutrals-l40 {
  --tw-bg-opacity: 1;
  background-color: rgba(121, 134, 148, var(--tw-bg-opacity));
}

.bg-neutrals-l50 {
  --tw-bg-opacity: 1;
  background-color: rgba(142, 148, 154, var(--tw-bg-opacity));
}

.bg-functional-r10 {
  --tw-bg-opacity: 1;
  background-color: rgba(219, 58, 58, var(--tw-bg-opacity));
}

.bg-functional-r20 {
  --tw-bg-opacity: 1;
  background-color: rgba(190, 52, 52, var(--tw-bg-opacity));
}

.bg-functional-y00 {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 196, 3, var(--tw-bg-opacity));
}

.bg-functional-y10 {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 171, 0, var(--tw-bg-opacity));
}

.bg-functional-g10 {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 135, 90, var(--tw-bg-opacity));
}

.bg-functional-b10 {
  --tw-bg-opacity: 1;
  background-color: rgba(125, 193, 244, var(--tw-bg-opacity));
}

.bg-functional-b20 {
  --tw-bg-opacity: 1;
  background-color: rgba(35, 57, 69, var(--tw-bg-opacity));
}

.bg-brands-metafy {
  --tw-bg-opacity: 1;
  background-color: rgba(184, 47, 54, var(--tw-bg-opacity));
}

.bg-brands-discord {
  --tw-bg-opacity: 1;
  background-color: rgba(114, 137, 218, var(--tw-bg-opacity));
}

.bg-brands-twitch {
  --tw-bg-opacity: 1;
  background-color: rgba(145, 70, 255, var(--tw-bg-opacity));
}

.bg-brands-google {
  --tw-bg-opacity: 1;
  background-color: rgba(234, 67, 53, var(--tw-bg-opacity));
}

.bg-brands-paypal {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 112, 186, var(--tw-bg-opacity));
}

.bg-brands-twitter {
  --tw-bg-opacity: 1;
  background-color: rgba(29, 161, 242, var(--tw-bg-opacity));
}

.bg-brands-facebook {
  --tw-bg-opacity: 1;
  background-color: rgba(66, 103, 178, var(--tw-bg-opacity));
}

.bg-brands-youtube {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 0, 0, var(--tw-bg-opacity));
}

.bg-brands-dribbble {
  --tw-bg-opacity: 1;
  background-color: rgba(234, 76, 137, var(--tw-bg-opacity));
}

.bg-brands-instagram {
  --tw-bg-opacity: 1;
  background-color: rgba(225, 48, 108, var(--tw-bg-opacity));
}

.hover\:bg-neutrals-d00:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(33, 37, 42, var(--tw-bg-opacity));
}

.hover\:bg-neutrals-d20:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(26, 30, 35, var(--tw-bg-opacity));
}

.hover\:bg-functional-r30:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(186, 43, 43, var(--tw-bg-opacity));
}

.hover\:bg-brands-discord:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(114, 137, 218, var(--tw-bg-opacity));
}

.hover\:bg-brands-twitch:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(145, 70, 255, var(--tw-bg-opacity));
}

.hover\:bg-brands-google:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(234, 67, 53, var(--tw-bg-opacity));
}

.hover\:bg-brands-paypal:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 112, 186, var(--tw-bg-opacity));
}

.bg-opacity-15 {
  --tw-bg-opacity: .15;
}

.bg-opacity-25 {
  --tw-bg-opacity: 0.25;
}

.bg-opacity-35 {
  --tw-bg-opacity: .35;
}

.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

.bg-opacity-60 {
  --tw-bg-opacity: .60;
}

.bg-opacity-65 {
  --tw-bg-opacity: .65;
}

.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}

.bg-opacity-80 {
  --tw-bg-opacity: .8;
}

.bg-opacity-85 {
  --tw-bg-opacity: .85;
}

.bg-opacity-90 {
  --tw-bg-opacity: .9;
}

.hover\:bg-opacity-100:hover {
  --tw-bg-opacity: 1;
}

.bg-center {
  background-position: center;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.bg-cover {
  background-size: cover;
}

.bg-contain {
  background-size: contain;
}

.border-transparent {
  border-color: transparent;
}

.border-black {
  --tw-border-opacity: 1;
  border-color: rgba(15, 15, 15, var(--tw-border-opacity));
}

.border-neutrals-d00 {
  --tw-border-opacity: 1;
  border-color: rgba(33, 37, 42, var(--tw-border-opacity));
}

.border-neutrals-d10 {
  --tw-border-opacity: 1;
  border-color: rgba(24, 26, 30, var(--tw-border-opacity));
}

.border-neutrals-d20 {
  --tw-border-opacity: 1;
  border-color: rgba(26, 30, 35, var(--tw-border-opacity));
}

.border-neutrals-d30 {
  --tw-border-opacity: 1;
  border-color: rgba(3, 4, 4, var(--tw-border-opacity));
}

.border-neutrals-l30 {
  --tw-border-opacity: 1;
  border-color: rgba(130, 147, 164, var(--tw-border-opacity));
}

.border-neutrals-l40 {
  --tw-border-opacity: 1;
  border-color: rgba(121, 134, 148, var(--tw-border-opacity));
}

.border-neutrals-l50 {
  --tw-border-opacity: 1;
  border-color: rgba(142, 148, 154, var(--tw-border-opacity));
}

.border-functional-r10 {
  --tw-border-opacity: 1;
  border-color: rgba(219, 58, 58, var(--tw-border-opacity));
}

.border-functional-r20 {
  --tw-border-opacity: 1;
  border-color: rgba(190, 52, 52, var(--tw-border-opacity));
}

.border-functional-r50 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 67, 67, var(--tw-border-opacity));
}

.border-functional-y00 {
  --tw-border-opacity: 1;
  border-color: rgba(254, 196, 3, var(--tw-border-opacity));
}

.border-functional-g10 {
  --tw-border-opacity: 1;
  border-color: rgba(0, 135, 90, var(--tw-border-opacity));
}

.border-functional-b10 {
  --tw-border-opacity: 1;
  border-color: rgba(125, 193, 244, var(--tw-border-opacity));
}

.group:hover .group-hover\:border-functional-r50 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 67, 67, var(--tw-border-opacity));
}

.border-opacity-0 {
  --tw-border-opacity: 0;
}

.border-opacity-15 {
  --tw-border-opacity: .15;
}

.border-opacity-20 {
  --tw-border-opacity: 0.2;
}

.border-opacity-25 {
  --tw-border-opacity: 0.25;
}

.border-opacity-35 {
  --tw-border-opacity: .35;
}

.border-opacity-40 {
  --tw-border-opacity: .40;
}

.border-opacity-50 {
  --tw-border-opacity: 0.5;
}

.border-opacity-60 {
  --tw-border-opacity: .60;
}

.border-opacity-100 {
  --tw-border-opacity: 1;
}

.hover\:border-opacity-50:hover {
  --tw-border-opacity: 0.5;
}

.rounded-none {
  border-radius: 0px;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-xl {
  border-radius: 0.625rem;
}

.rounded-2xl {
  border-radius: 0.75rem;
}

.rounded-3xl {
  border-radius: 1rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-t-xl {
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
}

.rounded-b-xl {
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
}

.rounded-t-3xl {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.rounded-tr-none {
  border-top-right-radius: 0px;
}

.rounded-br-none {
  border-bottom-right-radius: 0px;
}

.rounded-tl {
  border-top-left-radius: 0.25rem;
}

.rounded-tr {
  border-top-right-radius: 0.25rem;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}

.rounded-br-3xl {
  border-bottom-right-radius: 1rem;
}

.border-none {
  border-style: none;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border {
  border-width: 1px;
}

.border-t-0 {
  border-top-width: 0px;
}

.border-r-0 {
  border-right-width: 0px;
}

.border-l-0 {
  border-left-width: 0px;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-l-2 {
  border-left-width: 2px;
}

.border-t {
  border-top-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.box-content {
  box-sizing: content-box;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.font-body {
  font-family: Graphik Web, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-normal {
  font-weight: 400;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.h-1 {
  height: 0.25rem;
}

.h-3 {
  height: 0.75rem;
}

.h-4 {
  height: 1rem;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-16 {
  height: 4rem;
}

.h-px {
  height: 1px;
}

.h-full {
  height: 100%;
}

.h-screen {
  height: 100vh;
}

.text-xxs {
  font-size: 0.625rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-base {
  font-size: 1rem;
}

.text-xl {
  font-size: 1.25rem;
}

.text-1\.5xl {
  font-size: 1.5rem;
}

.text-2xl {
  font-size: 1.625rem;
}

.text-3xl {
  font-size: 1.75rem;
}

.text-3\.25xl {
  font-size: 2rem;
}

.text-3\.5xl {
  font-size: 2.5rem;
}

.text-4xl {
  font-size: 2.625rem;
}

.text-5xl {
  font-size: 4.5rem;
}

.leading-4 {
  line-height: 1rem;
}

.leading-7 {
  line-height: 1.75rem;
}

.leading-8 {
  line-height: 2rem;
}

.leading-9 {
  line-height: 2.25rem;
}

.leading-none {
  line-height: 1;
}

.leading-tight {
  line-height: 1.25;
}

.leading-snug {
  line-height: 1.375;
}

.leading-normal {
  line-height: 1.5;
}

.leading-relaxed {
  line-height: 1.625;
}

.list-none {
  list-style-type: none;
}

.list-decimal {
  list-style-type: decimal;
}

.m-auto {
  margin: auto;
}

.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mx-32 {
  margin-left: 8rem;
  margin-right: 8rem;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-0 {
  margin-top: 0px;
}

.mr-0 {
  margin-right: 0px;
}

.mb-0 {
  margin-bottom: 0px;
}

.ml-0 {
  margin-left: 0px;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mr-10 {
  margin-right: 2.5rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mb-20 {
  margin-bottom: 5rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mb-24 {
  margin-bottom: 6rem;
}

.mt-28 {
  margin-top: 7rem;
}

.mt-32 {
  margin-top: 8rem;
}

.mb-32 {
  margin-bottom: 8rem;
}

.mb-36 {
  margin-bottom: 9rem;
}

.mt-auto {
  margin-top: auto;
}

.mr-auto {
  margin-right: auto;
}

.ml-auto {
  margin-left: auto;
}

.-mt-2 {
  margin-top: -0.5rem;
}

.-mt-3 {
  margin-top: -0.75rem;
}

.-mr-3 {
  margin-right: -0.75rem;
}

.-mt-4 {
  margin-top: -1rem;
}

.-mb-8 {
  margin-bottom: -2rem;
}

.-mt-10 {
  margin-top: -2.5rem;
}

.-mt-24 {
  margin-top: -6rem;
}

.-mb-32 {
  margin-bottom: -8rem;
}

.-mt-40 {
  margin-top: -10rem;
}

.-mt-64 {
  margin-top: -16rem;
}

.max-w-none {
  max-width: none;
}

.max-w-xs {
  max-width: 20rem;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-lg {
  max-width: 32rem;
}

.min-h-screen {
  min-height: 100vh;
}

.min-w-0 {
  min-width: 0px;
}

.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.object-center {
  -o-object-position: center;
     object-position: center;
}

.object-left {
  -o-object-position: left;
     object-position: left;
}

.object-top {
  -o-object-position: top;
     object-position: top;
}

.opacity-0 {
  opacity: 0;
}

.opacity-15 {
  opacity: .15;
}

.opacity-25 {
  opacity: 0.25;
}

.opacity-35 {
  opacity: .35;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-60 {
  opacity: .60;
}

.opacity-65 {
  opacity: .65;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-80 {
  opacity: .8;
}

.opacity-90 {
  opacity: .9;
}

.opacity-97 {
  opacity: .97;
}

.opacity-100 {
  opacity: 1;
}

.hover\:opacity-100:hover {
  opacity: 1;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-visible {
  overflow-y: visible;
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.px-16 {
  padding-left: 4rem;
  padding-right: 4rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.py-10px {
  padding-top: 10px;
  padding-bottom: 10px;
}

.px-10px {
  padding-left: 10px;
  padding-right: 10px;
}

.pt-0 {
  padding-top: 0px;
}

.pr-0 {
  padding-right: 0px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pl-0 {
  padding-left: 0px;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pr-8 {
  padding-right: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.pt-12 {
  padding-top: 3rem;
}

.pb-12 {
  padding-bottom: 3rem;
}

.pl-14 {
  padding-left: 3.5rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pb-16 {
  padding-bottom: 4rem;
}

.pt-20 {
  padding-top: 5rem;
}

.pb-20 {
  padding-bottom: 5rem;
}

.pb-24 {
  padding-bottom: 6rem;
}

.pb-32 {
  padding-bottom: 8rem;
}

.pb-36 {
  padding-bottom: 9rem;
}

.pt-52 {
  padding-top: 13rem;
}

.placeholder-transparent::-moz-placeholder {
  color: transparent;
}

.placeholder-transparent:-ms-input-placeholder {
  color: transparent;
}

.placeholder-transparent::-ms-input-placeholder {
  color: transparent;
}

.placeholder-transparent::placeholder {
  color: transparent;
}

.placeholder-neutrals-l00::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-placeholder-opacity));
}

.placeholder-neutrals-l00:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-placeholder-opacity));
}

.placeholder-neutrals-l00::-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-placeholder-opacity));
}

.placeholder-neutrals-l00::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-placeholder-opacity));
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
}

.top-0 {
  top: 0px;
}

.right-0 {
  right: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.right-auto {
  right: auto;
}

.top-1\/2 {
  top: 50%;
}

.left-1\/2 {
  left: 50%;
}

.resize-none {
  resize: none;
}

* {
  --tw-shadow: 0 0 #0000;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0px 15px 12px rgba(0, 0, 0, 0.08), 0px 8px 5px rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0px 24px 18px rgba(0, 0, 0, 0.08), 0px 18px 12px rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

* {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
}

.ring-functional-r20 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(190, 52, 52, var(--tw-ring-opacity));
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgba(15, 15, 15, var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.text-neutrals-d00 {
  --tw-text-opacity: 1;
  color: rgba(33, 37, 42, var(--tw-text-opacity));
}

.text-neutrals-d20 {
  --tw-text-opacity: 1;
  color: rgba(26, 30, 35, var(--tw-text-opacity));
}

.text-neutrals-d30 {
  --tw-text-opacity: 1;
  color: rgba(3, 4, 4, var(--tw-text-opacity));
}

.text-neutrals-l00 {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.text-neutrals-l10 {
  --tw-text-opacity: 1;
  color: rgba(235, 236, 240, var(--tw-text-opacity));
}

.text-neutrals-l20 {
  --tw-text-opacity: 1;
  color: rgba(158, 160, 165, var(--tw-text-opacity));
}

.text-neutrals-l30 {
  --tw-text-opacity: 1;
  color: rgba(130, 147, 164, var(--tw-text-opacity));
}

.text-neutrals-l40 {
  --tw-text-opacity: 1;
  color: rgba(121, 134, 148, var(--tw-text-opacity));
}

.text-functional-r00 {
  --tw-text-opacity: 1;
  color: rgba(235, 70, 70, var(--tw-text-opacity));
}

.text-functional-r10 {
  --tw-text-opacity: 1;
  color: rgba(219, 58, 58, var(--tw-text-opacity));
}

.text-functional-r20 {
  --tw-text-opacity: 1;
  color: rgba(190, 52, 52, var(--tw-text-opacity));
}

.text-functional-r30 {
  --tw-text-opacity: 1;
  color: rgba(186, 43, 43, var(--tw-text-opacity));
}

.text-functional-r40 {
  --tw-text-opacity: 1;
  color: rgba(216, 63, 63, var(--tw-text-opacity));
}

.text-functional-r50 {
  --tw-text-opacity: 1;
  color: rgba(241, 67, 67, var(--tw-text-opacity));
}

.text-functional-r60 {
  --tw-text-opacity: 1;
  color: rgba(214, 62, 62, var(--tw-text-opacity));
}

.text-functional-y00 {
  --tw-text-opacity: 1;
  color: rgba(254, 196, 3, var(--tw-text-opacity));
}

.text-functional-g00 {
  --tw-text-opacity: 1;
  color: rgba(65, 198, 153, var(--tw-text-opacity));
}

.text-functional-b00 {
  --tw-text-opacity: 1;
  color: rgba(145, 183, 195, var(--tw-text-opacity));
}

.text-functional-b10 {
  --tw-text-opacity: 1;
  color: rgba(125, 193, 244, var(--tw-text-opacity));
}

.text-brands-metafy {
  --tw-text-opacity: 1;
  color: rgba(184, 47, 54, var(--tw-text-opacity));
}

.text-brands-discord {
  --tw-text-opacity: 1;
  color: rgba(114, 137, 218, var(--tw-text-opacity));
}

.hover\:text-neutrals-l00:hover {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.hover\:text-functional-r20:hover {
  --tw-text-opacity: 1;
  color: rgba(190, 52, 52, var(--tw-text-opacity));
}

.hover\:text-functional-r50:hover {
  --tw-text-opacity: 1;
  color: rgba(241, 67, 67, var(--tw-text-opacity));
}

.group:hover .group-hover\:text-neutrals-l00 {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.group:hover .group-hover\:text-functional-r50 {
  --tw-text-opacity: 1;
  color: rgba(241, 67, 67, var(--tw-text-opacity));
}

.text-opacity-60 {
  --tw-text-opacity: .60;
}

.text-opacity-65 {
  --tw-text-opacity: .65;
}

.text-opacity-80 {
  --tw-text-opacity: .8;
}

.text-opacity-85 {
  --tw-text-opacity: .85;
}

.text-opacity-90 {
  --tw-text-opacity: .9;
}

.text-opacity-97 {
  --tw-text-opacity: .97;
}

.text-opacity-100 {
  --tw-text-opacity: 1;
}

.group:hover .group-hover\:text-opacity-100 {
  --tw-text-opacity: 1;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.italic {
  font-style: italic;
}

.uppercase {
  text-transform: uppercase;
}

.underline {
  text-decoration: underline;
}

.line-through {
  text-decoration: line-through;
}

.-tracking-0\.01 {
  letter-spacing: -0.01em;
}

.-tracking-0\.005 {
  letter-spacing: -0.005em;
}

.tracking-0\.01 {
  letter-spacing: 0.01em;
}

.tracking-0\.02 {
  letter-spacing: 0.02em;
}

.tracking-0\.08 {
  letter-spacing: 0.08em;
}

.tracking-0\.1 {
  letter-spacing: 0.1em;
}

.tracking-0\.12 {
  letter-spacing: 0.12em;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.select-text {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
}

.visible {
  visibility: visible;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.break-words {
  overflow-wrap: break-word;
}

.w-3 {
  width: 0.75rem;
}

.w-4 {
  width: 1rem;
}

.w-6 {
  width: 1.5rem;
}

.w-8 {
  width: 2rem;
}

.w-12 {
  width: 3rem;
}

.w-16 {
  width: 4rem;
}

.w-20 {
  width: 5rem;
}

.w-40 {
  width: 10rem;
}

.w-auto {
  width: auto;
}

.w-px {
  width: 1px;
}

.w-1\/2 {
  width: 50%;
}

.w-1\/3 {
  width: 33.333333%;
}

.w-2\/3 {
  width: 66.666667%;
}

.w-1\/4 {
  width: 25%;
}

.w-4\/5 {
  width: 80%;
}

.w-4\/12 {
  width: 33.333333%;
}

.w-8\/12 {
  width: 66.666667%;
}

.w-11\/12 {
  width: 91.666667%;
}

.w-full {
  width: 100%;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.gap-3 {
  grid-gap: 0.75rem;
  gap: 0.75rem;
}

.gap-4 {
  grid-gap: 1rem;
  gap: 1rem;
}

.gap-x-2 {
  grid-column-gap: 0.5rem;
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

.gap-x-3 {
  grid-column-gap: 0.75rem;
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}

.gap-x-4 {
  grid-column-gap: 1rem;
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-x-5 {
  grid-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
       column-gap: 1.25rem;
}

.gap-x-6 {
  grid-column-gap: 1.5rem;
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}

.gap-y-3 {
  grid-row-gap: 0.75rem;
  row-gap: 0.75rem;
}

.gap-y-4 {
  grid-row-gap: 1rem;
  row-gap: 1rem;
}

.gap-y-16 {
  grid-row-gap: 4rem;
  row-gap: 4rem;
}

.grid-flow-col {
  grid-auto-flow: column;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.transform {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
}

.-translate-x-1\/2 {
  --tw-translate-x: -50%;
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
}

.-translate-y-1\/2 {
  --tw-translate-y: -50%;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

.backdrop-blur {
  -webkit-backdrop-filter: blur(32px);
          backdrop-filter: blur(32px);
}

.backdrop-blur-lg {
  -webkit-backdrop-filter: blur(40px);
          backdrop-filter: blur(40px);
}

/* Globally disable button focus ring */

button:focus {
  outline: 0;
}

/* Spinner */

.spinner {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

.spinner::after {
  content: '';
  position: absolute !important;
  top: calc(50% - (1em / 2));
  left: calc(50% - (1em / 2));
  display: block;
  width: 1rem;
  height: 1rem;
  border: 1px solid #ffffff;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  animation-duration: 500ms;
}

@media (min-width: 640px) {
  .sm\:flex-row {
    flex-direction: row;
  }

  .sm\:items-center {
    align-items: center;
  }

  .sm\:h-8 {
    height: 2rem;
  }

  .sm\:h-10 {
    height: 2.5rem;
  }

  .sm\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\:ml-3 {
    margin-left: 0.75rem;
  }

  .sm\:mr-5 {
    margin-right: 1.25rem;
  }

  .sm\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .sm\:ml-5 {
    margin-left: 1.25rem;
  }

  .sm\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .sm\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .sm\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .sm\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .sm\:w-8 {
    width: 2rem;
  }

  .sm\:w-auto {
    width: auto;
  }

  .sm\:w-1\/2 {
    width: 50%;
  }

  .sm\:w-4\/5 {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .md\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\:space-x-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0px * var(--tw-space-x-reverse));
    margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-y-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
  }

  .md\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }

  .md\:space-x-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.25rem * var(--tw-space-x-reverse));
    margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-y-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  }

  .md\:space-x-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.5rem * var(--tw-space-x-reverse));
    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2rem * var(--tw-space-y-reverse));
  }

  .md\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-x-16 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(4rem * var(--tw-space-x-reverse));
    margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:rounded-lg {
    border-radius: 0.5rem;
  }

  .md\:rounded-2xl {
    border-radius: 0.75rem;
  }

  .md\:border-0 {
    border-width: 0px;
  }

  .md\:border-b-0 {
    border-bottom-width: 0px;
  }

  .md\:border-b {
    border-bottom-width: 1px;
  }

  .md\:block {
    display: block;
  }

  .md\:inline {
    display: inline;
  }

  .md\:flex {
    display: flex;
  }

  .md\:hidden {
    display: none;
  }

  .md\:flex-row {
    flex-direction: row;
  }

  .md\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .md\:flex-col {
    flex-direction: column;
  }

  .md\:items-start {
    align-items: flex-start;
  }

  .md\:items-center {
    align-items: center;
  }

  .md\:justify-end {
    justify-content: flex-end;
  }

  .md\:justify-between {
    justify-content: space-between;
  }

  .md\:font-normal {
    font-weight: 400;
  }

  .md\:h-4 {
    height: 1rem;
  }

  .md\:text-xs {
    font-size: 0.75rem;
  }

  .md\:text-sm {
    font-size: 0.875rem;
  }

  .md\:text-base {
    font-size: 1rem;
  }

  .md\:text-xl {
    font-size: 1.25rem;
  }

  .md\:text-1\.5xl {
    font-size: 1.5rem;
  }

  .md\:text-2xl {
    font-size: 1.625rem;
  }

  .md\:text-3xl {
    font-size: 1.75rem;
  }

  .md\:text-3\.25xl {
    font-size: 2rem;
  }

  .md\:text-3\.5xl {
    font-size: 2.5rem;
  }

  .md\:text-4xl {
    font-size: 2.625rem;
  }

  .md\:leading-8 {
    line-height: 2rem;
  }

  .md\:leading-none {
    line-height: 1;
  }

  .md\:leading-tight {
    line-height: 1.25;
  }

  .md\:leading-snug {
    line-height: 1.375;
  }

  .md\:leading-normal {
    line-height: 1.5;
  }

  .md\:leading-relaxed {
    line-height: 1.625;
  }

  .md\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .md\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .md\:mt-0 {
    margin-top: 0px;
  }

  .md\:mr-0 {
    margin-right: 0px;
  }

  .md\:mb-0 {
    margin-bottom: 0px;
  }

  .md\:ml-0 {
    margin-left: 0px;
  }

  .md\:ml-1 {
    margin-left: 0.25rem;
  }

  .md\:mr-2 {
    margin-right: 0.5rem;
  }

  .md\:mb-2 {
    margin-bottom: 0.5rem;
  }

  .md\:mt-3 {
    margin-top: 0.75rem;
  }

  .md\:mr-3 {
    margin-right: 0.75rem;
  }

  .md\:mb-3 {
    margin-bottom: 0.75rem;
  }

  .md\:ml-3 {
    margin-left: 0.75rem;
  }

  .md\:mr-4 {
    margin-right: 1rem;
  }

  .md\:mb-4 {
    margin-bottom: 1rem;
  }

  .md\:ml-4 {
    margin-left: 1rem;
  }

  .md\:mt-5 {
    margin-top: 1.25rem;
  }

  .md\:mr-5 {
    margin-right: 1.25rem;
  }

  .md\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .md\:ml-5 {
    margin-left: 1.25rem;
  }

  .md\:mt-6 {
    margin-top: 1.5rem;
  }

  .md\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\:mb-6 {
    margin-bottom: 1.5rem;
  }

  .md\:ml-6 {
    margin-left: 1.5rem;
  }

  .md\:mt-8 {
    margin-top: 2rem;
  }

  .md\:mr-8 {
    margin-right: 2rem;
  }

  .md\:mb-8 {
    margin-bottom: 2rem;
  }

  .md\:ml-8 {
    margin-left: 2rem;
  }

  .md\:mt-10 {
    margin-top: 2.5rem;
  }

  .md\:mb-10 {
    margin-bottom: 2.5rem;
  }

  .md\:mt-12 {
    margin-top: 3rem;
  }

  .md\:mr-12 {
    margin-right: 3rem;
  }

  .md\:ml-12 {
    margin-left: 3rem;
  }

  .md\:mb-14 {
    margin-bottom: 3.5rem;
  }

  .md\:mt-16 {
    margin-top: 4rem;
  }

  .md\:mr-16 {
    margin-right: 4rem;
  }

  .md\:mb-16 {
    margin-bottom: 4rem;
  }

  .md\:mt-20 {
    margin-top: 5rem;
  }

  .md\:mb-20 {
    margin-bottom: 5rem;
  }

  .md\:ml-20 {
    margin-left: 5rem;
  }

  .md\:mt-24 {
    margin-top: 6rem;
  }

  .md\:ml-auto {
    margin-left: auto;
  }

  .md\:-mr-5 {
    margin-right: -1.25rem;
  }

  .md\:-mt-6 {
    margin-top: -1.5rem;
  }

  .md\:-mr-6 {
    margin-right: -1.5rem;
  }

  .md\:-mt-16 {
    margin-top: -4rem;
  }

  .md\:-mt-24 {
    margin-top: -6rem;
  }

  .md\:-mt-40 {
    margin-top: -10rem;
  }

  .md\:overflow-x-hidden {
    overflow-x: hidden;
  }

  .md\:p-0 {
    padding: 0px;
  }

  .md\:p-2 {
    padding: 0.5rem;
  }

  .md\:p-3 {
    padding: 0.75rem;
  }

  .md\:p-4 {
    padding: 1rem;
  }

  .md\:p-5 {
    padding: 1.25rem;
  }

  .md\:p-6 {
    padding: 1.5rem;
  }

  .md\:p-8 {
    padding: 2rem;
  }

  .md\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .md\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .md\:py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .md\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .md\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .md\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .md\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .md\:py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .md\:px-16 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .md\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .md\:py-32 {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .md\:pr-0 {
    padding-right: 0px;
  }

  .md\:pb-0 {
    padding-bottom: 0px;
  }

  .md\:pr-3 {
    padding-right: 0.75rem;
  }

  .md\:pb-3 {
    padding-bottom: 0.75rem;
  }

  .md\:pt-4 {
    padding-top: 1rem;
  }

  .md\:pr-4 {
    padding-right: 1rem;
  }

  .md\:pb-4 {
    padding-bottom: 1rem;
  }

  .md\:pr-5 {
    padding-right: 1.25rem;
  }

  .md\:pb-5 {
    padding-bottom: 1.25rem;
  }

  .md\:pl-5 {
    padding-left: 1.25rem;
  }

  .md\:pt-6 {
    padding-top: 1.5rem;
  }

  .md\:pr-6 {
    padding-right: 1.5rem;
  }

  .md\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .md\:pt-8 {
    padding-top: 2rem;
  }

  .md\:pb-8 {
    padding-bottom: 2rem;
  }

  .md\:pt-10 {
    padding-top: 2.5rem;
  }

  .md\:pb-10 {
    padding-bottom: 2.5rem;
  }

  .md\:pl-10 {
    padding-left: 2.5rem;
  }

  .md\:pt-12 {
    padding-top: 3rem;
  }

  .md\:pr-12 {
    padding-right: 3rem;
  }

  .md\:pb-12 {
    padding-bottom: 3rem;
  }

  .md\:pl-12 {
    padding-left: 3rem;
  }

  .md\:pt-14 {
    padding-top: 3.5rem;
  }

  .md\:pt-16 {
    padding-top: 4rem;
  }

  .md\:pt-20 {
    padding-top: 5rem;
  }

  .md\:pb-24 {
    padding-bottom: 6rem;
  }

  .md\:pt-28 {
    padding-top: 7rem;
  }

  .md\:pt-32 {
    padding-top: 8rem;
  }

  .md\:pt-36 {
    padding-top: 9rem;
  }

  .md\:placeholder-neutrals-l30::-moz-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(130, 147, 164, var(--tw-placeholder-opacity));
  }

  .md\:placeholder-neutrals-l30:-ms-input-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(130, 147, 164, var(--tw-placeholder-opacity));
  }

  .md\:placeholder-neutrals-l30::-ms-input-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(130, 147, 164, var(--tw-placeholder-opacity));
  }

  .md\:placeholder-neutrals-l30::placeholder {
    --tw-placeholder-opacity: 1;
    color: rgba(130, 147, 164, var(--tw-placeholder-opacity));
  }

  .md\:static {
    position: static;
  }

  .md\:text-left {
    text-align: left;
  }

  .md\:text-center {
    text-align: center;
  }

  .md\:text-right {
    text-align: right;
  }

  .md\:text-neutrals-l30 {
    --tw-text-opacity: 1;
    color: rgba(130, 147, 164, var(--tw-text-opacity));
  }

  .md\:-tracking-0\.01 {
    letter-spacing: -0.01em;
  }

  .md\:tracking-0\.01 {
    letter-spacing: 0.01em;
  }

  .md\:w-4 {
    width: 1rem;
  }

  .md\:w-auto {
    width: auto;
  }

  .md\:w-1\/2 {
    width: 50%;
  }

  .md\:w-1\/3 {
    width: 33.333333%;
  }

  .md\:w-2\/3 {
    width: 66.666667%;
  }

  .md\:w-1\/4 {
    width: 25%;
  }

  .md\:w-3\/4 {
    width: 75%;
  }

  .md\:w-2\/5 {
    width: 40%;
  }

  .md\:w-3\/5 {
    width: 60%;
  }

  .md\:w-4\/5 {
    width: 80%;
  }

  .md\:w-7\/12 {
    width: 58.333333%;
  }

  .md\:w-10\/12 {
    width: 83.333333%;
  }

  .md\:w-11\/12 {
    width: 91.666667%;
  }

  .md\:w-full {
    width: 100%;
  }

  .md\:gap-x-0 {
    grid-column-gap: 0px;
    -moz-column-gap: 0px;
         column-gap: 0px;
  }

  .md\:gap-x-4 {
    grid-column-gap: 1rem;
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }

  .md\:gap-x-6 {
    grid-column-gap: 1.5rem;
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
  }

  .md\:gap-y-0 {
    grid-row-gap: 0px;
    row-gap: 0px;
  }

  .md\:gap-y-4 {
    grid-row-gap: 1rem;
    row-gap: 1rem;
  }

  .md\:gap-y-6 {
    grid-row-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .md\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .lg\:space-y-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
  }

  .lg\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .lg\:block {
    display: block;
  }

  .lg\:flex {
    display: flex;
  }

  .lg\:hidden {
    display: none;
  }

  .lg\:flex-col {
    flex-direction: column;
  }

  .lg\:mx-20 {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  .lg\:ml-0 {
    margin-left: 0px;
  }

  .lg\:mb-6 {
    margin-bottom: 1.5rem;
  }

  .lg\:mb-8 {
    margin-bottom: 2rem;
  }

  .lg\:mb-48 {
    margin-bottom: 12rem;
  }

  .lg\:-mb-72 {
    margin-bottom: -18rem;
  }

  .lg\:pt-20 {
    padding-top: 5rem;
  }

  .lg\:pt-40 {
    padding-top: 10rem;
  }

  .lg\:w-auto {
    width: auto;
  }

  .lg\:w-1\/2 {
    width: 50%;
  }

  .lg\:w-9\/12 {
    width: 75%;
  }
}

@media (min-width: 1280px) {
  .xl\:container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

@media (min-width: 1280px) and (min-width: 640px) {
    .xl\:container {
      max-width: 640px;
    }
  }

@media (min-width: 1280px) and (min-width: 768px) {
    .xl\:container {
      max-width: 768px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

@media (min-width: 1280px) and (min-width: 1024px) {
    .xl\:container {
      max-width: 1024px;
    }
  }

@media (min-width: 1280px) and (min-width: 1280px) {
    .xl\:container {
      max-width: 1280px;
    }
  }

@media (min-width: 1280px) and (min-width: 1536px) {
    .xl\:container {
      max-width: 1536px;
    }
  }

@media (min-width: 1280px) {

  .xl\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .xl\:space-x-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0px * var(--tw-space-x-reverse));
    margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:space-y-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  .xl\:space-y-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
  }

  .xl\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }

  .xl\:space-y-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
  }

  .xl\:space-x-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.25rem * var(--tw-space-x-reverse));
    margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:space-y-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
  }

  .xl\:space-x-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.5rem * var(--tw-space-x-reverse));
    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2rem * var(--tw-space-y-reverse));
  }

  .xl\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:space-x-12 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(3rem * var(--tw-space-x-reverse));
    margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .xl\:divide-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
  }

  .xl\:bg-neutrals-d00 {
    --tw-bg-opacity: 1;
    background-color: rgba(33, 37, 42, var(--tw-bg-opacity));
  }

  .xl\:bg-neutrals-d10 {
    --tw-bg-opacity: 1;
    background-color: rgba(24, 26, 30, var(--tw-bg-opacity));
  }

  .xl\:bg-neutrals-d20 {
    --tw-bg-opacity: 1;
    background-color: rgba(26, 30, 35, var(--tw-bg-opacity));
  }

  .xl\:bg-neutrals-d30 {
    --tw-bg-opacity: 1;
    background-color: rgba(3, 4, 4, var(--tw-bg-opacity));
  }

  .xl\:bg-opacity-50 {
    --tw-bg-opacity: 0.5;
  }

  .xl\:rounded-md {
    border-radius: 0.375rem;
  }

  .xl\:rounded-lg {
    border-radius: 0.5rem;
  }

  .xl\:rounded-2xl {
    border-radius: 0.75rem;
  }

  .xl\:rounded-l-md {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }

  .xl\:border {
    border-width: 1px;
  }

  .xl\:border-t-0 {
    border-top-width: 0px;
  }

  .xl\:border-b-0 {
    border-bottom-width: 0px;
  }

  .xl\:border-t {
    border-top-width: 1px;
  }

  .xl\:border-b {
    border-bottom-width: 1px;
  }

  .xl\:block {
    display: block;
  }

  .xl\:inline-block {
    display: inline-block;
  }

  .xl\:inline {
    display: inline;
  }

  .xl\:flex {
    display: flex;
  }

  .xl\:hidden {
    display: none;
  }

  .xl\:flex-row {
    flex-direction: row;
  }

  .xl\:flex-col {
    flex-direction: column;
  }

  .xl\:flex-wrap {
    flex-wrap: wrap;
  }

  .xl\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .xl\:items-start {
    align-items: flex-start;
  }

  .xl\:items-center {
    align-items: center;
  }

  .xl\:self-auto {
    align-self: auto;
  }

  .xl\:justify-start {
    justify-content: flex-start;
  }

  .xl\:font-normal {
    font-weight: 400;
  }

  .xl\:font-medium {
    font-weight: 500;
  }

  .xl\:h-auto {
    height: auto;
  }

  .xl\:h-full {
    height: 100%;
  }

  .xl\:text-xs {
    font-size: 0.75rem;
  }

  .xl\:text-sm {
    font-size: 0.875rem;
  }

  .xl\:text-base {
    font-size: 1rem;
  }

  .xl\:text-xl {
    font-size: 1.25rem;
  }

  .xl\:text-1\.5xl {
    font-size: 1.5rem;
  }

  .xl\:text-2xl {
    font-size: 1.625rem;
  }

  .xl\:text-3xl {
    font-size: 1.75rem;
  }

  .xl\:text-3\.25xl {
    font-size: 2rem;
  }

  .xl\:text-3\.5xl {
    font-size: 2.5rem;
  }

  .xl\:text-4xl {
    font-size: 2.625rem;
  }

  .xl\:leading-none {
    line-height: 1;
  }

  .xl\:leading-relaxed {
    line-height: 1.625;
  }

  .xl\:my-0 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .xl\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .xl\:my-20 {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .xl\:mx-32 {
    margin-left: 8rem;
    margin-right: 8rem;
  }

  .xl\:my-auto {
    margin-top: auto;
    margin-bottom: auto;
  }

  .xl\:mt-0 {
    margin-top: 0px;
  }

  .xl\:mr-0 {
    margin-right: 0px;
  }

  .xl\:mb-0 {
    margin-bottom: 0px;
  }

  .xl\:ml-0 {
    margin-left: 0px;
  }

  .xl\:mb-1 {
    margin-bottom: 0.25rem;
  }

  .xl\:mt-2 {
    margin-top: 0.5rem;
  }

  .xl\:mb-2 {
    margin-bottom: 0.5rem;
  }

  .xl\:mr-3 {
    margin-right: 0.75rem;
  }

  .xl\:mb-3 {
    margin-bottom: 0.75rem;
  }

  .xl\:ml-3 {
    margin-left: 0.75rem;
  }

  .xl\:mt-4 {
    margin-top: 1rem;
  }

  .xl\:mr-4 {
    margin-right: 1rem;
  }

  .xl\:mb-4 {
    margin-bottom: 1rem;
  }

  .xl\:mt-5 {
    margin-top: 1.25rem;
  }

  .xl\:mr-5 {
    margin-right: 1.25rem;
  }

  .xl\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .xl\:mt-6 {
    margin-top: 1.5rem;
  }

  .xl\:mr-6 {
    margin-right: 1.5rem;
  }

  .xl\:mb-6 {
    margin-bottom: 1.5rem;
  }

  .xl\:ml-6 {
    margin-left: 1.5rem;
  }

  .xl\:mt-8 {
    margin-top: 2rem;
  }

  .xl\:mr-8 {
    margin-right: 2rem;
  }

  .xl\:mb-8 {
    margin-bottom: 2rem;
  }

  .xl\:ml-8 {
    margin-left: 2rem;
  }

  .xl\:mt-10 {
    margin-top: 2.5rem;
  }

  .xl\:mr-10 {
    margin-right: 2.5rem;
  }

  .xl\:mb-10 {
    margin-bottom: 2.5rem;
  }

  .xl\:mt-12 {
    margin-top: 3rem;
  }

  .xl\:mb-12 {
    margin-bottom: 3rem;
  }

  .xl\:mt-14 {
    margin-top: 3.5rem;
  }

  .xl\:mt-16 {
    margin-top: 4rem;
  }

  .xl\:mb-16 {
    margin-bottom: 4rem;
  }

  .xl\:mt-20 {
    margin-top: 5rem;
  }

  .xl\:mr-20 {
    margin-right: 5rem;
  }

  .xl\:mb-20 {
    margin-bottom: 5rem;
  }

  .xl\:mt-24 {
    margin-top: 6rem;
  }

  .xl\:mr-24 {
    margin-right: 6rem;
  }

  .xl\:mb-24 {
    margin-bottom: 6rem;
  }

  .xl\:mt-32 {
    margin-top: 8rem;
  }

  .xl\:ml-32 {
    margin-left: 8rem;
  }

  .xl\:mr-48 {
    margin-right: 12rem;
  }

  .xl\:mb-48 {
    margin-bottom: 12rem;
  }

  .xl\:mt-auto {
    margin-top: auto;
  }

  .xl\:ml-auto {
    margin-left: auto;
  }

  .xl\:-mt-2 {
    margin-top: -0.5rem;
  }

  .xl\:-mr-2 {
    margin-right: -0.5rem;
  }

  .xl\:-mt-4 {
    margin-top: -1rem;
  }

  .xl\:-mt-16 {
    margin-top: -4rem;
  }

  .xl\:-mt-20 {
    margin-top: -5rem;
  }

  .xl\:-mt-24 {
    margin-top: -6rem;
  }

  .xl\:-mt-32 {
    margin-top: -8rem;
  }

  .xl\:opacity-0 {
    opacity: 0;
  }

  .xl\:opacity-60 {
    opacity: .60;
  }

  .xl\:opacity-65 {
    opacity: .65;
  }

  .xl\:opacity-80 {
    opacity: .8;
  }

  .xl\:opacity-100 {
    opacity: 1;
  }

  .xl\:hover\:opacity-100:hover {
    opacity: 1;
  }

  .xl\:overflow-y-hidden {
    overflow-y: hidden;
  }

  .xl\:overflow-x-visible {
    overflow-x: visible;
  }

  .xl\:p-3 {
    padding: 0.75rem;
  }

  .xl\:p-6 {
    padding: 1.5rem;
  }

  .xl\:p-8 {
    padding: 2rem;
  }

  .xl\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .xl\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .xl\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .xl\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .xl\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .xl\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .xl\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .xl\:py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .xl\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .xl\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .xl\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .xl\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .xl\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .xl\:py-40 {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .xl\:pt-0 {
    padding-top: 0px;
  }

  .xl\:pb-0 {
    padding-bottom: 0px;
  }

  .xl\:pl-0 {
    padding-left: 0px;
  }

  .xl\:pb-2 {
    padding-bottom: 0.5rem;
  }

  .xl\:pb-3 {
    padding-bottom: 0.75rem;
  }

  .xl\:pt-4 {
    padding-top: 1rem;
  }

  .xl\:pb-5 {
    padding-bottom: 1.25rem;
  }

  .xl\:pl-6 {
    padding-left: 1.5rem;
  }

  .xl\:pt-8 {
    padding-top: 2rem;
  }

  .xl\:pb-8 {
    padding-bottom: 2rem;
  }

  .xl\:pl-8 {
    padding-left: 2rem;
  }

  .xl\:pt-10 {
    padding-top: 2.5rem;
  }

  .xl\:pt-12 {
    padding-top: 3rem;
  }

  .xl\:pr-12 {
    padding-right: 3rem;
  }

  .xl\:pb-12 {
    padding-bottom: 3rem;
  }

  .xl\:pb-14 {
    padding-bottom: 3.5rem;
  }

  .xl\:pt-16 {
    padding-top: 4rem;
  }

  .xl\:pl-16 {
    padding-left: 4rem;
  }

  .xl\:pr-20 {
    padding-right: 5rem;
  }

  .xl\:pb-20 {
    padding-bottom: 5rem;
  }

  .xl\:pt-24 {
    padding-top: 6rem;
  }

  .xl\:pt-32 {
    padding-top: 8rem;
  }

  .xl\:pb-32 {
    padding-bottom: 8rem;
  }

  .xl\:pt-36 {
    padding-top: 9rem;
  }

  .xl\:pb-36 {
    padding-bottom: 9rem;
  }

  .xl\:pt-44 {
    padding-top: 11rem;
  }

  .xl\:static {
    position: static;
  }

  .xl\:absolute {
    position: absolute;
  }

  .xl\:top-0 {
    top: 0px;
  }

  .xl\:right-0 {
    right: 0px;
  }

  .xl\:top-auto {
    top: auto;
  }

  .xl\:bottom-auto {
    bottom: auto;
  }

  .xl\:text-left {
    text-align: left;
  }

  .xl\:text-center {
    text-align: center;
  }

  .xl\:text-neutrals-l40 {
    --tw-text-opacity: 1;
    color: rgba(121, 134, 148, var(--tw-text-opacity));
  }

  .xl\:text-opacity-40 {
    --tw-text-opacity: .40;
  }

  .xl\:tracking-wide {
    letter-spacing: 0.025em;
  }

  .xl\:tracking-0\.01 {
    letter-spacing: 0.01em;
  }

  .xl\:w-32 {
    width: 8rem;
  }

  .xl\:w-48 {
    width: 12rem;
  }

  .xl\:w-auto {
    width: auto;
  }

  .xl\:w-1\/2 {
    width: 50%;
  }

  .xl\:w-1\/3 {
    width: 33.333333%;
  }

  .xl\:w-2\/3 {
    width: 66.666667%;
  }

  .xl\:w-2\/5 {
    width: 40%;
  }

  .xl\:w-3\/12 {
    width: 25%;
  }

  .xl\:w-4\/12 {
    width: 33.333333%;
  }

  .xl\:w-5\/12 {
    width: 41.666667%;
  }

  .xl\:w-8\/12 {
    width: 66.666667%;
  }

  .xl\:w-9\/12 {
    width: 75%;
  }

  .xl\:w-full {
    width: 100%;
  }

  .xl\:gap-x-0 {
    grid-column-gap: 0px;
    -moz-column-gap: 0px;
         column-gap: 0px;
  }

  .xl\:gap-x-2 {
    grid-column-gap: 0.5rem;
    -moz-column-gap: 0.5rem;
         column-gap: 0.5rem;
  }

  .xl\:gap-x-3 {
    grid-column-gap: 0.75rem;
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem;
  }

  .xl\:gap-x-8 {
    grid-column-gap: 2rem;
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }

  .xl\:gap-y-3 {
    grid-row-gap: 0.75rem;
    row-gap: 0.75rem;
  }

  .xl\:grid-flow-row {
    grid-auto-flow: row;
  }

  .xl\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .xl\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xl\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .xl\:grid-rows-none {
    grid-template-rows: none;
  }

  .xl\:transition-opacity {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .xl\:ease-linear {
    transition-timing-function: linear;
  }

  .xl\:duration-1000 {
    transition-duration: 1000ms;
  }
}

@media (min-width: 1536px) {

}

@media (max-width: 639px) {
  .xs\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .xs\:py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .xs\:w-full {
    width: 100%;
  }
}
  `;

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
    /* Stop MutationObserver while this function runs, and re-enable it at the end. */
    observer.disconnect();

    var targetEl = document.querySelector(targetSelector);
    if (targetEl && targetEl.querySelector('.metafy-translated-classnames')) {
      /* If already exists, remove. */
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
})();
