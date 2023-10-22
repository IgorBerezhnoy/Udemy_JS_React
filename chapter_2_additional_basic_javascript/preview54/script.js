'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');
// if (block) {
//     console.log(block);
//     console.log(block?.textContent);
// // }
// console.log('dd');


const userData = {
    name: 'Ivan',
    age: null
};
if (userData&&userData.skills &&userData.skills.js){
console.log(userData.skills.js);

}
console.log(userData.skills?.js);
