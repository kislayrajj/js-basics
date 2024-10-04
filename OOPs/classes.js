// class CreateUser {
//   // using # makes any fields private

//   #age;
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#age = age;
//   }

//   #sayHi = "Hello";
//   getBirthYear() {
//     console.log(this.#sayHi);
//     this.#getFullName;
//     return new Date().getFullYear() - this.#age;
//   }

//   #getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const user1 = new CreateUser("John", "Doe", 78);
// const user2 = new CreateUser("Peter", "Parker", 18);
// console.log(user1.getBirthYear());

// ----------- STATIC PROPERTIES AND METHODS ON CLASSES --------------
// Static methods and properties are associated with the class itself, not with individual instances of the class
// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   // static codes runs as soon as class is loaded but can only be accessed inside the class
//   static sayHi = "Hello";

//   // static block
//   static {
//     console.log("Static block executed");
//     // define static variables without using "static" keyword instead "this" can be used
//     this.sayHi = "Hello";
//     console.log(this.sayHi);

//     // static method
//     this.createDefaultUser = function () {
//       return new CreateUser("Default", "User", 30); // Returns a new instance with default values
//     };
//   }
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const user1 = new CreateUser("John", "Doe", 78);
// const user2 = new CreateUser("Peter", "Parker", 18);


// -------- Getters and Setters --------- 

// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }


//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//    get fullName() {
//     return `${this?.firstName} ${this?.lastName || ""}` ;
//   }

//   set fullName(value){
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user1 = new CreateUser("John", "Doe", 78);
// const user2 = new CreateUser("Peter", "Parker", 18);



// // const user = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   get fullName() {
// //     return `${this.firstName} ${this.lastName}`;
// //   },
// //   set fullName(value) {
// //     const [firstName, lastName] = value.split(" ");
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //   },
// // };


// ---------- "this" Keyword --------------------

