"use strict";

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

let x = true;
console.log(x);
console.log(!x);
console.log(!!x);
