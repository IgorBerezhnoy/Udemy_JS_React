'use strict';
// 86. Promise (ES6)
// console.log('Запрос данных');
// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Подготовка данных');
//     const product = {
//       name: 'Tv',
//       price: 2000
//     };
//     resolve(product);
//
//   }, 2000);
// });
// req.then((product) => {
//   const req2 = new Promise((resolve, reject) => {
//     console.log('Данные получены');
//     setTimeout(() => {
//       product.status = 'order';
//       reject(product);
//     }, 2000);
//   }).then((data) => {
//     return data.modify = true;
//   }).then((data) => {
//     console.log(data);
//   }).catch(() => {
//     console.error('some error');
//   });
// // }).finally(() => {
//
// });
const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};
test(1100).then(()=>console.log(1000))
test(2000).then(()=>console.log(2000))
Promise.all([test(1000), test(2000)]).then(()=>{
  console.log("all");
})
// setTimeout(() => {
//   console.log('Подготовка данных2');
// }, 0);
// // setTimeout(() => {
// //   console.log("Подготовка данных3");
// // },1)
// console.log(1);
// //82. JSON формат передачи данных, глубокое клонирование объектов
// const persone = {
//   name: 'Alex',
//   tel: '+744444444444444',
//   parents:{
//     mom:"Olga",
//     dad:"Mike"
//   }
// };
// console.log(JSON.parse(JSON.stringify(persone)));
