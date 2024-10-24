// "use strict";

const { sort } = require("d3-array");

// -----------------------------------------------------------------------------------------------------------------
// TASK 1.
// Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as
// A, E, I, O, and U.

// Prvi nacin sa .icludes() metodom:

// let str = "Aeiouqw";

// function countVowels(ocekivaniStr) {
//   let result = "";
//   let vowels = "AEIOUaeiou";

//   for (let i = 0; i < ocekivaniStr.length; i++) {
//     if (vowels.includes(ocekivaniStr[i])) {
//       result += ocekivaniStr[i];
//     }
//   }
//   return result.length; // Vraca broj samoglasnika
// }

// console.log(countVowels(str));

// -----------------------------------------------------------------------------------------------------------------
// Drugi nacin bez .includes() metode (dve petlje):

// let str = "Aeiouqw";

// function countVowels(ocekivaniStr) {
//   let count = 0;
//   let vowels = "AEIOUaeiou";
//   for (let i = 0; i < ocekivaniStr.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (ocekivaniStr[i] === vowels[j]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }

// console.log(countVowels(str));
// -----------------------------------------------------------------------------------------------------------------
// TASK 2.
// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] --> [‘a’,1,’b’,2,’c’,3]

// let arr1 = ["a", "b", "c"];
// let arr2 = [1, 2, 3];

// function combinedArrays(input1, input2) {
//   let combined = [];
//   for (let i = 0; i < input1.length; i++) {
//     combined[combined.length] = input1[i]; // pushuje jedan
//     combined[combined.length] = input2[i]; // pa drugi naizmenicno kad god prodje kroz petlju
//   }
//   return combined;
// }

// console.log(combinedArrays(arr1, arr2));

// -----------------------------------------------------------------------------------------------------------------
// TASK 3.
// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

// let array = [1, 2, 3, 4, 5, 6];

// function rotateElements(arr, k) {
//   //   k = k % arr.length;
//   return arr.slice(k).concat(arr.slice(0, k));
// }

// console.log(rotateElements(array, 2));
// -----------------------------------------------------------------------------------------------------------------
// Drugi nacin:

// function rotiranjeElemenata(niz, k) {
//   let prazanNiz = [];
//   for (let i = k; i < niz.length; i++) {
//     prazanNiz[prazanNiz.length] = niz[i];
//   }
//   for (let i = 0; i < k; i++) {
//     prazanNiz[prazanNiz.length] = niz[i];
//   }
//   return prazanNiz;
// }

// console.log(rotiranjeElemenata([1, 2, 3, 4, 5, 6], 2));
// -----------------------------------------------------------------------------------------------------------------
// TASK 4.
// Write a function that takes a number and returns array of its digits.

// let myInt = 123;

// // Function to convert a string to a number
// function myFunc(num) {
//   return Number(num);
// }

// // Convert the integer to an array of its digits
// let intArr = Array.from(String(myInt), myFunc);

// // Print the result array
// console.log(intArr);
// Pokusaj, nije zavrseno
// let broj = 123;

// function arrOfDigits(ocekivaniBroj) {
//   let nizBrojeva = [];
//   for (let i = 0; i < ocekivaniBroj.length; i++) {
//     nizBrojeva += nizBrojeva.push(ocekivaniBroj);
//   }
//   return nizBrojeva;
// }

// console.log(arrOfDigits(broj));
// -----------------------------------------------------------------------------------------------------------------
// TASK 5.
// Write a program that prints a multiplication table for numbers up to 12.

// function multiplicationTable(n) {
//   var table = "";
//   for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= n; j++) {
//       table += `${1} x ${i} = ${1 * i}\n`;
//     }
//   }
//   return table;
// }
// console.log(multiplicationTable(12));
// -----------------------------------------------------------------------------------------------------------------
// TASK 6.
// Write a function to input temperature in Centigrade and convert to Fahrenheit.

// function toFahrenheit(a) {
//   fahrenheit = "";
//   fahrenheit = a * (9 / 5) + 32;
//   return fahrenheit;
// }
// console.log(toFahrenheit(30));

// -----------------------------------------------------------------------------------------------------------------
// TASK 7.
// Write a function to find the maximum element in array of numbers.
// Filter out all non-number elements.

// let array = [1, 5, 2, 3, Infinity, "m"];

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max && isFinite(arr[i])) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(array));

// -----------------------------------------------------------------------------------------------------------------
// TASK 8.
// Write a function to find the maximum and minimum elements. Function returns an array.

// function findMaxAndMin(array) {
//   var max = array[0];
//   var min = array[0];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     if (array[i < min]) {
//       min = array[i];
//     }
//   }
//   return [max, min];
// }
// console.log(findMaxAndMin([1, 2, 3, -2, 7]));
// -----------------------------------------------------------------------------------------------------------------
// TASK 9.
// Write a function to find the median element of array.
// MEDIAN - prvo sortiraj niz.
// Kada je neparan niz onda je to srednji clan a kada je paran onda su to dva sredisnja elementa / 2 (podeljeno sa 2).

// let array = [3, 2, 4, 1, 5];

// function medianElement(arr) {
//   var newArr = arr.sort((a, b) => a - b);

//   let mid = Math.floor(newArr.length / 2);
//   let beforeMid = Math.floor(newArr.length / 2) - 1;
//   if (newArr.length % 2 !== 0) {
//     return newArr[mid];
//   } else {
//     return (newArr[mid] + newArr[beforeMid]) / 2;
//   }
// }

// console.log(medianElement(array));

// -----------------------------------------------------------------------------------------------------------------
// TASK 10.
// Write a function to find the element that occurs most frequently.

// let niz = [1, 2, 8, 2, 3, 4, 5, 2];

// function findMostFrequent(array) {
//   let sorted = array.sort((a, b) => a - b);
//   let mostFrequentElement = sorted[0];
//   let currentElement = sorted[0];
//   let currentCounter = 1;
//   let mostFrequentCounter = 1;

//   for (let i = 1; i < sorted.length; i++) {
//     if (sorted[i] === currentElement) {
//       currentCounter++;
//     } else {
//       currentElement = sorted[i];
//       currentCounter = 1;
//     }

//     if (currentCounter > mostFrequentCounter) {
//       mostFrequentCounter = currentCounter;
//       mostFrequentElement = currentElement;
//     }
//   }
//   return mostFrequentElement;
// }

// console.log(findMostFrequent(niz));
// -----------------------------------------------------------------------------------------------------------------
// TASK 11.
// Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

// function findFirstMidLast(array) {
//   for (let i = 0; i < array.length; i++) {}
// }
