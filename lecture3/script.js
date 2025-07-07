//Datatypes conversion and confusion

/*
There are many types of conversion :-
Number
String
Boolean

for more datatypes you can visit this page
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
*/



let score = "33"
//console.log(typeof score); // string

let Value = Number(score);
//console.log(typeof Value); // number

let data = "23abs"
let valueInNumber = Number(data)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN (Not a Number)

let bool = 1

let isBoolean = Boolean(bool)
//console.log(isBoolean);

// 1 => true
// 0 => false
// " " => false
// "vigi" => true

// ******************** Operations ******************

// console.log("1" + 2 + 2); => 122
// console.log(1 + 2 + "2"); => 32
// console.log("1" + 2); => 12
// console.log(1 + "2"); => 12
// console.log(+""); => 0
// console.log(+true); => 1
// console.log(true+); => error

// IN Javascript you can compare two diffrent datatypes
// console.log("2" >= 2); => true
// console.log("2" > 1); => true

// console.log(null === 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// === it check the data with its datatypes
//eg. console.log("2" == 2) => true
// but console.log("2" === 2) gives you false

let Data = null
// console.log(data); // null
// console.log(typeof data); // object

let value = Number(data)
// console.log(value) // 0
// console.log(typeof value); // number




// Postfix increment (suffix increment)

let X = 3;
const Y = x++;
// console.log(y);
// console.log(x);

// x is 4; y is 3

let X2 = 3n;
const Y2 = x2++;
// console.log(x2);
// console.log(y2);

// x2 is 4n; y2 is 3n


// Prefix increment

let x = 3;
const y = ++x;
console.log(x);
console.log(y);

// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
console.log(x2);
console.log(y2);

// x2 is 4n; y2 is 4n

// For more detail visit this page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation


