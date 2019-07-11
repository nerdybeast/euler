'use strict';

let a = 0;
let b = 1;
let total = 0;
let max = 4000000;
let evenNumbers = [];
let isEven = (num) => num % 2 === 0;

while(total <= max) {
    
    let temp = a + b;
    if(temp <= max && isEven(temp)) { evenNumbers.push(temp); }

    total = temp;
    a = b;
    b = temp;
}

let evenNumbersTotal = evenNumbers.reduce((prev, curr) => prev + curr);
console.log(JSON.stringify(evenNumbers));
console.log(`Total of even numbers => ${evenNumbersTotal}`);