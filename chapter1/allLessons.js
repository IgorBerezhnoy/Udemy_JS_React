'use strict';

// //lessons #42

// //task #41.1


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };
//
// function isOpen(prop) {
//     return prop ? 'Открыто':'Закрыто'
// }
//
// console.log(+restorantData.menu[0].price.slice(0, -1))
//
// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     debugger
//     if ((+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1)) <( average.slice(0, -1))) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }
//
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
//
// function transferWaitors(data) {
//     const copy = Object.assign({}, data);
// copy.waitors=[...copy.waitors]
//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }
//
// transferWaitors(restorantData);
//



// //lessons #41
//
// let x=5
// console.log(x++) //5

// console.log([]+false-null+true); //Nan

// let y=1
// let x=y=2
// console.log(x) //2
// ;

// console.log([] + 1 + 2) //12

// console.log([] + 1 + 2);

// console.log(!!("a"&&"b"));
// console.log(("a"&&"b"));
// console.log(!!("a"&&"b")===("a"&&"b"));


// console.log(2 && 1 && null && 0 && undefined);



// console.log(null || 2 && 3 || 4);

//
// let a = [1, 2, 3],
//     b = [1, 2, 3];
//
// console.log(a===b);



// console.log(+"Infinity");


// console.log("Ёжик">"яблоко");


// console.log(0 || "" || 2 || undefined || true || false);



// //lessons #40 замыкание и лексическое окружение

// let number = 5;
//
// function logNumber() {
//     console.log(number);
//
// }
//
// number = 6;
//
// logNumber();
// let counter = 5;
// const createCounter = () => {
//     let counter = 0;
//       return function () {
//         counter = counter + 1;
//         return counter;
//     };
// };
// counter = 7;
//
// let increment = createCounter();
// let c1 = increment();
// let c2 = increment();
// let c3 = increment();
// console.log(c1, c2, c3);

// //lessons #38-39
//
// console.log(typeof (String(null)));
// console.log((String(5 + '5' + null)));
// console.log(typeof (String(5 + '5' + null)));
// console.log('https://vk.com/catalog/' + 5);
// const fontSize = 26 + 'px'
//
//
// console.log(typeof (Number('5')));
// console.log(typeof (+'5'));
// console.log(typeof (parseInt('5px',10)));
//
//

// let answer=+prompt("hello", "")

// //task #37.2

//
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];
//
// function sortStudentsByGroups(arr) {
//     debugger
//     let newArr = [];
//     let arrForWork = [];
//     let count = 0;
//     let str = 'Оставшиеся студенты: ';
//     arr.sort();
//     for (let i = 0; i <= arr.length; i++) {
//         if (count !== 3) {
//             arrForWork.push(arr[i]);
//             ++count;
//         } else {
//             count = 0;
//             newArr.push(arrForWork);
//             arrForWork = [];
//             i--;
//         }
//     }
//     if (arr.length === 9) {
//         newArr.push(str + '-');
//     }else if (arr.length===10){
//         newArr.push(str + arr[9]);
//     }else {
//         newArr.push(str + arr[9]+", "+arr[10]);
//
//     }
// return newArr
// }
//
// console.log(sortStudentsByGroups(students));


// //task #37.1
//
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };
//
// function isBudgetEnough(data) {
//     let allPl = 0;
//     for (let i = 0; i < data.shops.length; i++) {
//         allPl += (data.shops[i].length * data.shops[i].width);
//
//     }
//     allPl *= data.height * data.moneyPer1m3;
//     if (allPl <= data.budget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
//
// console.log(isBudgetEnough(shoppingMallData))

// //lesson #37
//--------------------------------------------------

