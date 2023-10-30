'use strict';
//lesson68 Работа с датами
const now = new Date();
//
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now.setHours(18));
console.log(now);
let start = new Date();
for (let i = 0; i < 100000000; i++) {
    let some = i ** 3;
}
let end = new Date;
console.log(end-start);
//lesson67 (*) WeakMap и WeakSet

//
// //
// let cache = new WeakMap();
//
// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }
//     return cache.get(user);
// }
//
// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};
// cacheUser(lena);
// cacheUser(alex);
//
// lena = null;
// console.log(cache.has(lena));
// console.log(cache.has(alex));
//
// let messages = [
//     {text: 'Hello', from: 'John'},
//     {text: 'World', from: 'Alex'},
//     {text: '.....', from: 'M'}
// ];
//
// let readMessages = new WeakSet();
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
//
// console.log(readMessages.has(messages[0]));
// //
// let user = {name: 'Ivan'};
//
// // const arr=[user]
// let map = new WeakMap();
// map.set(user, 'data');
//
// user = null;
//
// console.log(user);
// console.log(map);
// console.log(map);
// console.log(map.keys());
// console.log(arr[0])
// console.log(arr)


//lesson66
// function func() {
//     window.smth = 'string';
// }

//
// const someRes=getData()
// const node=document.querySelector(.class)
// setInterval(function (){
//     if (node){
//         node.innerHTML=someRes
//     }
// },1000)

// function outer() {
//     const potentiallyHugeArray = [];
//
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log("hello");
//     };
// }
// const sayHello=outer()


// function createElement() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     return div;
// }
//
// const tesDiv = createElement();
// document.body.append(tesDiv);
//
// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }
// deleteElement()

// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;
// btn.addEventListener("click", ()=>{
//     myAnimation()
// })
// function myAnimation(){
//     const elem=document.querySelector(".box")
//     let pos=0
//     let id=setInterval(frame, 10)
//
//     function frame(){
//         if (pos===300){
//             clearInterval(id)
//         }else {
//             pos++
//             elem.style.top=pos+"px"
//             elem.style.left=pos+"px"
//         }
//     }
// }
//
// // btn.addEventListener('click', () => {
// //     timerId = setInterval(logger, 1000);
// // });
// //
// //
// // function logger() {
// //     if (i > 3) {
// //         clearInterval(timerId);
// //         console.log('Таймер удален');
// //
// //     }
// //     console.log('text');
// //     i++;
// // }
// //
// // const id = setTimeout(function log() {
// //     console.log('hello');
// //     id = setTimeout(log, 1000);
// // });