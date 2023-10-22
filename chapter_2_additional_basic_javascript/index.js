//lesson 57
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// user.showMyPublicData();

//writable  свойсва можноизменить
//enumerable заметин для циклов
//configurable изменить атрибуты или удалить свойства

// Object.defineProperty(user, 'birthday', {
//     value: prompt('Date?'),
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable:false})
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

user.birthday = 'Oleg';


for (let key in user) {
    console.log(key);
}


console.log(user);
