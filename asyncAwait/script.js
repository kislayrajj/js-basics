// ----------- Async Await -------------
// Async/Await is a newer feature in JavaScript that allows you to write asynchronous code in a synchronous manner
// async function fetchProducts(){
//   const response = await fetch("http://dummyjson.com/products")
//   const data = await response.json()
//   console.log(data)
// }

// fetchProducts()

const makeAsyncRequest = async () => {
    try{
        const response = await fetch("https://dummyjso.com/users");
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log("Error fetching data:", err);
    }
console.log("hii")
};

makeAsyncRequest()

// Promise Chaining- Promise chaining allows you to chain multiple promises together, making the code more readable and easier to understand


// //optional chaining
// const users={
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     // getFullName: function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// console.log(users.getFullName?.());