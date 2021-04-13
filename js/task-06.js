'use strict'
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidOrInvalidTarget);

function onValidOrInvalidTarget(event) {
  if(parseInt(inputEl.dataset.length) === event.currentTarget.value.length){
  inputEl.classList.add("valid")
  inputEl.classList.remove("invalid")
  }else{
    inputEl.classList.add('invalid')
    inputEl.classList.remove("valid")
  };
};
