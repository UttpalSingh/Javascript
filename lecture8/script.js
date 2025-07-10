// Arrays

let myArr = ["shubh","Karan Aujla","Diljit"]
// console.log(myArr[1]);
// console.log(myArr);

let allArr = new Array(2,3,4,5)
// console.log(allArr); // [2,3,4,5]
 

// ********* Methods in Arrays **********

// push method
myArr.push("jerry")
// console.log(myArr);

// pop method
myArr.pop()
// console.log(myArr);


// unshift method
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const arr1 = [2,3,4]
arr1.unshift(6,7)
// console.log(arr1); // 6,7,2,3,4


// slice method
let newArr = ["IronMan","thor","BatMan","SpiderMan","Flash","CaptainAmerica","Superman"]

// console.log(newArr);
// console.log(newArr.slice(0,4)); // [ 'IronMan', 'thor', 'BatMan', 'SpiderMan' ]
// console.log(newArr.slice(1,5)); // [ 'thor', 'BatMan', 'SpiderMan', 'Flash' ]

// splice Method

// console.log(newArr.splice(4,1,"Sonic")); // index,romove no. element,add element
// console.log(newArr)
// console.log(newArr.splice(4,0,"vigi"));
// console.log(newArr)


let marverHero = ["IronMan","Thor","Hulk","AntMan"]
let dcHeroes = ["SuperMan","BatMan","Flash","AquaMan"]

let allHeroes = marverHero.concat(dcHeroes)
// console.log(allHeroes);

const myHeroes = [...marverHero,...dcHeroes]
// console.log(myHeroes);


let score1 = 100
let score2 = 200
let score3 = 400

//console.log(Array.of(score1,score2,score3)); // [100,200,400]


// From array
// console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]