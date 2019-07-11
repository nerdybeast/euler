/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. 
 * What is the 10 001st prime number?
 */

'use strict';

const MAX = 10001;
let primes = [];
let n = 2;

while(primes.length < MAX) {
    if(isPrime(n)) { primes.push(n); }
    if(n === 2) { n++; } else { n += 2; }
}

function isPrime(n) {
    let start = 2;
    let squareRoot = Math.sqrt(n);
    while(start <= squareRoot) {
        if(n % start++ === 0) return false;
    }
    return n > 1;
}

console.log('10001\'st prime number =>', primes.pop());