/**
 * The sum of the squares of the first ten natural numbers is, 1(1) + 2(2) + ... + 10(10) = 385 
 * The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

'use strict';

const MIN = 1;
const MAX = 100;

let sum = 0;
let sumOfSquares = 0;

for(var i = MIN; i <= MAX; i++) {
    sum += i;
    sumOfSquares += i*i;
}

let answer = (sum*sum) - sumOfSquares;
console.log('Sum of squares difference =>', answer);