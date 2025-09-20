// // class constructor and static

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}@Sana`
//     }
// }

// const data = new User("Sana","sana@gmail.com",1921)
// // console.log(data.encryptPassword());
// // console.log(data);



// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.Username = function(){
//     return `${this.username.toUpperCase()}`
// }

// const value = new User("Sanju","sanju@gmail.com",2119)
// console.log(value.encryptPassword());
// console.log(value.Username());



class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com",1234)
chai.addCourse()