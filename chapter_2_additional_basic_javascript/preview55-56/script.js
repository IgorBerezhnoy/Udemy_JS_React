'use strict';
// lesson 56 symbol

// const myAwesomeDB={
// movies:[],
// actors:[],
//     [Symbol("id")]:123,
//
// }
//
// myAwesomeDB.id="32232154"
// console.log(myAwesomeDB["id"]);
// console.log(myAwesomeDB);
// let id=Symbol("id")
// const obj = {
//     'name': 'Test',
//     [id]:1,
//     getId(){
//         return this[id]
//     }
// };
// console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// // for (let value in obj){
// //     console.log(value);
// // }
// // console.log(Object.values(obj))
// // console.log(Object.keys(obj))
//
// // let id = Symbol('id');
// // let id2 = Symbol('id');
// // obj[id]=1
// // console.log(id);
// // console.log(id2);
// // console.log(obj);
// //
// // console.log(id2===id);
// // console.log(obj);
// // console.log(obj[id]);
// console.log(obj);
//
// // lesson 55
// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');
// boxesQuery.forEach(box=>{
//     if (box.matches(".this"))
//         console.log("This one" ,box);
// })
// console.log(boxesQuery[0].closest(".wrapper"));
// boxesQuery[0].remove();
// boxesGet[0].remove();
//
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }
//
// console.log(boxesQuery);
// console.log(boxesGet);
// console.log(Array.from(boxesGet));
// console.log(document.body.children);