const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output')
 
inputText.addEventListener("input", handList);
function handList(event) {
  const message = event.currentTarget.value;
  outputText.textContent = message === '' ? 'Anonimus' : message;
};