// High order loop

// for of loop
const arr = [1,2,3,4,5,6]
for (const val of arr) {
    // console.log(val);
    
}
const names = ["sana","sanju","ghori"];
for (const value of names) {
    // console.log(`sanjana's some nicknames are ${value}`);
    
}

// Maps
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// console.log(map.get("a"));
// // Expected output: 1

// map.set("a", 97);

// console.log(map.get("a"));
// // Expected output: 97

// console.log(map.size);
// // Expected output: 3

// map.delete("b");

// console.log(map.size);
// Expected output: 2

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

//** for of loop not works on object



// for in loop
const myLang ={
    js : "javascript",
    cpp : "C++",
    py : "Python",
    rb : "ruby"
}
for (const key in myLang) {
    // console.log(myLang[key]);
    // console.log(`${key} : ${myLang[key]}`);
    
}


// for each loop
const player = ["virat","Dhoni","Rohit","Bumrah"]
player.forEach(function (val){
    // console.log(val);
    
})
player.forEach((item) =>{
    // console.log(item);
    
})

