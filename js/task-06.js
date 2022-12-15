const refs = {
  inputRef: document.querySelector('#validation-input'),
};

const inputLengthRef = refs.inputRef.dataset.length;

refs.inputRef.addEventListener('blur', handleInputTextLength);

function handleInputTextLength(event) {
  if (event.currentTarget.value.length < inputLengthRef) {
    invalidInputValue();
  } else {
    validInputValue();
  }
}

const invalidInputValue = () => {
  refs.inputRef.classList.add('invalid');

  if (refs.inputRef.classList.contains('valid')) {
    refs.inputRef.classList.remove('valid');
  }
};

const validInputValue = () => {
  refs.inputRef.classList.add('valid');

  if (refs.inputRef.classList.contains('valid')) {
    refs.inputRef.classList.remove('invalid');
  }
};
