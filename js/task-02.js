'use strict'
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createItemList = (items) => items.map(item => {   
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
  
const itemList = createItemList(ingredients);
ingredientsListEl.append(...itemList);
