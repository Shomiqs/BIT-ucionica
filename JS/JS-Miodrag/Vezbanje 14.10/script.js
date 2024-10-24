// *** Task 1 *** // Write a program that calculates the maximum of two given numbers.

const { element } = require("prop-types");

// function maxOfTwo(a, b) {
//   if (a > b) {
//     return a;
//   } else return b;
// }

// console.log(maxOfTwo(8, 6));

// -------------------------------------------------------------------------------------------------------------
// *** Task 2 *** // Write a program that checks if a given number is odd.

// function isEven(a) {
//   if (a % 2 == 0) return "Number is even.";
//   else return "Number is odd.";
// }

// console.log(isEven(2));

// Drugi nacin
// function checkIfNumberIsOdd(a) {
//   return a % 2 !== 0;
// }
// console.log(checkIfNumberIsOdd(55));
// -------------------------------------------------------------------------------------------------------------
// *** Task 3 *** // Write a program that checks if a given number is a three digit long number.

/*
Probaj da konvertujes u string pa onda, nesto ovako:

function isThreeDigitNumber(num) {

   // Convert number to string

   var numStr = num.toString();

function isThreeDigit(a) {
  if (a.length === 3) {
    return true;
  } else {
    return false;
  }
}

console.log(isThreeDigit(123));
*/
//Drugi nacin
// function isThreeDigit(a) {
//   if (a >= 100 && a < 1000) {
//     return true;
//   } else return false;
// }

// console.log(isThreeDigit(12));

// -------------------------------------------------------------------------------------------------------------
// *** Task 4 *** // Write a program that calculates an arithmetic mean of four numbers.

// function average(a, b, c, d) {
//   var sum = (a + b + c + d) / 4;
//   return sum;
// }
// console.log(average(1, 2, 3, 4));

// -------------------------------------------------------------------------------------------------------------
// *** Task 5 *** //
// Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
//  Bez funkcije
// let num = 5;
// let pattern = ""; //pattern string

// if (num > 1) {
//   //no star pattern for 0 or negative numbers.
//   for (let i = 1; i <= num; i++) {
//     //first 'for loop' for horizontal lines
//     for (let j = 1; j <= num; j++) {
//       //second 'for loop' to add * to pattern string
//       if (i == 1 || i == num || j == 1 || j == num) {
//         //condition to make pattern hollow
//         pattern += "* "; //adding outer * to pattern string
//       } else {
//         pattern += "  "; //adding spaces between * to pattern string to make it hollow
//       }
//     }
//     pattern += "\n"; //new line after row completion
//   }
//   console.log(pattern); //printing star to console
// } else {
//   pattern = "Number must be greater than 1 to print star pattern.";
// }
// Sa funkcijom

// function squarePattern(num) {
//   let pattern = ""; // pattern string

//   if (num > 1) {
//     // no star pattern for 0 or negative numbers
//     for (let i = 1; i <= num; i++) {
//       // first 'for loop' for horizontal lines
//       for (let j = 1; j <= num; j++) {
//         // second 'for loop' to add * to pattern string
//         if (i == 1 || i == num || j == 1 || j == num) {
//           // condition to make pattern hollow
//           pattern += "* "; // adding outer * to pattern string
//         } else {
//           pattern += "  "; // adding spaces between * to pattern string to make it hollow
//         }
//       }
//       pattern += "\n"; // new line after row completion
//     }
//     console.log(pattern); // printing star to console
//   } else {
//     pattern = "Number must be greater than 1 to print star pattern.";
//     console.log(pattern); // print the error message
//   }
// }

// // Example usage:
// squarePattern(3);

// -------------------------------------------------------------------------------------------------------------
// *** Task 6 *** //
// Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

// *** Task 7 *** // Write a program that calculates a number of digits of a given number.
// let arr = [1, 12, 123];

// function numOfDigits(a) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= 0 && i < 10) {
//       console.log("Input has 1 digit");
//     } else console.log("Input has 2 digits");
//   }
//   return a;
// }

// console.log(numOfDigits(arr));

// -------------------------------------------------------------------------------------------------------------

// 3. Zadatak

// function is3Digit(x) {
//   var stringNumber = x + "";
//   // var stringNumber = x.toString()
//   if (stringNumber.length === 3) {
//     return true;
//   }
//   return false;
// }

