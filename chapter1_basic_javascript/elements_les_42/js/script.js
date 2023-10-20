'use strict';


//lesson #43

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
box.style.cssText = 'background-color:blue';
box.style.width = '500px';
btns[1].style.borderRadius = '350px';
circles[0].style.backgroundColor = 'red';
console.log(box);
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor="blue"
//
// }

hearts.forEach(el => {
    el.style.backgroundColor = 'blue';
});
const div = document.createElement('div');
const text = document.createTextNode('Тут был я ');

div.classList.add('black');
// document.body.append(div);

wrapper.append(div);

// oneHeart.before(div);

// oneHeart.after(div);

// // oneHeart.replaceWith(circles[1]);

// oneHeart.appendChild(circles[1]);

// circles[0].remove();

// wrapper.insertBefore(div,hearts[1])

// wrapper.removeChild(hearts[1])

// wrapper.replaceChild(circles[0], hearts[0]);

// document.querySelector('.wrapper').append(text);

// div.innerHTML="<h1>Hello world</h1>"
// // div.textContent="<h1>Hello world</h1>"
// div.insertAdjacentHTML("afterbegin","<b> Hello</b>")

//lesson #42
// const box = document.getElementById('box');
//
// console.log(box);
//
// const btns=document.getElementsByTagName("button")
// console.log(btns);
//
//
// const circles=document.getElementsByClassName("circle")
// console.log(circles);
//
// const hearts =document.querySelectorAll(".heart")
//
// console.log(hearts);
//
// hearts.forEach(el=>{
//     console.log(el);
// })
//
// const oneHeart=document.querySelector(".heart")
// console.log(oneHeart);
//




