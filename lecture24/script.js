// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const myObj = {
    name : 'gingerChai',
    price : 250,
    isAvailable : true
}
// console.log(Object.getOwnPropertyDescriptor(myObj,"price"));

Object.defineProperty(myObj,"price",{
    writable:  false,
    enumerable : false,
    configurable : false
})

// console.log(Object.getOwnPropertyDescriptor(myObj,"price"));



