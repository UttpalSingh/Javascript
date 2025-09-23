// we never use return key in set function


class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    // get email(){
    //     return this._email.toUpperCase()
    // }
    
    // set email(value){
    //     this._email = value
    // }
    get password(){
        return `${this._password}sana1921`
    }
    set password(value){
        this._password = value
    }
}
const data = new user("sanjana@gmail.com","123")
// console.log(data.email);
// console.log(data.password);

function vigi(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email =  value
        }
    })
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password =  value
        }
    })
}
const chai = new vigi('uttpal@gmail.com',1234)
console.log(chai.email);






const value = {
    _email : 'vigi@gmail.com',
    _password : 'abc123',


    get email(){
        return this._email;
    },

    set email(value){
        this._email = value
    }
}
// const val_ue = Object.create(value)
// console.log(val_ue.email);
