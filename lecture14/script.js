// immediately invoked function


// IIFE
(function classRoom(){ // named IIFE
    // console.log("user is absent");
    
})(); // ; stops the invoked function

( () =>{ // unmaned IIFE
    // console.log("sachin is absent");
    
})();

( (name) =>{ // IIFE with parameter
    console.log(`${name} is absent`);
    
})("sangveer");