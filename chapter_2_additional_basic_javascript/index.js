//lesson 58
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData() {
        console.log(`${this.name} ${this.surname}`);
    }
};
// for (const key in user) {
//     console.log(key);
// }
const arr = ['b', 'a', 'c'];

Array.prototype.someMethod = function () {
};
console.log(arr);
for (const el in arr) {
    console.log(el);
}
const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hello');
    }
};
salaries[Symbol.iterator] = function () {
    return {
        next() {
            // {done:true, value:123}
        }
    };
};

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
