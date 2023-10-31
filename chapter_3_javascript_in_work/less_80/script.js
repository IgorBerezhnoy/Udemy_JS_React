'use strict';
const log = function (a, b, ...rest) {
    console.log(a, b, ...rest);
};
log("bac","rest", "operator")

function calcOrDouble(number,basis=2){
    console.log(number*basis)
}