"use strict";

// Week 4. day 1. Constructors exercise: Isti zadaci kao iz objekta samo primeniti konstruktore.
//  TASK 1.
// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
// "product": "Milk",
// "quantity": 1,
// "price": 1.50
// }
// Uradjen bez konstruktora:

// let groceryList = [
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Bread", quantity: 2, price: 2.0 },
//   { product: "Eggs", quantity: 1, price: 3.0 },
// ];

// function calculateTotalPrice(groceries) {
//   let total = 0;
//   for (let i = 0; i < groceries.length; i++) {
//     total += groceries[i].price * groceries[i].quantity; // za slucaj da ima vise nekog proizvoda * groceries[i].quantity
//   }
//   return total;
// }

// console.log(calculateTotalPrice(groceryList));

// -------------------------------------------------------------------------------------------------------------------------------------------
// Uradjeno sa konstruktor funkcijom:

// function Product(product, quantity, price) {
//   this.product = product;
//   this.quantity = quantity;
//   this.price = price;
// }

// let groceryList = [
//   new Product("Milk", 1, 1.5),
//   new Product("Bread", 2, 2.0),
//   new Product("Eggs", 1, 3.0),
// ];

// function calculateTotalPrice(groceries) {
//   let total = 0;
//   for (let i = 0; i < groceries.length; i++) {
//     total += groceries[i].price * groceries[i].quantity;
//   }
//   return total;
// }

// console.log(calculateTotalPrice(groceryList));

// TASK 2.

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns "The most expensive
// one is the {name of jewelry piece}";.
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},…])
// - The most expensive one is the diamond Ring.

// let jewelryPiece = [
//   { name: "DiamondEarings", price: 980 },
//   { name: "GoldWatch", price: 250 },
//   { name: "DiamondRing", price: 999 },
// ];

// function findMostExpensive(jewelry) {
//   let highestPrice;
//   let theMostExpensive = "The most expensive one is:";

//   for (let i = 0; i < jewelry.length; i++) {
//     if (!highestPrice || jewelry[i].price > highestPrice.price) {
//       highestPrice = jewelry[i];
//     }
//   }
//   return `${theMostExpensive} ${highestPrice.name} with price of - ${highestPrice.price}`;
// }
// console.log(findMostExpensive(jewelryPiece));
// -------------------------------------------------------------------------------------------------------------------------------------------

// function Jewel(name, price) {
//   this.name = name;
//   this.price = price;
// }

// let jewelryList = [
//   new Jewel("Diamond Earings", 1.5),
//   new Jewel("Gold Watch", 2),
//   new Jewel("Diamond Ring", 3),
// ];

// function findMostExpensive(jewelry) {
//   let highestPrice;
//   let theMostExpensive = "The most expensive one is:";

//   for (let i = 0; i < jewelry.length; i++) {
//     if (!highestPrice || jewelry[i].price > highestPrice.price) {
//       highestPrice = jewelry[i];
//     }
//   }
//   return `${theMostExpensive} ${highestPrice.name} with price of - ${highestPrice.price}`;
// }
// console.log(findMostExpensive(jewelryList));
// -------------------------------------------------------------------------------------------------------------------------------------------
// Sličan zadatak 1:
// Napišite konstruktorsku funkciju Book koja će imati svojstva title, author, price i quantity.
// Zatim kreirajte niz od najmanje tri knjige koristeći ovu funkciju.
// Napišite funkciju calculateTotalBooksValue koja će izračunati ukupnu vrednost svih knjiga u nizu.

// function Book(title, author, price, quantity) {
//   this.title = title;
//   this.author = author;
//   this.price = price;
//   this.quantity = quantity;
// }

// let books = [
//   new Book("1984", "George Orwell", 15, 500),
//   new Book("Pride and Prejudice", "Jane Austen", 12.5, 700),
//   new Book("The Great Gatsby", "F. Scott Fitzgerald", 10.75, 850),
// ];

// // console.log(books);

// function calculateTotalBooksValue(input) {
//   let totalPrice = 0;
//   for (let i = 0; i < input.length; i++) {
//     totalPrice += input[i].price;
//   }
//   return totalPrice;
// }
// console.log(calculateTotalBooksValue(books));

// -------------------------------------------------------------------------------------------------------------------------------------------
// Slican zadatak 2.
// Kreirajte konstruktorsku funkciju Car koja će imati svojstva make, model, year i price.
// Napravite niz sa nekoliko automobila koristeći ovu funkciju.
// Napišite funkciju calculateAverageCarPrice koja će izračunati prosečnu cenu automobila u nizu.

// function Car(model, year, price) {
//   this.model = model;
//   this.year = year;
//   this.price = price;
// }

// let cars = [
//   new Car("Audi", 2015, 12700),
//   new Car("Mercedes", 2021, 65000),
//   new Car("Fiat", 2008, 4500),
// ];

// function calculateAverageCarPrice(input) {
//   let averagePrice = 0;
//   let totalPrice = 0;
//   for (let i = 0; i < input.length; i++) {
//     totalPrice += input[i].price;
//     averagePrice = totalPrice / input.length;
//   }
//   return averagePrice;
// }

// console.log(calculateAverageCarPrice(cars));

// -------------------------------------------------------------------------------------------------------------------------------------------
// Zadatak 3
// Definišite konstruktorsku funkciju Student koja će imati svojstva name, age, grade i isEnrolled.
// Kreirajte niz od nekoliko studenata koristeći ovu funkciju.
// Napišite funkciju countEnrolledStudents koja će prebrojati i vratiti broj studenata koji su upisani (isEnrolled je true).

// function Student(name, age, grade, isEnrolled) {
//   this.name = name;
//   this.age = age;
//   this.grade = grade;
//   this.isEnrolled = isEnrolled;
// }

// let studenti = [
//   new Student("Milan", 24, 5, true),
//   new Student("Zoran", 33, 3, false),
//   new Student("Miki", 35, 5, true),
//   new Student("Sanja", 27, 4, true),
// ];

// function countEnrolledStudents(input) {
//   let numOfStudents = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].isEnrolled) {
//       numOfStudents++;
//     }
//   }
//   return numOfStudents;
// }

// console.log(countEnrolledStudents(studenti));
// -------------------------------------------------------------------------------------------------------------------------------------------
// Konstruktorska funkcija - kalkulator vezbanje sa Martinom:

function Calculator(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.add = function () {
    return this.x + this.y + this.z;
  };
  this.subtract = function () {
    return Math.abs(this.x - this.y - this.z); // pozitivna vrednost
  };
  this.multiply = function () {
    return this.x * this.y * this.z;
  };
  this.divide = function () {
    if (this.x && this.y && this.z) {
      return this.x / this.y / this.z;
    }
    return "Division with 0 is not possible!";
  };
}

let calculator = new Calculator(1, 2, 3);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
