'use strict';
// 95. Как сохранить данные без БД. Работа с localStorage


// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear()
// console.log(localStorage.getItem('number'));


const checkbox = document.querySelector('#checkbox'),
  form = document.querySelector('form'),
  change = document.querySelector('#color'),
  textField = document.querySelector('.form-control');

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});
checkbox.checked = localStorage.getItem('isChecked');

change.addEventListener('click', () => {
  localStorage.setItem('color', true);
});
form.style.background = localStorage.getItem('color') ? 'red' : '';
const persone = {
  name: 'Alex',
  age: 25
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

//96. Регулярные выражения
// new RegExp('patern', 'flags')
// /pattern/f

const ans = prompt('Ведите ваше имя');
const reg = /\d/ig;
// // console.log(ans.search(reg));
// console.log(ans.match(reg));
// c

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));
// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g), ':');

console.log(ans.match(reg));