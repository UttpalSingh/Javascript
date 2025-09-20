class User{
    constructor (username){
        this.username = username
    }
    // method
    logMe(){
        console.log(`Username : ${this.username}`);        
    }
    createId(){
        return `123`
    }
}
const sana = new User("sanjana")
console.log(sana.createId());
sana.logMe()
