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

// console.log(obj);
// console.log(obj.email);
// console.log(obj["location"]); // Patna
// console.log(obj["mySym"]); // undefined
// console.log(obj[mySym]); // mykey1

// empty object
const newUser = {}

// console.log(newUser); // {}

newUser.email = "user@gmail.com"
newUser.id = 12412
newUser.name = "vigi"

// console.log(newUser)

// You can create an object inside the object

const information = {
    email : "musk@gmil.com",
    MobNo : 100,
    userName : {
        fullName : {
            firstName : "Elon",
            LastName : "Musk"
        }
    }
}
// console.log(information);
// console.log(information.userName.fullName.firstName); // elon
// console.log(information["userName"]["fullName"]["LastName"]); // musk
// console.log(Object.keys(information));
// console.log(Object.values(information));




// Adition of two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {...obj1,...obj2} // spread operator

// console.log(obj3);

const subjects = {
    subj1 : "Science",
    subj2 : "gk",
    subj3 : "computer"
}

const {subj3} = subjects // destructuring
// console.log(subj3); // computer


// ********************** API'S *************************



// Type of data we get in an API

// {
//     "name" : "vigi",
//     "emil" : "user@gmail.com",
//     "userID" : "jalf243ac"
// }

// Object inside an Array
[
    {},
    {},
    {}
]