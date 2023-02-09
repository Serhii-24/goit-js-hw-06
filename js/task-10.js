const createBtnEl = document.querySelector('#controls button[data-create]');
const destroyBtnEl = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input')
const initialSize = 30;
const incrementSize = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  for (let i = 0 ; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = divEl.style.height = initialSize + incrementSize * i + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(divEl);
  }
};

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
});


function destroyBoxes() {
  boxesEl.innerHTML = '';
}