// console.log(is3Digit(12));

// Drugi nacina

// function is3DigitNumber(x) {
//   if ((x > 99 && x < 1000) || (x < -99 && x > -1000)) {
//     return true;
//   }
//   return false;
// }

// console.log(is3DigitNumber(-999));
// -------------------------------------------------------------------------------------------------------------
// 4. Zadatak

// function calculateMean() {
//   var mean;
//   var zbir = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     var element = arguments[i];
//     zbir += element;
//   }
//   mean = zbir / arguments.length;
//   return mean;
// }

// console.log(calculateMean(1, 2, 3, 4, 5));

// -------------------------------------------------------------------------------------------------------------
// 7. Zadatak

// function calculateNumDigits(x) {
//   var stringNumber = x + "";
//   return stringNumber.length;
//   // return (x + "").length;
// }

// -------------------------------------------------------------------------------------------------------------
// 8. Zadatak

// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;

// function findOccurence(array, broj) {
//   var brojac = 0;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (element === broj) {
//       brojac++;
//     }
//   }
//   return brojac;
// }

// console.log(findOccurence(a, e));

// -------------------------------------------------------------------------------------------------------------
// 9. Zadatak

// function sumOfOdd(array) {
//   var suma = 0;
//   for (var i = 0; i < array.length; i++) {
//     var element = array[i];
//     if (checkIfNumberIsOdd(element)) {
//       //pozivamo funkciju koju smo vec pisali gore
//       suma += element;
//     }
//   }
//   // return suma;
//   console.log(suma);
// }

// sumOfOdd(1, 2, 4, 6, 8, 3);

// 10. Zadatak
// -------------------------------------------------------------------------------------------------------------

// function calculateAppereance (str) {
//   var brojac = 0;
//   for(var i = 0; i < str.length; i++) {
//     var element = str[i];
//     if (element.toLowerCase() === "a") {
//       brojac++;
//     }
//   }

//   return brojac;
// }

// -------------------------------------------------------------------------------------------------------------
// 11. Zadatak

// function concatenateString(str, broj) {
//   var konkateniranString = "";
//   for (var i = 0; i < broj; i++) {
//     konkateniranString += str;
//   }
//   return konkateniranString;
// }

// console.log(concatenateString("abc", 2));

// -------------------------------------------------------------------------------------------------------------
// 6. Zadatak

// function printPattern(x, y, z) {
//   var pattern = "";
//   for (var i = 0; i < x; i++) {
//     pattern += "*\t";
//   }
//   pattern += "\n";
//   for (var i = 0; i < y; i++) {
//     pattern += "*\t";
//   }
//   pattern += "\n";
//   for (var i = 0; i < z; i++) {
//     pattern += "*\t";
//   }

//   return pattern;
// }

// console.log(printPattern(5, 3, 7));
// -------------------------------------------------------------------------------------------------------------
// 2. Zadatak
// Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
// -------------------------------------------------------------------------------------------------------------

// var niz = [3, 500, -10, 149, 53, 414, 1, 19];
// var noviNiz = [];

// for (i = 0; i < niz.length; i++) {
//   noviNiz[i] = niz[i] / 2 + 5;
//   if (noviNiz[i] === 0) {
//     noviNiz[i] = 20;
//   }
// }
// console.log(noviNiz);
// -------------------------------------------------------------------------------------------------------------
// 8. Zadatak
// Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: bit
// Output: tib

// var a = "bit";
// var niz = [];
// var reversed = "";

// output - tib
// -------------------------------------------------------------------------------------------------------------

// for (var i = a.length - 1; i >= 0; i--) {
//   niz[niz.length] = a[i];
// }
// console.log(niz);
// -------------------------------------------------------------------------------------------------------------

// for (var i = a.length - 1; i >= 0; i--) {
//   reversed += a[i];
// }

// console.log(reversed);

// -------------------------------------------------------------------------------------------------------------
// Exercise functions 3:
// Task 1:

// function insertString(string, ubaciString, pozicija = 1) {
//   let stringArray = [];
//   let finalString = "";
//   for (let i = 0; i < string.length; i++) {
//     stringArray[i] = string[i];
//   }
//   for (let i = 0; i < stringArray.length; i++) {
//     if (i === pozicija) {
//       finalString += ubaciString;
//     }
//     finalString += stringArray[i];
//   }
//   return finalString;
// }
// console.log(insertString("My random string", "JS ", 3));

