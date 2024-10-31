"use strict";

const { reduce } = require("d3-array");

// ********** Exercises_Built in objects **********

// TASK 1.
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

// Nestorovo resenje: (yikes):

// let array = [2, 4, 7, 11, -2, 1];

// let duplicateElement = function (input) {
//   let duplicated = [];
//   for (let i = 0; i < input.length; i++) {
//     let element = input[i];
//     duplicated[duplicated.length] = element;
//     duplicated.push(element);
//   }
//   return duplicated;
// };
// console.log(duplicateElement(array));
// -------------------------------------------------------------------------------------------------------
// Resenje kroz forEach:

// let array = [2, 4, 7, 11, -2, 1];
// let array2 = [];

// array.forEach(function (input) {
//   array2.push(input);
//   array2.push(input);
// });

// console.log(array2);

// -------------------------------------------------------------------------------------------------------
// Radi isto na neku novu foru: ECMA script 19
// let a = [1, 2, 3, 4];
// console.log(a.flatMap(i => [i,i]));
// -------------------------------------------------------------------------------------------------------
// TASK 2.
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// nacin 1:

// let array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// let removeDuplicates = function (input) {
//   let newArray = input.sort(function (a, b) {
//       return a - b;
//     }).filter(function (value, index, self) {
//       return self.indexOf(value) === index; // Keep only unique values
//     });
//   return newArray;
// };
// // probaj bez filter metode.
// let result = removeDuplicates(array);
// console.log(result); // Output: [1, 4, 8, 9, 12, 13] bez duplikata.

// Nacin 2:

// let array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// function removeDuplicates(array) {
//   let newArray = [];

//   array.forEach(function (element) {
//     if (newArray.indexOf(element) === -1) {
//       // <--- Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
//       newArray.push(element); // <---- dodaje element ako vec nije prisutan
//     }
//     newArray.sort(function (a, b) {
//       return a - b;
//     });
//   });
//   return newArray;
// }
// console.log(removeDuplicates(array));

// -------------------------------------------------------------------------------------------------------
// TASK 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// let array = [1, 2, 9, 2, 1];

// function oddNumOfElements(arr) {
//   return arr.length % 2 !== 0;
// }
// console.log(oddNumOfElements(array));

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// let array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

// function countNumOfElements(arr) {
//   let result = [];
//   if (arr.length % 2 !== 0) {
//     let middleIndex = Math.floor(arr.length / 2);

//     for (let i = 0; i < middleIndex; i++) {
//       result.push(arr[i]);
//     }
//   } else {
//     console.log("Error, array has an even number of elements!");
//   }
//   return result;
// }
// console.log(countNumOfElements(array));

// -------------------------------------------------------------------------------------------------------
// TASK 4.
// Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// let array = [1, 4, -2, 11, 8, 1, -2, 3];

// function smallestElementOfArray(arr) {
//   let smallestElement = arr[0];         // Postavi prvi element kao najmanji
//   let lastIndex = 0;                    // Inicijalizuj poslednji indeks

//   for (let i = 1; i < arr.length; i++) {// Počni od drugog elementa
//     if (arr[i] < smallestElement) {// Ako je trenutni element manji od najmanjeg
//       smallestElement = arr[i]; // Ažuriraj najmanji element
//       lastIndex = i; // Ažuriraj poslednji indeks
//     } else if (arr[i] === smallestElement) {// Ako je trenutni element jednak najmanjem
//       lastIndex = i; // Ažuriraj poslednji indeks
//     }
//   }
//   return { value: smallestElement, index: lastIndex }; // Vraća objekat sa najmanjom vrednošću i njenim indeksom
// }
// console.log(smallestElementOfArray(array)); // Ispisuje: { value: -2, index: 6 }

// -------------------------------------------------------------------------------------------------------
// Nacin sa built-in metodama:

// let array = [1, 4, -2, 11, 8, 1, -2, 3];

// function smallestElementOfArray(arr) {
//   let smallestElement = Math.min(...arr);
//   let minLastIndex = arr.lastIndexOf(smallestElement);
//   return { smallestElement, minLastIndex };
// }

// console.log(smallestElementOfArray(array));

// -------------------------------------------------------------------------------------------------------
// TASK 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// stari nacin, samo sa push metodom:

// function findSmallerThanGivenElement(arr, givenEl) {
//   let smallest = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < givenEl) {
//       smallest.push(arr[i]);
//     }
//   }
//   return smallest;
// }
// console.log(findSmallerThanGivenElement([2, 3, 8, -2, 11, 4], 6));

// -------------------------------------------------------------------------------------------------------
// bez for petlje sa filter metodom:

// function findSmallerThanGivenElement(arr, givenEl) {
//   return arr.filter(function (element) {
//     return element < givenEl; // Vraća true za elemente manje od zadatog
//   });
// }

// console.log(findSmallerThanGivenElement([2, 3, 8, -2, 11, 4], 6));
// -------------------------------------------------------------------------------------------------------

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: ["JavaScript", "Programming", "fun", "product"]
// Output: ["Programming", "product"]

