"use strict";

//  ***** KLASE: *****

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  sayHi() {
    console.log("Hi");
  }

  getInfo() {
    return "Hi, my name is " + this.name;
  }
}

class Programmer extends Person {
  //EXTENDS - Klasa programmer nasledjuje klasu Person
  constructor(name, surname, age, experience, language) {
    super(name, surname, age); // SUPER poziva konstruktor nad klase(klase koju nasledjuje)
    this.experience = experience;
    this.language = language;
  }

  getInfo() {
    let info = super.getInfo(); //super kada pozivamo nesto iz nadklase
    return `${info} ${this.language}`;
  }

  wirteCode() {
    return `Typing in ${this.language}`;
  }
}

class Tester extends Person {
  constructor(name, surname, age, position, experience) {
    super(name, surname, age);
    this.position = position;
    this.experience = experience;
  }

  test() {
    return `Bug detected by ${this.name} ${this.surname}`;
  }
}

let programmer = new Programmer("Pera", "Peric", 25, 3, "JavaScript");
let tester = new Tester("Lazar", "Lazic", 26, "QA", 2);

console.log(programmer.getInfo()); // CTRL + left CLICK na getInfo pokazuje iz koje klase vuce getInfo
console.log(tester.getInfo());

class BackendProgrammer extends Programmer {
  constructor(name, surname, age, experience, language) {
    super(name, surname, age, experience, language);
  }
}

let bEProgrammer = new BackendProgrammer("Mika", "Mikic", 30, 5, "C#");
console.log(bEProgrammer.getInfo());

// -------------------------------------------------------------------------------------------------------------
