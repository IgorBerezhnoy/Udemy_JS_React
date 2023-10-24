// // //lesson 61 Bigint
//
// // console.log(Number.MAX_SAFE_INTEGER);
// //(2^53)-1
//
// // const bigint = 1111111111111111115888888888n;
// //
// // const sameBigint = BigInt(5111111115454848778787987987987798);
// // console.log(typeof bigint);
// // console.log(typeof sameBigint);
//
// console.log(2==2n)
// console.log(2===2n)
//
//
// let bigint=1n
// let number=2
// console.log(bigint+BigInt(number));
// // console.log(+bigint+BigInt(number));
// console.log(Number(bigint+BigInt(number)));
// // console.log(5n>2n)
// // console.log(5n>2)
// // console.log(5n<2)
// // console.log(Math.floor(5n));
// // console.log(5n/2n) //2n
// // console.log(5n+1n);
// // console.log(5n+1);
// console.log(5n+"1");

// //lesson 60 Set


// // const arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 5, 6];
// const arr = ['Alex', 'Anna', 'Oleg', 'Oleg'];
//
// const set = new Set(arr);
// set.add('Ivan');
// set.add('Oleg');
// // set.delete("")
// // set.has("")
// // arr.size()
//
//
// // for (let  value of set){
// //
// // set.forEach((value,valueAgain,set,) => {
// //     console.log(value);
// // });
// function  unique(arr){
//     return  Array.from(new Set(arr))
// }
//
// console.log(unique(arr));
//

//lesson 59 Map
//
//
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// // console.log(user);
// // console.log(typeof (Object.keys(user)[0]));
//
//
// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bred: 50},
// ];
// const budget = [5000, 15000, 25000];
//
// const map = new Map([
//     [{paper: 544}, 800]]);
// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });
// const goods = [];
//
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
//
// const userMap = new Map(Object.entries(user));
// console.log(userMap);
// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);
// // console.log(goods);
//
// for (let [shop, price] of map.entries()){
//     console.log(shop, price);
// }
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// console.log(map.delete(shops[0]));
// console.log(map.clear());
// console.log(map.get(shops[0]));
//map.keys()
//
// console.log(shops);
// console.log(map);
// //
// map
//     .set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);
//lesson 58
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// // for (const key in user) {
// //     console.log(key);
// // }
// const arr = ['b', 'a', 'c'];
//
// Array.prototype.someMethod = function () {
// };
// console.log(arr);
// for (const el in arr) {
//     console.log(el);
// }
// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };
// salaries[Symbol.iterator] = function () {
//     return {
//         next() {
//             // {done:true, value:123}
//         }
//     };
// };

// const arr = ['b', 'a', 'c'];
// for (const key in arr){
//     console.log(arr[key]);
// }
// const str = "string";
// for (const el of str) {
//     console.log(el);
// }
// const str = "string";
// for (const key in str){
//     console.log(str[key]);
// }
//lesson 57
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
//
// // user.showMyPublicData();
//
// //writable  свойсва можноизменить
// //enumerable заметин для циклов
// //configurable изменить атрибуты или удалить свойства
//
// // Object.defineProperty(user, 'birthday', {
// //     value: prompt('Date?'),
// //     writable: false,
// //     enumerable: true,
// //     configurable: true
// // });
//
// // Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// // console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
//
// // Object.defineProperty(user, 'showMyPublicData', {enumerable:false})
// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// });
//
// user.birthday = 'Oleg';
//
//
// for (let key in user) {
//     console.log(key);
// }
//
//
// console.log(user);