// let personalMovieDB = {
//     count: '',
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start() {
//         this.count = (+prompt('How many did you watch movies?'));
//         while (/*this.count.trim() == '' ||*/ this.count == null || isNaN(this.count)) {
//             this.count = (+prompt('How many did you watch movies?'));
//         }
//     },
//     rememberMyFilms() {
//         for (let i = 0; i < 1; i++) {
//             let nameMove = [prompt('What movies did you watch last time?')];
//             let balls = prompt('how many balls did you want to get?');
//             if (nameMove.length > 0 && nameMove.length < 50 && balls.length < 50 && balls.length !== 0) {
//                 this.movies[nameMove] = balls;
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel() {
//         if (this.count < 10) {
//             console.log('Посмотрено довольно мало фильмов');
//         } else if (this.count >= 10 && this.count <= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('error 404');
//         }
//     },
//     writeYourGenres() {
//         for (let i = 1; i <= 3; i++) {
//             this.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//             if (this.genres[i - 1] === null || this.genres[i - 1] === undefined || this.genres[i - 1].trim() === "") {
//                 alert("Вы вели некорректные данные")
//                 this.genres.pop();
//                 i--;
//             }
//             if (i===3){
//                 this.genres.forEach((el, i)=>{
//                     console.log(`Любимый жанр #${i+1} это ${el}` );
//                 })
//             }
//         }
//     },
//     showMyDB() {
//         if (this.privat) {
//             console.log(this);
//         }
//     },
//     toggleVisibleMyDB() {
//         this.privat = !this.privat;
//     }
// };
// // personalMovieDB.start()
// // personalMovieDB.rememberMyFilms()
// // personalMovieDB.detectPersonalLevel()
// // personalMovieDB.writeYourGenres()
// personalMovieDB.writeYourGenres()
// // personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.privat);
// personalMovieDB.showMyDB();
// console.log(personalMovieDB.privat);
//
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.privat);
//
// personalMovieDB.showMyDB();

//--------------------------------------------------
// let numberOfFilms;
//
//
// function start() {
//     numberOfFilms = (+prompt('How many did you watch movies?'));
//
//     while (numberOfFilms.trim() == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many did you watch movies?');
//     }
// }
//
// start();
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 1; i++) {
//         let nameMove = [prompt('What movies did you watch last time?')];
//         let balls = prompt('how many balls did you want to get?');
//         if (nameMove.length > 0 && nameMove.length < 50 && balls.length < 50 && balls.length !== 0) {
//             personalMovieDB.movies[nameMove] = balls;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Посмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('error 404');
//     }
// }
//
// detectPersonalLevel();
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }
//
// writeYourGenres();
//
// function showMyDB(obj) {
//     if (!obj) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyDB(personalMovieDB.privat);
// //--------------------------------------------------

// //--------------------------------------------------


// //lesson #36


// // let str = 'some';
// // let strObj = new String(str);
// // console.log(typeof str);
// // console.log(typeof strObj);
// //
// // console.dir([1, 2, 3, 4]);
//
// const solider = {
//     health: 400,
//     armor: 100,
//     sayHello(){
//         console.log("hello");
//     }
// };
//
// const jonh=Object.create(solider)
// // const jonh = {
// //     health: 100
// // };
// //
// // // jonh.__proto__ = solider;
// // Object.setPrototypeOf(jonh,solider)
// //
// // console.log(jonh.armor);
// jonh.sayHello()
// //

// //lesson #35.3

//
// const someString = 'This is some strange string';
//
// function reverse(str) {
//     if (typeof str === 'string') {
//         let reverseString = '';
//         for (let i = 1; i <= str.length; i++) {
//             reverseString += str[str.length - i];
//         }
//         return reverseString;
//     } else {
//         return 'Ошибка!';
//     }
// }
//
// console.log(reverse(someString));
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//
// function availableCurr(arr, missingCurr) {
//
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//
//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });
//     return str
// }
//
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// //lesson #35.2
//
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
//     if (arr.length) {
//         return `Семья состоит из: ${arr.join(' ')}`;
//     }else {
//         return 'Семья пуста'
//     }
// }
//
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//
// function standardizeStrings(arr) {
// (arr.map(el=>console.log(el.toLowerCase())))
// }
//
// console.log(standardizeStrings(family));

