/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. 
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

'use strict';

const MIN = 1;
const MAX = 20;

let stillSearching = true;
let answer = MAX;

let calculationsCount = 0;

do {
    let foundAnswer = true;
    
    for(var i = MAX; i >= MIN; i--) {
        
        calculationsCount++;

        if(answer % i !== 0) {
            foundAnswer = false;
            break;
        }
    }

    stillSearching = !foundAnswer;
    
    if(stillSearching) answer += MAX;

} while (stillSearching);

console.log(`Smallest number that is evenly devisible but the numbers ${MIN} - ${MAX} => ${answer}`);
console.log(`Calculations Performed => ${calculationsCount}`);