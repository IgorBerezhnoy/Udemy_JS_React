// 'use strict';

//76. Контекст вызова. This
// function showThis(a, b) {
//
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
//
// showThis(2,4);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//
//         function shout() {
//             console.log(this);
//         }
//
//         shout();
//     }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.sayHello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
//
// let Ivan = new User('Ivan', 28);
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

let sayName1 = function () {
    console.log(this);
    console.log(this.name);
};
let sayName2 = () => {
    console.log(this);
    console.log(this.name);
};
// sayName();
// sayName1();
// sayName2();
const user = {
    name: 'Jon'
};
sayName.call(user, 'Ivanov');
sayName.apply(user, ['Ivanov']);
let newFoo = sayName.bind(user, 'Ivanov');
newFoo();
// sayName1.apply(user)
// sayName2.apply(user)

//1) Обычная функция:this =window; если use strict то будет undefined
//2) Контекст у методов объекта и будет сам объект
//3)this в конструкторах и классах это новый экземпляр объекта
//4) Ручная привязка this с помощью методов функций: call,apply, bind
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red';
    console.log(this);
});
btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red';
    console.log(this);
});
const obj = {
    num: 5,
    sayName: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayName();
const double = a => a * 2;

//75. Функции-конструкторы
// const num = new Number(3);
//
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.sayHello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
//
// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушёл `);
// };
// let Ivan = new User('Ivan', 28);
// let Alex = new User('Alex', 20);
// Ivan.sayHello();
// Alex.exit();
// console.log(Ivan);
// console.log(Alex);