// //lesson #35.1
//
// const personalPlanPeter = {
//     name: 'Peter',
//     showAgeAndLangs(personalPlanPeter) {
//         return `Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.skills.languages[0].toUpperCase()} ${personalPlanPeter.skills.languages[1].toUpperCase()}`;
//     },
//     age: '29',
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };
//
// function showExperience(plan) {
//     return plan.skills.exp;
// }
//
// function showProgrammingLangs(plan) {
//
//     if (!plan.skills.programmingLangs) {
//         return '';
//     }
//     let str = '';
//     for (let key in plan.skills.programmingLangs) {
//         str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//     }
//     return str.slice(0, str.length - 1);
// }
//
// console.log(showProgrammingLangs(personalPlanPeter));

// //lesson 35
//
// let a = 5,
//     b = a;
// b = b + 5;
// console.log(a);
// console.log(b);
//
// const obj = {
//     a: 5,
//     b: 1
// };
//
// let copy = obj;
// copy.a = 100;
//
// console.log(copy);
// console.log(obj);
//
// const copy = (mainObj) => {
//     let copyObj = {};
//     let key;
//     for (key in mainObj) {
//         copyObj[key] = mainObj[key];
//     }
//     return copyObj;
// };
// const numbers = {
//     a: 2,
//     b: 3,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers=copy(numbers)
// console.log(newNumbers);
// console.log(newNumbers===numbers);
// console.log(newNumbers.c===numbers.c);
//
// const add={
//     d:17,
//     e:20,
//     j:{
//         o:3
//     }
// }
// //TODO Object.assign({})
// let clone = Object.assign({}, add);
// console.log(clone);
// console.log(clone===add);
// console.log(clone.j===add.j);
//
// let oldArr=["a","b","c"]
// let newArr=oldArr.slice()
// console.log(oldArr===newArr);
//
// const video=["youtube","vimeo","rutube"],
//     blogs=["wordpress", "liveJournal"],
//     internet=[...video,...blogs, "vk"]
// console.log(internet);
//
// function log(a,b,c) {
//  console.log(a)
//  console.log(b)
//  console.log(c)
// }
//
// const num=[2,3,4]
// log(...num);
// const array = ['a', 'b'];
// const newArray = [...array];
//
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
//

/// //lesson 33
//
// const arr = [1, 3, 4, 5, 6, 7, 8];
// arr.sort((a, b) => a - b);
// arr.pop();
// arr.push(10);
// console.log(arr);


// const str= prompt("", "")
// const prodects=str.split(", ")
// console.log(prodects.join(", "));
//
// // for (let i =0; i<arr.length;i++){
// //     console.log(arr[i])
// // }
// arr.forEach((el,i , arr)=>{
//     console.log(`${i}: ${el} внутри масива ${arr}`);
// })

//TODO
// for (let value of arr){
//     console.log(value);
// }


// lesson 32
// const obj=new Object()
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bj: 'red'
//     },
//     makeTest(){
//         console.log("Test");
//     }
// };
// // console.log(options.name);
// //
// // delete options.name;
// //
// // console.log(options);
//  TODO
//  for (let key in options) {
//     let counter=0
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++
//     }
// }
// options.makeTest()
// console.log(Object.keys(options).length)
// let {colors, height}=options
// console.log(colors, height);
// // // task 31
//
//
// function first() {
//     setTimeout(() => {
//         console.log(1);
//     },500);
// }
// function second() {
//         console.log(2);
// }
// first()
// second()
//
// function learnJs(lang, callback){
//     console.log(`Я учу ${lang}`)
//     callback()
// }
//
//
// let done = ()=>{
//     console.log("Я прошёл этот урок");
// };
// learnJs("javaScript", done)
// // // task 29

// function fib(num) {
// if (typeof num!=="number"||num<=0|| !Number.isInteger(num)){
//     return""
// }
// if (num===1){
//     return "0"
// }
// let arrFib=[0, 1]
//     for (let i = 2; i <num ; i++) {
//         arrFib.push(arrFib[arrFib.length-2]+arrFib[arrFib.length-1])
//     }
//     return arrFib.join(" ")
// }


// // Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     if (minutes <= -1 || isNaN(minutes) || !Number.isInteger(minutes)) {
//         return 'Ошибка, проверьте данные';
//     }
//     let hours = minutes / 60;
//     let rightMinutes = Math.round((hours * 60) - (Math.floor(minutes / 60) * 60));
//     hours = Math.floor(minutes / 60);
//     if (hours === 0 || hours >= 5) {
//         return `Это ${hours} часов и ${rightMinutes} минут`;
//     } else if (hours === 1) {
//         return `Это ${hours} час и ${rightMinutes} минут`;
//     } else {
//         return `Это ${hours} часа и ${rightMinutes} минут`;
//     }
// }
//
// // Место для второй задачи
// function findMaxNumber(one, two, three, four) {
//
//     if  (typeof(one)!=='number' || typeof(two)!=='number' ||typeof(three)!=='number' || typeof(four)!=='number') {
//     return 0
//     }
//     return Math.max(one,two,three,four)
// }
//
// console.log(findMaxNumber(1, 5, '6', '10'))
// // Место для первой задачи
// function calculateVolumeAndArea(num) {
//     if (num <= 0 || isNaN(num) || !Number.isInteger(num)) {
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${num * num * num}, площадь всей поверхности: ${6 * num * num}`;
// }
//
// // Место для второй задачи
// function getCoupeNumber(num) {
//     if (num === 0  ||num>36) {
//         return 'Таких мест в вагоне не существует';
//     }else if (num <= 0||!Number.isInteger(num)|| isNaN(num)){
//         return "Ошибка. Проверьте правильность введенного номера места"
//     }
// return Math.ceil (num/4)
// }


// /* Задание на урок:
//
// 1) Первую часть задания повторить по уроку
//
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
//
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
//
// P.S. Функции вызывать не обязательно*/
//
// 'use strict';
//
// // Код возьмите из предыдущего домашнего задания
//
// //--------------------------------------------------
// let numberOfFilms;
//
//
// function start() {
//     numberOfFilms = (+prompt('How many did you watch movies?'));
//
//     while (numberOfFilms.trim() == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many did you watch movies?');
//     }
// }
//
// start();
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 1; i++) {
//         let nameMove = [prompt('What movies did you watch last time?')];
//         let balls = prompt('how many balls did you want to get?');
//         if (nameMove.length > 0 && nameMove.length < 50 && balls.length < 50 && balls.length !== 0) {
//             personalMovieDB.movies[nameMove] = balls;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Посмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('error 404');
//     }
// }
//
// detectPersonalLevel();
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
//     }
// }
//
// writeYourGenres();
//
// function showMyDB(obj) {
//     if (!obj) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyDB(personalMovieDB.privat);
// //--------------------------------------------------
// // // task 28
//
// const num=12.7
// console.log(Math.round(num));
//
//
// const test="12.7px"
// console.log(parseInt(test))
// console.log(parseFloat(test))
//
//
//
// // const fruit="some fruit"
//
// console.log(fruit.indexOf(""));
//
//
// const logg="Hello world"
// console.log(logg.slice(6));
//
// console.log(logg.substr(6,11));

// // Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
//
// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
//
// // Место для третьей задачи
// function getMathResult(baseNum, secondNum) {
//     if (secondNum <= 0 || typeof secondNum === 'string') {
//         return baseNum;
//     }
//     let str = `${baseNum}`;
//     for (let i = 2; i <= secondNum; i++) {
//         str += `---${baseNum *  i}`;
//     }
//     return str;
// }


// // task 27

// const usdCurr=28
// const discount=0.9
//
// function convert(amount,curr){
// return (curr*amount)
// }
// function promotion(result){
//     console.log(result*discount)
// }
// promotion(convert(500,usdCurr))

// const test = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
// //     console.log("Done");
// // };
// // test()
//
//
// function doNothing(){}
//
// console.log(doNothing()===undefined);
// // // // task 26
// //
// const usdCurr=28
// const eurCurr=32
//
// function convert(amount,curr){
//     console.log(curr*amount)
// }
// convert(500,usdCurr)
// convert(500,eurCurr)


// // task 25
// const calc=(a,b)=>a+b
// console.log(calc(5, 5));

// const logger=function (){
//     console.log("Hello");
// }
// logger()
//
//
// const calc = (a,b) => {
// return a+b
// }
// const calc1 = () => {
// let num =50
//     return num
// }
// console.log(calc(4,2))
// console.log(calc1())


// let num =20
//
// function showFirstMessage(text){
//     console.log(text);
//     let num =222
//     console.log(num+1);
// }
//
// // const showFirstMessage1=()=>{
// //     console.log("Hello");
// //
// // }
// showFirstMessage("text")
// console.log(num+1);
// // showFirstMessage1()
//


// // task 24
// let numberOfFilms = +prompt('How many did you watch movies?');
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// // personalMovieDB.movies={[yourAnswer]:yourAnswer2}
// // for (let i = 0; i < 1; i++) {
// //     let nameMove = [prompt('What movies did you watch last time?')];
// //     let balls = prompt('how many balls did you want to get?');
// //     if (nameMove.length > 0 && nameMove.length < 50 && balls.length < 50 && balls.length !== 0)  {
// //         personalMovieDB.movies[nameMove] = balls;
// //     } else {
// //         console.log("error");
// //         i--
// //     }
// // }
//     if (personalMovieDB.count<10){
//         console.log("Посмотрено довольно мало фильмов");
//     }else if(personalMovieDB.count>=10&&personalMovieDB.count<=30){
//         console.log("Вы киноман");
//     }else {
//         console.log("error 404");
//     }
// // personalMovieDB.movies[prompt('What movies did you watch last time?')] = prompt('how many balls did you want to get?');
// // personalMovieDB.movies.logan=prompt("how many balls did you want to get?")
//
//
// console.log(personalMovieDB);

// //Task3
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i <=lines+1 ; i++) {
//     for (let j = 0; j <i ; j++) {
//     result+="*"
//         for (let k = 0; k < j; k++) {
//     result+="*"
// break
//         }
//     }
//     result+="\n"
// }
// console.log(result);

//task 2
// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//
//     // Не трогаем
//     return result;
// }
//
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//
//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'string') {
//             data[i] += ' - done';
//         } else {
//             data[i] *= 2;
//
//         }
//     }
//     // Не трогаем
//     return data;
// }
//
// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     for (let i = 0; i < data.length; i++) {
// result[i]=data[data.length-1-i]
//     }
//     // Пишем решение вот тут
//
//
//     // Не трогаем
//     return result;
// }

// tasks
// // Место для первой задачи
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
//
//
// }
//
// // Место для второй задачи
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         console.log(i);
//         if (i === 13) break;
//     }
// }
//
//
// // Место для третьей задачи
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 1) continue;
//         console.log(i);
//     }
//
// }
// // Место для четвертой задачи
//
// // Цикл, который нужно переписать:
//
// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }
//
// function fourthTask() {
//     debugger
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 1) {
//             console.log(i);
//         }
//         i++;
//     }
// }
// fourthTask()
// // Место для пятой задачи
//
// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 0; i <=5 ; i++) {
//         arrayOfNumbers[i]=i+5
//     }
//     // Не трогаем
//     return arrayOfNumbers;
// }

// //lesson 23
//
// first: for (let i = 0; i < 3; i++) {
//     console.log('First level: ' + i);
//     for (let j = 0; j < 3; j++) {
//         console.log('Second level: ' + j);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first
//             console.log('third level: ' + k);
//
//         }
//     }
// }
// // for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//      }
// }
// let star = '';
// const length = 7;
// for (let i = 1; i <= length; i++) {
//     for (let j = 0; j <i ; j++) {
//     star += '*';
//     }
//     star+="\n"
// }
// console.log(star);
// // //lesson 22
// let num = 50;
// while (num <=55){
//     console.log(num);
//     num++
// }
//
// do{
//     console.log(num);
//     num++
// }
// // while (num <=55)
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }


// //lesson 21
//
//
// const hamburger=0
// const fries=0,
//     cola=0,
//     nuggets=2
//
// if (hamburger===3&&cola===2||fries===3 && nuggets ){
//     console.log("I am full");
// }
//
//
// console.log( NaN || 2 || undefined );
//
//
// console.log( NaN && 2 && undefined );
//
//
// console.log( 1 && 2 && 3 );
//
//
// console.log( !1 && 2 || !3 );
//
//
// console.log( 25 || null && !3 );
//
//
// console.log( NaN || null || !3 || undefined || 5);
//
//
// console.log( NaN || null && !3 && undefined || 5);
//
//
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger=true
// const fries=true
// if (hamburger&&fries){
//     console.log("I am full");
// // }
// const hamburger = 2;
// const fries = 1;
// const cola = 0;
// if (hamburger ||  cola || fries) {
//     console.log('everybody is full');
// } else {
//     console.log('everybody is going out')}


// }const hamburger = 2;
// const fries = 1;
// const cola = 0;
// if (hamburger >= 3 && cola && fries) {
//     console.log('everybody is full');
// } else {
//     console.log('everybody is going out');
// }


//lesson 20
// if (2) {
//     console.log('ok');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Much');
// } else {
//     console.log('ok');
// }
// (num === 50) ? console.log('ok') : console.log('Error');

// switch (num){
//     case 50:
//         console.log("ok");
// }

// //lesson19
//
// let numberOfFilms = +prompt('How many did you watch movies?');
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// // personalMovieDB.movies={[yourAnswer]:yourAnswer2}
// personalMovieDB.movies[prompt('What movies did you watch last time?')] = prompt('how many balls did you want to get?');
// personalMovieDB.movies[prompt('What movies did you watch last time?')] = prompt('how many balls did you want to get?');
// // personalMovieDB.movies.logan=prompt("how many balls did you want to get?")
//
//
// console.log(personalMovieDB);
// //lesson 15
// console.log('arr' + '-object');
// console.log(4 + '-object');
// console.log(4 + '4');
//
// let incr = 10,
//     decr = 10;
// incr++;
// decr++;
// console.log(incr);
// console.log(decr);
// console.log(5 % 2);
// console.log(2 * 4 === 8);
// console.log(2 * 4 === '8');
//
// const isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose);


// //lesson 14
// const category="toys"
// console.log("https://someurl.com/"+category)
// console.log(`https://someurl.com/${category}`)
// const user="Ivan"
// alert(`Hello, ${user}`)

