const controlInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChenge = (event) => {
  textEl.style.fontSize = controlInput.value + 'px';
}


controlInput.addEventListener('input', onInputChenge); 