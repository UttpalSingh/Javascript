// local scope and global scope

let a = 300 // global scope

if (true) { // block scope
    let a = 10
    const b = 39
    // console.log("inner a : ",a); // 10
    
}

// console.log(a); // 300 

function outside(){
    const username = "Tony Stark"

    function inside(){
        const profession = "scientist"
        // console.log(username);
        
    }
    // console.log(profession); // undefined
    inside() // Tony Stark
}
outside() 



// console.log(addOne(2)); // 3
function addOne(num){
    return num + 1;
}

// console.log(addtwo); // Cannot access 'addtwo' before initialization
const addtwo = function addTwo(num){
    return num + 1
}