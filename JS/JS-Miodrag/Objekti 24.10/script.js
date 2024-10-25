"use strict";

// let person = {
//   name: "Miodrag", // property (key: value)
//   surname: "Ivankov",
//   age: 34,
//   height: 186,
//   siblings: ["Miki", "Nemanja", "Ivana", "Irena"],
//   married: false,
//   hobbies: ["paddel", "chess", "snowboarding"],
//   sayName: function () {
//     //get metoda
//     console.log(person.name); //this umesto person
//   },
//   changeName: function (changedName) {
//     // set metoda
//     person.name = changedName;
//   },
// };

// // console.log(person.hobbies);

// // for (let i = 0; i < person.siblings.length; i++) {
// //   console.log(person.siblings[i]);
// // }

// // person.sayName();
// person.changeName("Stefan");
// console.log(person.name);
// ------------------------------------------------------------------------------------------------
// Exercises_Objects Intro:
// TASK 1.
// Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

// let favCoffee = {
//   name: "India",
//   strength: "Medium",
//   flavour: "Bitter",
//   milk: true,
//   sugar: false,
// };
// console.log(favCoffee);

// ------------------------------------------------------------------------------------------------
// TASK 2.

// let favMovie = {
//   title: "Avatar",
//   actor: "Sam Worthington",
//   director: "Bla bla",
//   genre: "Fantasy",
//   popularity: "High",
// };
// console.log(favMovie);

// ------------------------------------------------------------------------------------------------
// TASK 3.

// Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// function createProject(description, language, git, status) {
//   let obj = {};
//   obj.description = description;
//   obj.language = language;
//   obj.git = git;
//   obj.status = status;
//   obj.printGit = function () {
//     console.log(obj.git);
//   };
//   obj.checkLanguage = function () {
//     if (obj.language.toLowerCase() === "javascript" || obj.language === "js") {
//       return true;
//     }
//     return false;
//   };

//   obj.checkStatus = function () {
//     if (obj.status) {
//       return true;
//     }
//     return false;
//   };

//   return obj;
// }

// let project = createProject("neki opis", "js", "htttp://gitneki.com", false);
// project.printGit();

// ------------------------------------------------------------------------------------------------
// TASK 4.
// Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// 1.Add a method that prints out all the ingredients necessary for the meal preparation.
// 2.Add a method that checks if a meal can be prepared in under 15 minutes.
// 3.Add a method that changes the type of cuisine to the given value.
// 4.Add a method that delete a given ingredient from the list of ingredients.

// function culinaryRecipe(
//   name,
//   cuisine,
//   ingredients,
//   complexity,
//   prepTime,
//   prepInstruction
// ) {
//   let obj = {};

//   obj.name = name;
//   obj.cuisine = cuisine;
//   obj.complexity = complexity;
//   obj.ingredients = ingredients;
//   obj.prepTime = prepTime;
//   obj.prepInstruction = prepInstruction;

//   //dodali smo novu metodu van zadatka koja dodaje extra ingredient
//   // ----------------------------------------------------------------
//   obj.addNewIngredient = function (newIng) {
//     if (obj.ingredients.includes("salt")) {
//       console.log("Salt is already added!");
//     } else {
//       obj.ingredients.push(newIng);
//     }
//   };
//   // ----------------------------------------------------------------
//   obj.allIngredients = function () {
//     return obj.ingredients;
//   };
//   // ----------------------------------------------------------------

//   obj.prepUnder15min = function () {
//     if (obj.prepTime > 15) {
//       return false;
//     }
//     return true;
//   };
//   // ----------------------------------------------------------------
//   obj.typeOfCuisine = function (newCuisine) {
//     obj.cuisine = newCuisine;
//     return obj.cuisine;
//   };
//   // ----------------------------------------------------------------

//   // obj.deleteIngredient = function (ingredient) {
//   //   // return obj.ingredients.filter(function(e,i,arr){
//   //   //   return e !== ingredient
//   //   // })
//   //   return this.ingredients.splice(this.ingredients.indexOf(ingredient));
//   // };

//   return obj;
// }

// let recipe = culinaryRecipe(
//   "Pasta",
//   "Italian",
//   ["pasta", "vegetables", "olive oil"],
//   "Medium",
//   14,
//   "Cook pasta, and mix together."
// );

// recipe.addNewIngredient("salt");
// recipe.addNewIngredient("salt");
// recipe.typeOfCuisine("French");
// recipe.deleteIngredient("vegetables");

// let updatedIngredients = recipe.allIngredients();
// let prepTime = recipe.prepUnder15min();
// let cuisineType = recipe.cuisine;

// console.log(cuisineType);
// console.log(updatedIngredients);
// console.log(prepTime);

//  ZAVRSI ZADATAK, DODAJ 4. METODU
// ----------------------------------------------------------------------------------------------
// WEEK 3 | DAY 5 | Objects - pass by value/reference | Objects.docx - tasks(zadaci)
// TASK 1.
// Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
// "product": "Milk",
// "quantity": 1,
// "price": 1.50
// }

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

// ----------------------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------------------
// TASK 3.

// Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

// function eachLetter(word) {
//   let newWord = {};
//   for (let i = 0; i < word.length; i++) {
//     let element = word[i];
//     if (!newWord[element]) {
//       newWord[element] = [];
//     }
//     newWord[element].push(i);
//   }
//   return newWord;
// }
// console.log(eachLetter("dodo"));
// ----------------------------------------------------------------------------------------------

// *** VEZBANJE - Objekti (random) ***
// ----------------------------------------------------------------------------------------------

// function createObject(name, size, color, width) {
//   return {
//     name_obj: name,
//     size_obj: size,
//     color_obj: color,
//     width_obj: width,
//     speak_obj: function () {
//       console.log(this.name_obj);
//     },
//   };
// }

// let obj = createObject("Martin", 1, "blue", 200);
// console.log(obj);
// obj.speak_obj();
// ----------------------------------------------------------------------------------------------

// function createObject2(name, size, color, width) {
//   let obj = {};
//   obj.name_obj = name;
//   obj.size_obj = size;
//   obj.width_obj = width;
//   obj.color_obj = color;
//   obj.speak_obj = function () {
//     console.log(this.name_obj);
//   };
//   return obj;
// }

// let obj2 = createObject2("blabla", 2, "red", 150);
// console.log(obj2);
// obj2.speak_obj();
// ----------------------------------------------------------------------------------------------
// let obj = {
//   name: "Pera",
// };

// function addObjProperty(obj, keyName, keyValue) {
//   obj[keyName] = keyValue;
// }

// addObjProperty(obj, "color", "green");
// console.log(obj);
// addObjProperty(obj, "color", "blue");
// console.log(obj);
