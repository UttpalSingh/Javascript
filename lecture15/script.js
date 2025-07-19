// control flow in javascript


// switch statement
const month = 5

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("case does not match");
        break;
}


// const day = "march" // defined
// const day = "false" // defined
const day = false // not defined
// if(day){
//     console.log("day is defined");
// }
// else{
//     console.log("day is not defined");
// }
// falsy values in js
// => false,null,undefined,0,-0,"",NaN

// truthy value in js
// => "0","false",[],{},function(){},infinity,-infinity, true


const myObj = {}
// if(Object.keys(myObj).length === 0){  // (Object.keys(myObj) => array of keys in the object
//     console.log("object is empty");
// }

const myArr = []
// if(myArr.length === 0){
//     console.log("array is empty");
// }


// && => both of the statement should be true
// || => at least one of the statement should be true


// Nullish Coercion operator (??)
let val1;
val1 = null ?? 10 ?? 20; // 10
val1 = undefined ?? 15 // 15
val1 = undefined ?? null ?? 20 // 20
// console.log(val1);


// Ternary operator
// condition ? true : false;
const age = 18
// age >= 15 ? console.log("You can drive" ) : console.log("you cannot drive");


