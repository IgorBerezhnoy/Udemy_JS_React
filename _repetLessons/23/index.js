// for (let i = 0; i<3;i++){
//   console.log(i)
//   for (let j = 0; j < 3; j++) {
//     console.log("_"+j);
//   }
// }

//*
//**
//***
//****
// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
//
// }
// console.log(result);

//
// first:for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log('_' + j);
//     for (let k = 0; k < 5; k++) {
//       if (k === 2) break  first;
//       console.log('___' + k);
//     }
//   }
// }


const lines = 6;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let k = 0; k < lines - i; k++) {
    result += ' ';
  }
  for (let j = 0; j <i; j++) {
    result += '*';
  } for (let j = 1; j <i; j++) {
    result += '*';
  }
  result += '\n';
}
result=result.slice(6)
console.log("aa"+result);
