"use strict";

// let a;
// console.log(a);
// // let a = 5;

// if(1){
//     let a = 5;
//     console.log(a)
// }

// function provera() {
//     return a
// }

// provera()
// console.log(a)

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

// try {
//   console.log(i);
// } catch (error) {
//   console.log("ne mozes da pozoves i van block scope-a");
// }

// const b = 7;
// // b = 6;
// // console.log(b)

// let niz = [1, 2, 3];
// Object.freeze(niz);

// // niz.push(4)
// console.log(niz);

// let ime = "martin";
// let prezime = "potkonjak";

// var celoIme = `${ime} ${prezime}`;
// // celoIme = ime + " " + prezime

// ime += celoIme;
// ime += `ahsdhasbdhba`;
// console.log(ime);
// console.log("martin" + " " + "potkonjak"); // concatenation

// // const f = () => console.log(1)

// let fruit = "apple";

// const obj = {
//   name: "voce",
//   number: 8,
//   // fruit: "apple", // ovako smo do sada
//   fruit,
//   // multiply: function(n){
//   //     return this.number * n;
//   // }, // ovako smo do sada
//   times(n) {
//     return this.number * n;
//   },
// };
// // console.log(obj.multiply(2))

// console.log(Math.round(Math.random() * 90) + 10);
// var a = 5;
// console.log(a.toInteger(3));
// //---------------------------------------------------------------------------------------
// // Destructuring:

// const sandwich = {
//   bread: "Italian",
//   meat: "Tuna",
//   cheese: "Swiss",
// };

// const { bread, meat } = sandwich;
// // isto sto i:
// // const bread = sandwich.bread;
// // const meat = sandwich.meat;
// const test = { ...sandwich };
// //-------------------------------------------------------------------------------
// // Destructuring:
// const companies = ["Apple", "Google", "Microsoft"];
// const [firstCompany, secondCompany] = companies;
// console.log(firstCompany);

// //-------------------------------------------------------------------------------
// const regularPerson = {
//   name: "John",
//   surname: "Snow",
// };

// function showName({ name }) {
//   console.log(name);
// }

// showName(regularPerson);
// //-------------------------------------------------------------------------------
// const [, , lastCompany] = companies;
// console.log(lastCompany);

// const numberArray = [1, 2, 3, 4];
// function iterate(element) {}
// numberArray.forEach((element) => {
//   console.log(element);
// });

// for (var i = 0; i < numberArray.length; i++) {
//   var element = numberArray[i];
// }

// const testFunction = (element) => console.log(element);
// const peaks = ["Tallac", "Ralston", "Rose"];
// const canyons = ["Ward", "Blackwood"];
// const joinedArray = [...peaks, ...canyons];
// // console.log(joinedArray);

// const [first, second, ...rest] = joinedArray;
// console.log(first);
// console.log(second);
// console.log(rest);

// const morning = {
//   breakfast: "Ham and eggs",
//   lunch: "Burger",
// };

// const dinner = "Fish";

// const meals = {
//   ...morning,
//   dinner,
// };

// console.log(meals);
// ------------------------------------------------------------------------------------
// 1. TASK:
//  Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ["hello", "there", "ES", 6]
// Output: ["Hello", "There", "ES"]

// const niz = ["hello", "there", "ES", 6];

// const capitalizeFirstLetter = (str) => {
//   niz.forEach((str) => {
//     str[0].toUpperCase();
// });
// };
// console.log(capitalizeFirstLetter(niz));
//--------------------------------------------------------------------------------------
// resenje sa destructuringom:
// const niz = ["hello", "there", "ES", 6];

// const capitalizeFirstLetter = (arr) => {
//   return arr.map((input) => {
//     if (typeof input === "string") {
//       const [first, ...rest] = input;
//       return first.toUpperCase() + rest.join("");
//     }
//     return input; // Ako nije string ili je prazan string, vracamo ga nepromenjenog
//   });
// };

// console.log(capitalizeFirstLetter(niz));
//--------------------------------------------------------------------------------------
// resenje sa slice metodom, bez destructuring-a:

// const niz = ["hello", "there", "ES", 6];

// const capitalizeFirstLetter = (arr) => {
//   return arr.map((input) => {
//     if (typeof input === "string") {
//       return input[0].toUpperCase() + input.slice(1);
//     }
//     return input; // Ako nije string ili je prazan string, vracamo ga nepromenjenog
//   });
// };

// console.log(capitalizeFirstLetter(niz));
//--------------------------------------------------------------------------------------
// TASK 2.
// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

// const array = [
//   { name: "Banana", price: 120 },
//   { name: "Orange", price: 100 },
// ];

// function calculateSaleTax(arr, tax) {
//   return array.map((inp) => {
//     const taxRate = inp.price * (tax / 100); // porez na osnovu cene svakog proizvoda
//     return { ...inp, priceWithTax: inp.price + taxRate, taxOnly: taxRate }; // na osnovnu cenu koja je prosledjena dodajemo cenu sa porezom
//   });
// }
// console.log(calculateSaleTax(array, 20)); //Pozivamo funkciju sa porezom od 20%
//-------------------------------------------------------------------------------------------
// TASK 3.
// Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

// const array = [4, 6, 11, -9, 2.1]

// function increaseElement (arr, el = 1) {
//     return array.map((inp) => {
//         return inp + el;
//     })
// }
// console.log(increaseElement(array, 2));
//-------------------------------------------------------------------------------------------
// TASK 4.
// Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]
// uradjeno kroz filter metodu:

// const filterEven = (arr) => {
//   return arr.filter((num) => num % 2 === 0); // Vraća samo parne brojeve
// };

// console.log(filterEven([6, 11, 9, 0, 3])); // [6, 0]

//-------------------------------------------------------------------------------------------
// uradjeno kroz forEach:

const array = [6, 11, 9, 0, 3];

const filterEven = (arr) => {
  let filtered = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      filtered.push(num);
    }
  });
  return filtered;
};

console.log(filterEven(array));
