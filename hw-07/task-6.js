const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  console.log(inputRef.getAttribute('data-length'));
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line prettier/prettier
  if (event.target.value.length >= inputRef.getAttribute('data-length')) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});