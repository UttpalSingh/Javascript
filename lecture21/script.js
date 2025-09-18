    /*
    resove connection is with .then
    reject connectio is with .catch
    
    */
    
    // first promise
    
    // const promise = new Promise((resolve,reject)=>{
    //     // Do an async task
    //     setTimeout(()=>{
    //         console.log("async task is complete");
    //         resolve()
            
    //     },1000)
    // })

    // promise.then((e)=>{
    //     console.log("promised consumed");
        
    // })  


    // // second promise
    // new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         console.log("asycs task 2");
    //         resolve()
    //     },1000)
    // }).then((e)=>{
    //     console.log("promise 2 consumed");
  
    // })

    // // third promise
    // const newPromise = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve({username : "VIGI",emai: "vigi@gmail.com"})
    //     },1000)
    // })
    // newPromise.then((e)=>{
    //     console.log(e)
    // })


    // // fourth promise
    // const promiseFour = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         let error = true
    //         if(!error){
    //             resolve({username:"Uttpal",Password:"123uttpal"})
    //         }else{
    //             reject('ERROR : something goes wrong')
    //         }
    //     }, 1000);
    // })
    // promiseFour
    // .then((e)=>{
    //     console.log(e);
    //     return e.username
    // })
    // .then((e)=>{
    //     console.log(e);
        
    // })
    // .catch((error)=>{
    //     console.log(error);
        
    // }).finally(()=>{
    //     console.log("Promise if either resolve or reject");
        
    // })


    // // promise five (async await)
    // const promiseFive = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         let error = true
    //         if(!error){
    //             resolve({username : "Javascript",password : "123js"})
    //         }
    //         else{
    //             reject('ERROR : there is something wrong in your code')
    //         }
    //     }, 1000);
    // })
    // async function consumePromiseFive() {
    //     try {
    //         const response =  await promiseFive
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    // consumePromiseFive()

    // promise 6
    // const url = " https://official-joke-api.appspot.com/random_joke"


// async function fetchAPI() {
//     const response = await fetch(url)
//     const data = await response.json();
//     console.log(data);
    
// }
// fetchAPI()