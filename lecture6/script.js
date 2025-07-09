// Number and Math in Javascript

const number = 100
// console.log(number); // 100

const balance = new Number(400)
// console.log(balance); // Number: 400
// console.log(balance.toString()); // 400
// console.log(balance.toFixed(3)); // 400.000

const anotherNumber = 198.897
// console.log(anotherNumber.toPrecision(4)); // 198.9
// console.log(anotherNumber.toPrecision(3)); // 199


// ************************ Maths ***************************


/*
Math.floor()
Returns the largest integer less than or equal to the input.

console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
*/

// Math.random()
function random(max){
    return Math.floor(Math.random() * max);
//     Math.random()
// Returns a pseudo-random number between 0 and 1
}
// console.log(random(9)) // => 0,1,2,3,4,5,6,7,8
// console.log(Math.floor(Math.random() * 3)); // 0,1,2
// console.log(Math.random() * 10); // 0,1,2,3,4,5,6,7,8,9 with decimal value
console.log(Math.floor(Math.random() * 10 + 1)); // it not gives you zero 1,2,3,4,5,6,7,8,9,10



/*
importan formulla 
=> it not gives you zero
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

*/


// console.log(Math.abs(4)); // 4
// console.log(Math.abs(-4)); // 4

// console.log(Math.round(4.6)); // 5
// console.log(Math.round(3.2)); // 3


