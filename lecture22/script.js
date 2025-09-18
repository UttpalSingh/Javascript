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
console.log(userTwo);