// function insertStringAtPosition (originalString, stringToInsert, position) {
//   var newString =
// }
// -------------------------------------------------------------------------------------------------------------
// Task 2:
// Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

// let array = [1, undefined, 2, "3", NaN, Infinity];

// function joinElements() {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] !== undefined &&
//       array[i] !== null &&
//       !Number.isNaN(array[i]) &&
//       array[i] !== Infinity
//     ) {
//       result += array[i];
//     }
//   }
//   return result;
// }

// console.log(joinElements());

// ****** Slican nacin za task 2:

// function joinElements(inputArray) {
//   var newString = "";
//   for (let i = 0; i < inputArray.length; i++) {
//     var element = inputArray[i];
//     if (
//       element === undefined ||
//       element === null ||
//       element !== element ||
//       element === Infinity
//     ) {
//       continue;
//     }
//     newString += element;
//   }
//   return newString;
// }
// console.log(joinElements([1, undefined, 2, "3", NaN, Infinity]));
// -------------------------------------------------------------------------------------------------------------
// Task 3:
// Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]
// ** Moj nacin
// let array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// function filter() {
//   let newArray = [];
//   let index = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (
//       Number.isNaN(array[i]) ||
//       array[i] === 0 ||
//       array[i] === false ||
//       array[i] === "" ||
//       array[i] === undefined ||
//       array[i] === null
//     ) {
//       continue;
//     } else {
//       newArray[index] = array[i];
//       index++;
//     }
//   }
//   return newArray;
// }

// console.log(filter());

// let myArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// *** Bolji nacin: (PROBAJ DA URADIS SA PRAZNIM NIZOM I SAMO SA POZIVOM FUNKCIJE BEZ INFORMACIJA U Console.log)

// function filter(array) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i]) {
//       continue;
//     } else {
//       result += " " + array[i];
//     }
//   }
//   return result;
// }

// console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// ********* Pokusaj1:
// function filter() {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] === NaN &&
//       array[i] === 0 &&
//       array[i] === false &&
//       array[i] === "" &&
//       array[i] === undefined &&
//       array[i] === null
//     ) {
//       continue;
//     } else {
//       newArray += array[i];
//     }
//     return newArray;
//   }
// }

// console.log(filter());
// -------------------------------------------------------------------------------------------------------------
// Task 4:
// Write a function that reverses a number.
// The result must be a number.
// 12345 -> 54321

// let num = 12345;

// function reverse() {
//   let strNum = "" + num;
//   let result = "";
//   // Reverse the string
//   for (let i = strNum.length - 1; i >= 0; i--) {
//     result += strNum[i];
//   }
//   return result * 1;
// }

// console.log(reverse()); // ---> Output 54321

// -------------------------------------------------------------------------------------------------------------
// Task 5:
// Write a function to get the last element of an array. Passing a parameter "n" will return the
// last "n" elements of the array.
// [7, 9, 0, -2] ---> -2
//[7, 9, 0, -2], ---> [0, -2]

// let array = [7, 9, 0, -2];

// function filterLastElements(inputArray, n) {
//   let result = [];
//   for (let i = inputArray.length - 1; i >= 0; i--) {
//     if (i >= n) {
//       result[result.length] = inputArray[i];
//     }
//     // result += array[i];
//     // console.log(result);
//   }
//   return result;
// }
// -------------------------------------------------------------------------------------------------------------
// Task 1: Page 4: Functions

// let array = [5, -4.2, 3, 7];

// function isInArray(array, e) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === e) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isInArray(array, 5));

// Task 5:
// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// function sumOfPositiveNumbers(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (element > 0) {
//       sum += element;
//     }
//   }
//   return sum;
// }

// console.log(sumOfPositiveNumbers([3, 11, -5, -3, 2]));

// -------------------------------------------------------------------------------------------------------------
// Task 6:
// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// function isSymmetric(array) {
//   let result = "Symmetric";
//   let brojIzvrsavanja;
//   if(array.length)
//   for (let i = array.length - 1; i >= 0; i++) {

//   }
// }
// -------------------------------------------------------------------------------------------------------------
// Task 7:
// Define a 10 element array.
// Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them.
// Print it out in the console.

