'use strict';
// //lesson68 Работа с датами
// const now = new Date();
// //
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDay());
// // console.log(now.getDate());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());
// // console.log(now.getTimezoneOffset());
// // console.log(now.getTimezoneOffset());
// // console.log(now.getTime());
// // console.log(now.setHours(18));
// console.log(now);
// let start = new Date();
// for (let i = 0; i < 100000000; i++) {
//     let some = i ** 3;
// }
// let end = new Date;
// console.log(end-start);
// //lesson67 (*) WeakMap и WeakSet
// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block');
// // console.log(btns);
// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0));
// // console.log(btns[0].classList.item(1));
// // btns[1].classList.add('red');
// // btns[0].classList.remove('blue');
// // console.log(btns[0].classList.toggle("blue"));
// //
// // if (btns[1].classList.contains("red")){
// //     console.log("red");
// // }
// console.log(btns[0]);
// // console.log(btns[0].className);
// btns[0].addEventListener('click', () => {
//     // if(!btns[1].classList.contains("red")){
//     btns[1].classList.toggle('red');
//     // btns[1].classList.add("red")
//     // }else {
//     //     btns[1].classList.remove('red')
//     // }
// });
// //
// // btns.forEach(btn=>{
// //     btn.addEventListener("click", ()=>{
// //         console.log("hell");
// //     })
// // })
// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.matches("button.red")) {
//     // if (e.target && e.target.tagName === 'BUTTON') {
//         console.log('hello');
//     }
// });
//
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);