// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "input-knob.svelte-124h628::part(rotator) {position: relative;box-sizing: border-box;border-radius: 9999px;border-width: 2px;border-style: double;--tw-border-opacity: 1;border-color: rgb(29 78 216 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color: rgb(31 41 55 / var(--tw-bg-opacity))\n}.moving.svelte-124h628 {display: none\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}