// let niz = ["m", "Anne", "Steve", 12, "Joe", "John", "David", "Mark", true, "A"];

// function spojSlova(array) {
//   let str = "";
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "string") {
//       continue;
//     }
//     let rec = array[i];
//     if (rec.length > 1) {
//       str = str + rec[0] + rec[1];
//     }
//   }
//   return str;
// }

// console.log(spojSlova(niz));
// -------------------------------------------------------------------------------------------------------------
// Task 11: page 5: Exercise_Functions:
// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// function isPalindrome(string) {
//   let str = "";
//   for (let i = 0; i < string.length; i++) {}
// }
// -------------------------------------------------------------------------------------------------------------
// ----- PREDEFINED FUNCTIONS ------
// TASK ***(1)***:
// Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.

// let niz = ["1", "21", undefined, "42", "1e+3", Infinity];

// function toNumbers(array) {
//   let nizNum = [];
//   for (let i = 0; i < array.length; i++) {
//     let num = Number(array[i]);
//     console.log(num);
//     if (!isNaN(num) && isFinite(num)) {
//       nizNum.push(num);
//     }
//   }
//   return nizNum;
// }

// console.log(toNumbers(niz));
// -------------------------------------------------------------------------------------------------------------
// TASK ***(2)***:
// Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Output: “015false-2247”

// var niz = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// function joinIntoString(array) {
//   let string = "";
//   for (let i = 0; i < array.length; i++) {
//     let numString = array[i];
//     if (numString || numString == false) {
//       string += numString;
//     }
//   }
//   return string;
// }

// console.log(joinIntoString(niz));
// -------------------------------------------------------------------------------------------------------------
// TASK ***(3)***:
// Write a program to filter out falsy values from the array.
// Output [15, -22, 47]
// let niz = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// function filterFalsy(array) {
//   let truthy = [];
//   for (let i = 0; i < array.length; i++) {
//     let tru = array[i];
//     if (tru) {
//       truthy.push(tru);
//     }
//   }
//   return truthy;
// }

// console.log(filterFalsy(niz));
// -------------------------------------------------------------------------------------------------------------
// TASK ***(4)***:
// Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
// Output: 3

// let niz = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

// function numberOfInteger(array) {
//   let brIntegera = 0;
//   for (let i = 0; i < array.length; i++) {
//     let int = array[i];
//     if (Number.isInteger(int)) {
//       brIntegera++;
//     }
//   }
//   return brIntegera;
// }

// console.log(numberOfInteger(niz));

// -------------------------------------------------------------------------------------------------------------
// TASK ***(5)***:
// Write a program that calculates a number of float values in the array.
// Input [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
// Output 2

// let niz = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

// function numOfFloat(array) {
//   let float = 0;
//   for (let i = 0; i < array.length; i++) {
//     let vrednostNiza = array[i];
//     // 1. Nacin
//     // let floatValue = parseFloat(vrednostNiza);
//     // let intValue = parseInt(vrednostNiza);
//     // if (floatValue - intValue) {
//     //   float++;
//     // }
//     // 2. Nacin (efikasniji)
//     if (vrednostNiza === +vrednostNiza && vrednostNiza != (vrednostNiza | 0))
//       float++;
//   }
//   return float;
// }
// console.log(numOfFloat(niz));
// // -------------------------------------------------------------------------------------------------------------
// var a = [[1, 2, 3], [4, 5, 6], 8, [9, 10]];
// var array = ["s", "c", "r", "i", "p", "t"];
// array.length = 0;
// console.log(array);
// var x = [1, 8, 9, 9, 2];
// var a = 10;
// var b = 5;
// var result = a || b++;
// let x = 10;
// let y = 5;
// var a = [2, 3, "abc", 11, -7];
// var a = 10;
// var b = 5;
// var result = b++ || a;
// console.log(a, b);
// // -------------------------------------------------------------------------------------------------------------
//  Symetric zadatak: *********************************************************************************************
let a = [2, 4, -2, 7, 5, -2, 4, 2];
let isSimmetric = true;

for (
  let i = 0, j = a.length - 1;
  i < a.length / 2, j > a.length / 2 - 1;
  i++, j--
) {
  if (a[i] !== a[j]) {
    isSimmetric = false;
    break;
  }
}
console.log(isSimmetric);
// // -------------------------------------------------------------------------------------------------------------
