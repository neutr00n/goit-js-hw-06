const ref = {
  btnIncrementRef: document.querySelector('button[data-action="decrement"]'),
  btnDecrementRef: document.querySelector('button[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};

let counterValue = 0;

ref.btnIncrementRef.addEventListener('click', handleBtnIncrementClick);
ref.btnDecrementRef.addEventListener('click', handlebtnDecrementClick);

function handleBtnIncrementClick(event) {
  counterValue -= 1;
  ref.valueRef.textContent = counterValue;
}

function handlebtnDecrementClick(event) {
  counterValue += 1;
  ref.valueRef.textContent = counterValue;
}
