const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
  spanRef.setAttribute('style', `font-size: ${inputRef.value}px`);
});