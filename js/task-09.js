const ref = {
  bodyRef: document.querySelector('body'),
  spanRef: document.querySelector('.color'),
  buttonRef: document.querySelector('.change-color'),
};

ref.buttonRef.addEventListener('click', handleColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleColorChange(event) {
  ref.bodyRef.style.backgroundColor = getRandomHexColor();
  ref.spanRef.textContent = getRandomHexColor();
}
