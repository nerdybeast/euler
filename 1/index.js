'use strict';

const MAX = 1000;
let multiples = [];

for(let i = 1; i < MAX; i++) {
    let isMultipleOfThree = Number.isInteger(i / 3);
    let isMultipleOfFive = Number.isInteger(i / 5);
    if(isMultipleOfThree || isMultipleOfFive) {
        multiples.push(i);
    }
}
console.log(JSON.stringify(multiples));
let sum = multiples.reduce((prev, curr) => prev + curr);

console.log(`Sum of all the multiples of 3 or 5 under 1000 => ${sum}`);