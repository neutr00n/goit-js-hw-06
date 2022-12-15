const refs = {
  inputRef: document.querySelector("#validation-input"),
};

const inputLengthRef = Number(refs.inputRef.dataset.length);

refs.inputRef.addEventListener("blur", handleInputTextLength);

function handleInputTextLength(event) {
  refs.inputRef.classList.remove("valid", "invalid");

  if (event.currentTarget.value.length === inputLengthRef) {
    validInputValue();
  } else {
    invalidInputValue();
  }
}

const validInputValue = () => {
  refs.inputRef.classList.add("valid");
};

const invalidInputValue = () => {
  refs.inputRef.classList.add("invalid");
};
