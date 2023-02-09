const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueNum = document.querySelector('#value');
let coounterValue = 0;

decrementBtn.addEventListener("click", handlerDecrementBtn);
incrementBtn.addEventListener("click", handlerIncrementBtn);

function handlerDecrementBtn() {
  coounterValue -= 1;
  return Marcup(coounterValue);
};
function handlerIncrementBtn() {
  coounterValue += 1;
  return Marcup(coounterValue);
};
function Marcup(value) {
return valueNum.innerHTML = `${value}`
}