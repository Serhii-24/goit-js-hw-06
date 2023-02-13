const inputEl = document.querySelector('#validation-input');

function onInputBlur() {
inputEl.classList.remove('invalid', 'valid');

if (inputEl.value.length === Number(inputEl.dataset.length)) {
  return inputEl.classList.add('valid');
 }
  return inputEl.classList.add('invalid');
}
  
inputEl.addEventListener('blur', onInputBlur);
