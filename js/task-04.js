'use strict'
let counterValue = document.querySelector('#value');
const incrementCounterValueBtn = document.querySelector('button[data-action="increment"]');
const decrementCounterValueBtn = document.querySelector('button[data-action="decrement"]');

incrementCounterValueBtn.addEventListener('click', increment);
decrementCounterValueBtn.addEventListener('click', decrement);

function increment() {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

function decrement() {
 counterValue.textContent = parseInt(counterValue.textContent) - 1 ;
}