console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {}
  soundOff() {}
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobbyRm) {
    let foundEl = this.hobbies.indexOf(hobbyRm);
    this.hobbies.splice(foundEl, 1);
  }
  removeHobbyFilt(hobbyRmFi) {
    this.hobbies = this.hobbies.filter((element) => {
      element != hobbyRmFi;
    });
  }
  greeting() {
    console.log(`Hello there, ${this.name}, welcome to existence.`);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    this.occupation = occupation;
  }
  greeting() {
    console.log(
      `Hello ${this.name}, congratulations on becoming a ${this.occupation}!`
    );
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const ross = new Person("Ross", 2, "Birmingham", [
  "kayak fishing",
  "solving code",
  "looking cool",
]);
console.log(ross);

const matt = new Coder(
  "Matt",
  2,
  "Tucson",
  ["basketball", "lifting weights", "betting"],
  "Full Stack Web Developer"
);
console.log(matt);

ross.greeting();
matt.greeting();
// ross.addHobby("lure making");
// ross.removeHobby("kayak fishing");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b = this.result) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b = this.result) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b = this.result) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b = this.result) {
    this.result = b / a;
    return this.result;
  }
  displayResult() {
    console.log(this.result);
  }
}

const calculator = new Calculator();

calculator.add(7, 3);
console.log(calculator);
calculator.subtract(10, 5);
console.log(calculator);
calculator.multiply(5, 2);
console.log(calculator);
calculator.divide(25, 5);
console.log(calculator);

calculator.add(100, 20);
calculator.divide(10);
console.log(calculator);

calculator.displayResult();
