'use strict';
const box = document.querySelector('#box'); // document.
const boxId = document.getElementById('box'); // document.
console.log(box, boxId);
const btns = document.getElementsByTagName('button');
console.log(btns[0]);
const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
  console.log(item);
})
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);