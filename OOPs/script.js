// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     greet() {
//       console.log(`Hello ${this.firstName} ${this.lastName}`);
//     },
//     getBirthYear() {
//       return new Date().getFullYear() - user.age;
//     },
//   };

//   return user
// }

// function createUser(firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear : createUser.commonMethods.getBirthYear
//     }
//     return user
// }

// createUser.commonMethods={
//     getBirthYear(){
//         return new Date().getFullYear() - this.age;
//     }
// }

// const user1 = createUser("John", "Doe", 30);
// const user2 = createUser("Robert", "Parker", 53);
// console.log(user1)

// constructor function
// constructor fn name is conventionally start with capital letter

// A constructor function in JavaScript is a regular function used to create and initialize objects.
// function CreateUser(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

 
// CreateUser.prototype.getBirthYear= function(){
//     return new Date().getFullYear() - this.age;
// }

// //When called with the new keyword, it constructs a new object and assigns this to refer to that new object. 

// const user1 = new CreateUser("John", "Doe", 30);
// const user2 = new CreateUser("Robert", "Parker", 53);
// console.log(user1)
// console.log(user2)


// ---------- CLASSES ------------------------------

 