'use strict';
const boxId = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = document.querySelectorAll('.heart'), oneHeart = document.querySelector('.heart');
document.querySelector('body').style.backgroundColor = 'grey';
boxId.style.backgroundColor = 'gold';
boxId.style.width = '500px';
boxId.style.height = '500px';
btns[0].style.borderRadius = '100%';
circles[1].style.cssText = `background-color: red; width: 100px; height: 100px;`;
console.log(boxId);
// hearts.forEach(el=>el.style.backgroundColor = 'deepPink');
const div = document.createElement('div');
const text = document.createTextNode('Its me');
div.classList.add('black');
document.body.append(div);
// document.body.prepend(div);
// document.body.after(div);
// document.body.before(div);
// hearts[0].remove()
// circles[0].remove()
// circles[1].replaceWith(hearts[0]);
// btns[1].replaceWith(hearts[0])
//   wrapper.appendChild(div)
// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(h)

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent="Hello world"

div.insertAdjacentHTML('afterbegin', '<b> Hello</b>');