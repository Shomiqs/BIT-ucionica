"use strict";

// Employees and Managers

// Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department

// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value to the given value

// All employees should inherit methods:
// getData which returns the name, surname and salary
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10%
// ------------------------------------------------------------------------------------------

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return `${super.getFullName()}, ${this.salary}`; // Posto Employee nasledjuje Person mozemo pozvati Personovu getFullName metodu sa super.GetFullName();
  }

  getSalary() {
    return `Salary: ${this.salary}`;
  }

  increaseSalary(percentage) {
    let originalSalary = this.salary; // Originalna vrednost
    let increasedSalary = originalSalary * (1 + percentage / 100); // Povecana vrednost za %
    this.salary = Math.ceil(increasedSalary);
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }

  getSpecialization() {
    return `Specialized in: ${this.specialization}`;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }

  getDepartment() {
    return `Department is: ${this.department}`;
  }

  changeDepartment(newDep) {
    this.department = newDep;
  }
}

let employee = new Employee("Pera", "Peric", "Programer", 3000);
let developer = new Developer("Mio", "Iva", "Programer", 5000, "JS");
let manager = new Manager("Mika", "Mikic", "Manager", 2000, "Finance");

// console.log(employee);
console.log(employee.getData()); // CTRL + left CLICK na getInfo pokazuje iz koje klase vuce getInfo
employee.increaseSalary(15); // 15% povecanje plate kroz increaseSalary() metodu koju smo definisali u Employee klasi
console.log(employee.getData());

// console.log(developer);
console.log(developer.getSpecialization());

// console.log(manager);
console.log(manager.getDepartment());
manager.changeDepartment("Accounting");
console.log(manager.getDepartment());
