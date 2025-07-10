//  Objects literals

const mySym = Symbol("key1")

const obj = {
    name: "vigi",
    [mySym]: "mykey1", // mysym is symbol
    // mySym: "mykey1", // object
    age: 18,
    email: "vigi@gmail.com",
    "location":"Patna"
}

console.log(obj);
// console.log(obj.email);
console.log(obj["location"]);
// console.log(obj["mySym"]); // undefined
// console.log(obj[mySym]); // mykey1


