// Classes in js

const user = {
    username : "Sanjana",
    loginCount : 8,
    signedOut : true,

    getUserDetails : function(){
        console.log("got user detail from database");
        console.log(`username : ${this.username}`); // this 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,logincount,isLoggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("Sanjana",3,false)
const userTwo =  new User("Sana",1,true) // inherit userOne data
// that's why we use (new) keyword 
// console.log(userTwo);


function createUser(userName,score){
    this.username = userName
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++;
}
const chai = new createUser("chai",10)
const tea = createUser("tea",20)

// protypes

let myHeroes = ["thor","spiderman","ironMan"]
let heroPower = { // Hero power is an object
    thor : "Hammer",
    spiderman : "web",
    ironman : "fryday",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}
Object.prototype.vigi = function(){ // vigi is also an object
    console.log(`Vigi is future AI`);
    
}
// heroPower.vigi() 
// myHeroes.vigi()
// heroPower.getSpiderPower()


//  prototype

const data = {
    name : "Vigi",
    online : false
}
const Teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TAsupport = {
    makeAssiment : "JS assigment",
    fullTime : true
}
// old syntax
// Teacher.__proto__ = data

// new syntax
Object.setPrototypeOf(Teacher,data)
Object.setPrototypeOf(teachingSupport,Teacher)