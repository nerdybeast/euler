'use strict';

const MAX = 1000;
let calculations = 0;
let answer;

function isPythagoreanTriplet(a, b, c) {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

for(let a = 1; a <= MAX; a++) {

    if(answer) break;

    for(let b = (a + 1); b <= MAX; b++) {
        
        calculations++;

        let c = MAX - (a + b);

        if(c <= b) break;

        if(isPythagoreanTriplet(a, b, c)) {
            answer = a * b * c;
            console.log(`a => ${a}, b => ${b}, c => ${c}`);
            break;
        }
    }
}

console.log(`Answer       => ${answer}`);
console.log(`Calculations => ${calculations}`);