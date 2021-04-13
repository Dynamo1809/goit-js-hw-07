'use strict'

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', onChangeTarget);

function onChangeTarget(event) {
  spanEl.style.fontSize = event.currentTarget.value -36 + 'px' ;
};