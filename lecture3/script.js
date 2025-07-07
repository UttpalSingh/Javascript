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