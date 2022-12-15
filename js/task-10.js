const ref = {
  inputRef: document.querySelector('input'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  divBoxesRef: document.querySelector('#boxes'),
};

ref.btnCreateRef.addEventListener('click', handleBtnCreateClick);

ref.btnDestroyRef.addEventListener('click', handleBtnDestroyClick);

function handleBtnCreateClick(event) {
  let amountElements = ref.inputRef.value;
  let sizeElements = 30;
  const step = 10;
  let arrElements = [];

  for (let i = 1; i <= amountElements; i += 1) {
    sizeElements += step;
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${sizeElements}px`;
    div.style.height = `${sizeElements}px`;
    div.style.border = '1px solid';
    div.style.backgroundColor = getRandomHexColor();

    arrElements.push(div);
  }

  ref.divBoxesRef.append(...arrElements);
}

function handleBtnDestroyClick(event) {
  ref.divBoxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
