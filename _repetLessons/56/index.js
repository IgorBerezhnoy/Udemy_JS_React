'use strict';
// const obj = {
//   'name': 'Test',
//   [Symbol('id')]: 1
// };
// let id = Symbol();
// let id1 = Symbol();
// obj[id] = 1;
// obj[id1] = 1;
//
// console.log(obj);

let obj={
  a:1,
  b:"str",
  c:true,
  d:undefined,
  e:Symbol(),
  f:null,
  g:new Set([1,2,3])
}
let x=JSON.stringify(obj)
console.log(JSON.parse(x))