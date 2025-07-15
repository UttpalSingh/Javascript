// this and arrow function

const user ={
    username : "ElonMusk",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} You are loggedin`);
        console.log(this);
        
    }
}
// user.welcomeMessage() // ElonMusk
// user.username = "vigi"
// user.welcomeMessage() // vigi




//  arrow function

const data = () => {
    const username = "sanjana"
    console.log(this.username);
    
}
// data() // undefined


const addTwo = (nums1,nums2) =>{
    return nums1 + nums2
}
// console.log(addTwo(4,5));


// implicit return 
const addNum = (num1,num2) => (num1 + num2)
// console.log(addNum(3,7));
