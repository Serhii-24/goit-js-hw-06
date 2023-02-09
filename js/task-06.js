const input = document.querySelector('#validation-input');

function onInputBlur(event) {
  const contentBlur = event.currentTarget.value;
  input.dataset.length = contentBlur.length;
input.classList.remove('invalid', 'valid')

if (input.dataset.length === "6") {
  return input.classList.add('valid');
}
  return input.classList.add('invalid');
}
  
input.addEventListener('blur', onInputBlur);
