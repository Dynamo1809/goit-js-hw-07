'use strict'
const itemsEl = document.querySelectorAll('#categories .item');
const createListInfo = elements => {
  console.log(`В списке ${elements.length} категории.`)
  elements.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}` )
  })
};
createListInfo(itemsEl);