// let array = ["JavaScript", "Programming", "fun", "product"];

// function findProInElements(arr) {
//   return arr.filter(function (element) { // filtrira elemente niza, umesto petlje
//     return element.toLowerCase().includes("pro"); // Proverava da li element sadrzi "pro"
//   });
// }

// console.log(findProInElements(array));

// -------------------------------------------------------------------------------------------------------
// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

// let array = ["JavaScript", "Programming", "fun", "product"];

// function findProInElements(arr) {
//   return arr.filter(function (element) {
//     return element.toLowerCase().includes("pro"); // Proverava da li element sadrzi "pro"
//   });
// }

// function someFunc(arr, callbck) {
//   return callbck(arr); // Pozov callback funkcije sa prosledjenim nizom
// }

// console.log(someFunc(array, findProInElements));
// -------------------------------------------------------------------------------------------------------
// Task 6.

// // a. Write a list (array) of products you usually buy in the supermarket. Write a price
// // and name for each product. For example,
// // [
// // {name: ‘apples’, price: 100},
// // {name: ‘milk’, price: 80},
// // {name:’bananas’, price: 150}
// // ]

// let shoppingList = [
//   { name: "apples", price: 100 },
//   { name: "milk", price: 80 },
//   { name: "bananas", price: 150 },
// ];

// // -------------------------------------------------------------------------------------------------------
// // b. Write a function that calculates the total price of your shopping list.

// function calculateTotalPrice(list) {
//   return list.reduce(function (total, item) {
//     return total + item.price;
//   }, 0); // Nula na kraju reduce metode predstavlja inicijalnu vrednost akumuliranog rezultata.
//   // U ovom slučaju, kada se reduce funkcija pokrene, total (akumulirani rezultat) počinje od nule.
//   // Total predstavlja cenu svih item-a
// }

// let totalPrice = calculateTotalPrice(shoppingList);
// console.log("Total price:", totalPrice);

// // -------------------------------------------------------------------------------------------------------
// // c. Write a function that calculates the average product price of your shopping list.
// // Print this value with the precision of three decimals.

// function calculateAveragePrice(arr) {
//   // let avg = arr.reduce(function (average, item) {
//   //   return average + item.price;
//   // }, 0);
//   // return avg / arr.length;
//   return calculateTotalPrice(arr) / arr.length; // (Mogu ovde da pozovem prethodno napisanu funkciju i iskoristim da izracuna total price i samo podelim sa arr.length;)
// }

// let averagePrice = calculateAveragePrice(shoppingList);
// console.log("Average price:", averagePrice);

// // -------------------------------------------------------------------------------------------------------
// // d. Write a function that prints out the name of the most expensive product on your
// // shopping list. Write the name in uppercase.

// function mostExpensiveProduct(array) {
//   return array.reduce(function (max, item) {
//     if (item.price > max.price) {
//       return item;
//     } else {
//       return max;
//     }
//   }).name;
// }

// let mostExpensive = mostExpensiveProduct(shoppingList);
// console.log("Most exprensive product:", mostExpensive);

// -------------------------------------------------------------------------------------------------------
// TASK 7.
// a. Write a function that checks if a given string is written in all capitals.
// let recenica = "IS EVERYTHING IN CAPITAL";

// function checkIfCapital(str) {
//   let toCap = str.toUpperCase();
//   return str === toCap ? "It is." : "It is not.";
// }
// console.log(checkIfCapital(recenica));
// -------------------------------------------------------------------------------------------------------
// a. Drugi nacin:

// let recenica = "IS EVERYTHING IN CAPITAL";

// function checkIfCapital(str) {
//   let toCap = str.toUpperCase();
//   let result = str.localeCompare(toCap);
//   return result === 0 ? "It is." : "It is not.";
// }
// console.log(checkIfCapital(recenica));
// -------------------------------------------------------------------------------------------------------
// a. Treci nacin:

// let recenica = "IS EVERYTHING IN CAPITAL";

// function checkCapital(strr) {
//   return strr === strr.toUpperCase();
// }
// console.log(checkCapital(recenica));
// -------------------------------------------------------------------------------------------------------
// b. Write a function that checks if a given string contains any digits.

// let string = "IS EVERYTHING IN CAPITAL";

// function containsDigits(arr) {
//   return /[0-9]/.test(arr); //1.nacin = .test() Returns a Boolean value that indicates whether or not a pattern exists in a searched string.(poredi samo sa RegExp zapisom)
//   // return /\d/.test(arr); //drugi nacin
// }
// console.log(containsDigits(string));
// -------------------------------------------------------------------------------------------------------
// c. Write a function that checks if a given string is a valid hexadecimal color.

function isHexadecimal(str) {
  return /^[0-9a-fA-F]+$/.test(str); // ^[0-9a-fA-F]+$ Regex izraz
}

let hexString = "1A3F";
let nonHexString = "1G2Z";

console.log(isHexadecimal(hexString));
console.log(isHexadecimal(nonHexString));

// -------------------------------------------------------------------------------------------------------

// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// -------------------------------------------------------------------------------------------------------

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).
