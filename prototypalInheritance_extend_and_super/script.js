class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user1 = new User("John", "Doe", 30);
const user2 = new User("Sam", "Wilson", 45);

class Student extends User {
  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age, gender);
    this.gender = gender;
  }
}

const student1 = new Student("Tony", "Stark", 30, "male");
const student2 = new Student("Wanda", "Maxi", 105, "female");

class Employee extends User {
  constructor(firstName, lastName, age, isPresent) {
    super(firstName, lastName, age);
    this.isPresent = isPresent;
  }
}

const employee1 = new Employee("James", "Gun", 30, true);
const employee2 = new Employee("Kevin", "Fin", 105, false);
