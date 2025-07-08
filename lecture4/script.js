// Summary of Datatypes

// ** Javascript is dynamic language  with type and operator; 

// Primitive Datatypes
// 7 types :- String,Number,Boolean,Null,undefined,symbol,BigInt;

const data = "abc"
const anotherData = 123
const value = false
const secondValue = true

const givenData = null
let anotherValue; // undefined

const price = Symbol('134')
const secondPrice = Symbol('134')
// console.log(price === secondPrice); // false



// Reference Datatypes(Non Primitive)
// Array,Objects,Functions

const heros = ["krish","IronMan","CaptainAmerica","Shaktiman"]
let obj = {
    name : "vigi",
    age  : 18
}
const myFunction = function(){
    console.log("Hloo World")
}