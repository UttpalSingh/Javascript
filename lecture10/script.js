// Functions and Operator

function MuthuSwami(){
    console.log("muthuswami")
}
// console.log(MuthuSwami());
// MuthuSwami()


function addTwoNumber(nums1,nums2){ // nums1 and nums2 are parameters
    console.log(nums1 + nums2)
}
// addTwoNumber(23,32) // 23 and 32 are arguments => 55
// const sum = addTwoNumber(4,5) // 9
// console.log("sum:",sum); // undefined


function sumTwoNumber(nums1,nums2){ // nums1 and nums2 are parameters
    return nums1 + nums2

}
const a_dd = sumTwoNumber(8,5)
// console.log("add:",a_dd); // add: 13
// console.log(sumTwoNumber(2,3)); // 2,3 are arguments => 5 

// taking input in js
// let A = prompt("Enter your name")

// function loggin(A){
//     return `${A} just loggedin`
// }
// console.log(loggin(A))

// if in js
function isLogin(username){
    if(username === undefined){
        console.log("enter a valid name")
        return;
    }
    return `${username} just loggedin`
    
}
// console.log(isLogin("Uttpal"))
// console.log(isLogin());
