// Function with objects and arrays

function calculatePrice(...num1){
    return num1;
}
// console.log(calculatePrice(200,400,700,1000)); // [200,400,700,1000]

function calculateCost(val1,val2,...num1){ // ... => split operator
    return num1;
}
// console.log(calculateCost(200,300,900,120,130)); // [900,120,130]



// Handling object in a function
const user = {
    username : "IronMan",
    work : "Protect the world"
}

function handleProfile(someobject){
    console.log(`He is ${someobject.username} and his work is to ${someobject.work} `);
}
// handleProfile(user);
handleProfile({
    username : "Thor",
    work : "use lightning to destroy the villains"
})