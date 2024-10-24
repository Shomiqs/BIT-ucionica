"use strict";

// TASK 1.
// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

// (function (arr) {
//   let first = arr[0];
//   let last = arr[arr.length - 1];

//   arr[0] = last;
//   arr[arr.length - 1] = first;

//   console.log(arr);
// })([4, 5, 11, 9]);
// ----------------------------------------------------------------------------------------------------------------
// TASK 2.
// Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

// let a = (function (a, b) {
//   return a * b;
// })(4, 5);
// console.log(a);
// ----------------------------------------------------------------------------------------------------------------
// TASK 3.
// Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
// Pokusaj: 1. (kroz petlju bez metoda)
// let a = (function (e) {
//   for (let i = 0; i < e.length; i++) {
//     console.log(e);
//     let numberOfMs = 0;
//     let mS = "mM";
//     if (e === mS[i]) {
//       e = "*";
//       numberOfMs++;
//     } else {
//       continue;
//     }
//   }
// })("prograMming");

// console.log(a);
// Pokusaj 2:

// (function (input) {
//   let malaSlova = input.toLowerCase();
//   let result = malaSlova.replace(/m/g, "*");
//   console.log(result);
// })("prograMming");
// ----------------------------------------------------------------------------------------------------------------
// TASK 4.
// Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

// (function (input) {
//   let malaSlova = input.toLowerCase();
//   let result = malaSlova.replace(/ /g, ".");
//   result += "@gmail.com";
//   console.log(result);
// })("pera peric");
// ----------------------------------------------------------------------------------------------------------------
// TASK 5.
// Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

// Obicna funkcija:
// function calculateDecimal(a) {
//   function calc(b) {
//     return parseInt(b, 8);
//   }
//   return calc(a);
// }
// console.log(calculateDecimal(34));

// Samopozivajuca funkcija: sa varijablom
// let octalToDecimal = (function (a) {
//   function calcDecimal(b) {
//     let decimal = parseInt(b, 8);
//     return decimal;
//   }
//   return calcDecimal(a);
// })(34);
// console.log(octalToDecimal);

// Samopozivajuca funkcija: bez varijable, samo sa returnom
// (function (a) {
//   function calc(b) {
//     return parseInt(b, 8);
//   }
//   console.log(calc(a));
// })(34);

// ----------------------------------------------------------------------------------------------------------------
// TASK 7.
// Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

// let niz = [2, 8, 11, 4, 9, 3];

// function isOdd(x) {
//   return x % 2 !== 0;
// }

// function filterOdd(array, f) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (f(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
// console.log(filterOdd(niz, isOdd));

// console.log(niz.filter(isOdd)); // ovo gore sve je ova built in metoda skraceno i radi isto
// ----------------------------------------------------------------------------------------------------------------
// TASK 6.
// Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

// function successCallback() {
//   return "Your passowrd is cool!";
// }

// function errorCallback() {
//   return "Your password is invalid!";
// }

// let checkPassword = function (pass, success, error) {
//   if (pass.length < 7) {
//     return error();
//   }
//   let numOfNumbers = 0; // ovo nam ne treba
//   for (let i = 0; i < pass.length; i++) {
//     if (pass[i] * 1) {
//       //moze i --> if (parseInt(pass[i]))
//       numOfNumbers++; //dovoljno je return
//       return success();
//     }
//   }
//   return error();
// };
// console.log(checkPassword("martin123", successCallback, errorCallback));
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ********* PRACTICALS - S.O.S - Functions - Self invoking and callback *********
// Task 1:
// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

// function containsDigit(arr) {
//     if()
// }

// ----------------------------------------------------------------------------------------------------------------
// Task 3:
// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

// function insertString(str, pos, char) {
//   if (str.length < 1 || pos > str.length) {
//     return "Invalid position!";
//   }
//   return str.slice(0, pos - 1) + char + str.slice(pos - 1);
// }
// console.log(insertString("Goo morning", 4, "d"));
// ----------------------------------------------------------------------------------------------------------------
// Task 4:
// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

// function deleteString(str, pos) {
//   if (str.length < 1 || pos < 1 || pos > str.length) {
//     return "Invalid String";
//   }
//   return str.slice(0, pos - 1) + str.slice(pos);
// }
// console.log(deleteString("Goodd morning", 3));
// POPRAVI !!!!!!!!
// ----------------------------------------------------------------------------------------------------------------
// POPRAVI!!!!!!!!!
// function deleteString(str, pos) {
//   if (str.length < 1 || pos < 1 || pos > str.length) {
//     return "Invalid String";
//   }

//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i !== pos - 1) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(deleteString("Goodd morning", 3));
