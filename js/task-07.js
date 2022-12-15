const ref = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

ref.inputRef.addEventListener('input', handleInputRangeValueForChaneFontSize);

function handleInputRangeValueForChaneFontSize(event) {
  ref.spanRef.style.fontSize = `${event.currentTarget.value}px`;
}
