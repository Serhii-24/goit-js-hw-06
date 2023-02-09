const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output')
 
inputText.addEventListener("input", handList);
function handList(event) {
  outputText.textContent = event.currentTarget.value;
}