// //lesson 13
// const storeName="Five"
// const storeDescription={
//     budget:10000,
//     employees:["John","John","John"],
//     products:{
//         milk:100,
//         bread:50
//     },
//     open:true
// }

// alert("Hello")

// const result=confirm("Are you here")
// console.log(result);

// const answer=prompt("Вам есть 18?")
// console.log(typeof (answer));

// const answers = [];
// // answers[0]=prompt("What is your name?")
// // answers[1]=prompt("What is your lastname?")
// // answers[2]=prompt("How old are you? ")
// console.log(typeof (answers));

// document.write(answers)
// // // Lesson 12
// const arr = [1, 2, 3, 4];
// const arrObj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     abc: {
//         a: 'a',
//         b: {b: 'b'},
//         c:["c","c"]
//     }
// };
//
// arrObj.b = '154';
//
// console.log(arr['1']);
// console.log(arrObj['1']);
// console.log(arrObj['b']);
// console.log(arrObj.b);
//
// const obj = {Anna: 500, Alice: 800};
// console.log(obj['Anna']);

// const obj = {a: 1, b: 2};
// console.log(obj["a"]);

// // Lesson 11
// let number = 4.6;
// console.log(-4 / 0);
// console.log('string' * 9);
//

//
// const bool=true
// //
// // console.log(something)
//
// let ind
// console.log(ind);
//
//
// const obj={
//     name:"John",
//     age:25,
//     isMarried:false
// }
// console.log(obj["name"])
// console.log(obj.name)
//
// let arr=["plum.png","orange.jpg","apple.bmp",6,{},[]]
//
// console.log(arr["0"]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);

//Lesson 10
// const userName="John"
// let userNumber=25
// userNumber=24
//
//Lesson 11

// const a = 5000
// const b = 4000
//
//
//
//
// // let number = 1;
// const leftBorderWith = 1;
//
// number = 5;
// console.log(number);
//
//
// {
//     let result = 50;
// }
// console.log(result);
//
// {
//     let result = 50;
// }
// console.log(result);
