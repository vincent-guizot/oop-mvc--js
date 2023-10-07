// OOP

// const person = {
//   name: "Vincent",
//   address: "Jakarta",
//   age: 17,

//   speak: function () {
//     console.log(`My name is ${this.name}`);
//   },
//   growUp: function () {
//     console.log("Grow Up");
//   },
// };

// console.log(person);
// console.log(typeof person);

class Person {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }
  growUp() {
    console.log("Grow Up");
  }
}

let vincent = new Person("Vincent", "Jakarta", 17);
vincent.speak();

// console.log(vincent);
// console.log(typeof vincent);

// console.log(Person);
// console.log(typeof Person);
