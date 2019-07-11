/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const startTime = (new Date()).getTime();
const MIN = 1;
const MAX = 10000;

let largestPalindrome = 0;
let numOfPalindromes = 0;
let calculations = 0;

for(var i = MAX; i >= MIN; i--) {
    for(var j = i; j >= MIN; j--) {
        
        calculations++;
        
        let product = i * j;
        let productAsString = String(product);
        let inverse = productAsString.split('').reverse().join('');
        
        if(productAsString === inverse) {
            
            numOfPalindromes++;
            if(product > largestPalindrome) largestPalindrome = product;
            
            console.log(product);
            
            break;
        }
    }
}

function getExecutionTime(startTime) {
	
	let executionTime = (new Date()).getTime() - startTime;
	
	if(executionTime <= 1000) {
		return `${executionTime}ms`;
	}
	
	return `${(executionTime / 1000).toFixed(1)}s`;
}

console.log(``);
console.log('Calculations Performed  => ', calculations);
console.log('Palindromes Found       => ', numOfPalindromes);
console.log('Largest Palindrome      => ', largestPalindrome);
console.log('Execution Time          => ', getExecutionTime(startTime));