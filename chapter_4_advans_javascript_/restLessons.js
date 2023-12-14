'use strict';


// 100. Инкапсуляция
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//
//   }
//
//   #surname = 'Ivanov';
//   get surname() {
//     return this.#surname;
//   }
//
//   set surname(surname) {
//     this.#surname = surname;
//   }
//
//   say() {
//     console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
//   }
//
//   get age() {
//     return this._age;
//   }
//
//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Error');
//     }
//   };
// }
//
// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);
// ivan.age = 30;
// ivan.say();
// ivan.age = 300;
// ivan.say();
// ivan.name = 'Alex';
// console.log(ivan.surname
// );
// ivan.surname = 'Lenin';
// ivan.say();
//99. Геттеры и сеттеры (свойства объектов)
// const person = {
//   name: 'Alex',
//   age: 25,
//   get userAge() {
//     return this.age;
//   },
//   set userAge(num) {
//     this.age = num;
//   }
// };
//
// console.log(person.userAge=30);
// 91. Дополнительно: Что такое библиотеки. Библиотека axios


//89. Подробно про npm и проект. JSON-server


// Упражнение по написанию кода 21: Задания на работу с методами массивов

// const funds = [
//   {amount: -1400},
//   {amount: 2400},
//   {amount: -1000},
//   {amount: 500},
//   {amount: 10400},
//   {amount: -11400}
// ];
//
// const getPositiveIncomeAmount = (data) => data.filter(el => el.amount > 0).map(el=>el.amount).reduce((el, next) => el + next)
// console.log(getPositiveIncomeAmount(funds));
// const getTotalIncomeAmount = (data) => {
//   const newData=data.map(el=>el.amount)
//   if (newData.some(el=>el<0)){
//     return newData.reduce((el,next)=>el+next)
//   }else {
//     getPositiveIncomeAmount(data)
//   }
// };


//Упражнение по написанию кода 20: Задания на работу с методами массивов
// const films = [
//   {
//     name: 'Titanic',
//     rating: 9
//   },
//   {
//     name: 'Die hard 5',
//     rating: 5
//   },
//   {
//     name: 'Matrix',
//     rating: 8
//   },
//   {
//     name: 'Some bad film',
//     rating: 4
//   }
// ];
//
// const showGoodFilms = (arr) => arr.filter(el => el.rating >= 8);
//
// const showListOfFilms = (arr) => arr.reduce((el, current) => `${el}, ${current.name}`,"").slice(2);
// // console.log(showListOfFilms(films));
//
// // const setFilmsIds=(arr)=>arr.map((el,i)=> ({...el,id:i}))
// const setFilmsIds=(arr)=>arr.map((el,i)=> (Object.assign(el,{id:i})))
// console.log(setFilmsIds(films))
// const tranformedArray = setFilmsIds(films);
//
// const checkFilms=(arr)=>arr.every(el=>el.id>=0)
// console.log(checkFilms(tranformedArray))
//88. Методы перебора массивов

//filter


// const names=["Ivan","Ann", "Ksenia","Voldemart"]
// const shortNames=names.filter((el)=>el.length<5)
// console.log(shortNames);

//map
// const answers = ['Ivan', 'Anna', 'HeLLO'];
// const result = answers.map(el => el.toLowerCase());
// console.log(result);

// every/some
//
// const some=[4,"qwq","adasdasdas"]
// console.log(some.some(el=>typeof (el) ==="number"));
// console.log(some.some(el=>el===1));
// console.log(some.every(el=>el===1));
// console.log(some.every(el=>el===4));


//reduce
// const arr=[4,5,1,23,4,5]
//
// const res=arr.reduce((sum,current)=>sum+current)
// console.log(res);
//
// const arr = ['apple', 'pear', 'plum'];
//
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, '3');
// console.log(res);
//

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal',
// };
//
// const newArr = Object.entries(obj)
//   .filter(el => el[1] === 'persone')
//   .map(el => el[0]);
// console.log(newArr);

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
// // });
// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };
// test(1100).then(()=>console.log(1000))
// test(2000).then(()=>console.log(2000))
// Promise.all([test(1000), test(2000)]).then(()=>{
//   console.log("all");
// })
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
