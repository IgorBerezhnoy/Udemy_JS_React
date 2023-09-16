'use strict';

// // // task 28
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
