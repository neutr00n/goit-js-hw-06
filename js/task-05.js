const ref = {
  inputRef: document.querySelector('#name-input'),
  spanRef: document.querySelector('#name-output'),
};

ref.inputRef.addEventListener('input', handleEnteredInputText);

function handleEnteredInputText(event) {
  ref.spanRef.textContent = 'Anonymous';

  if (event.currentTarget.value !== '') {
    ref.spanRef.textContent = event.currentTarget.value;
  }
}
