/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. 
 * Find the sum of all the primes below two million.
 */

'use strict';

function isPrime(n) {
    let start = 2;
    let squareRoot = Math.sqrt(n);
    while(start <= squareRoot) {
        if(n % start++ === 0) return false;
    }
    return n > 1;
}

const MAX = 2000000;
let answer = 0;

for(let i = 1; i <= MAX; i++) {
    if(isPrime(i)) {
        answer += i;
    }
}

console.log(`The sum of all primes below ${MAX} equals => ${answer}`);