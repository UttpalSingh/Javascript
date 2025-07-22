// filter,map and reduce

// const palyer = ["ronaldo","messi","ramos","zedane","marshmello"]
// const values = palyer.forEach((val) =>{
//     console.log(val);
    
// })

// console.log(values);
// // ronaldo
// // messi
// // ramos
// // zedane
// // marshmello
// // undefined

// ** for each loop not return the value


// ******************* filter method **********************

// const mynums = [1,23,4,5,6,7,8,9]
// const newValue = mynums.filter((nums) => {
//     return nums > 3
// });
// console.log(newValue);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const myBooks = books.filter((bok) =>{
    return bok.genre === 'Fiction'
})
// console.log(myBooks);

const newBooks = books.filter((val) =>{
    return val.publish > 1990 && val.edition < 2010
})
// console.log(newBooks);

const allBooks = books.filter((val) =>{
    return val.publish > 1990 && val.genre === 'History'
})
// console.log(allBooks);



// **************** Map ****************

let numbers = [1,2,3,4,5,6,7,8]

// let newNums = numbers.map((nums) =>{
//     return nums + 10
// })

let newNums = numbers.map((nums) =>{
    return nums * 10;
}).map((nums) =>{
    return nums / 10;
}).filter((nums) =>{
    return nums >= 5
})
// console.log(newNums);
// ** map == forEach()


// ********************** Reduce **********************

const allNums = [3,3,4]
const val = allNums.reduce((acc,currval)=>{ // acc => previous; currval => current
    return acc + currval
},0)

// console.log(val); // 10
 /*
    acc = 0
    currval = 3
    == 3

    acc = 3
    currval = 3
    == 6

    acc = 6
    currval = 4
    == 10

 */