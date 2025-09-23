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
const val_ue = Object.create(value)
console.log(val_ue.email);
