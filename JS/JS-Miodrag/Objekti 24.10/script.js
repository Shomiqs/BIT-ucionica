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

function culinaryRecipe(
  name,
  cuisine,
  ingredients,
  complexity,
  prepTime,
  prepInstruction
) {
  let obj = {};

  obj.name = name;
  obj.cuisine = cuisine;
  obj.complexity = complexity;
  obj.ingredients = ingredients;
  obj.prepTime = prepTime;
  obj.prepInstruction = prepInstruction;

  //dodali smo novu metodu van zadatka koja dodaje extra ingredient
  // ----------------------------------------------------------------
  obj.addNewIngredient = function (newIng) {
    if (obj.ingredients.includes("salt")) {
      console.log("Salt is already added!");
    } else {
      obj.ingredients.push(newIng);
    }
  };
  // ----------------------------------------------------------------
  obj.allIngredients = function () {
    return obj.ingredients;
  };
  // ----------------------------------------------------------------

  obj.prepUnder15min = function () {
    if (obj.prepTime > 15) {
      return false;
    }
    return true;
  };
  // ----------------------------------------------------------------
  obj.typeOfCuisine = function (newCuisine) {
    obj.cuisine = newCuisine;
    return obj.cuisine;
  };
  // ----------------------------------------------------------------
  return obj;
}

let recipe = culinaryRecipe(
  "Pasta",
  "Italian",
  ["pasta", "vegetables", "olive oil"],
  "Medium",
  14,
  "Cook pasta, and mix together."
);

recipe.addNewIngredient("salt");
recipe.addNewIngredient("salt");
recipe.typeOfCuisine("French");

let updatedIngredients = recipe.allIngredients();
let prepTime = recipe.prepUnder15min();
let cuisineType = recipe.cuisine;

console.log(cuisineType);
console.log(updatedIngredients);
console.log(prepTime);
//  ZAVRSI ZADATAK, DODAJ 4. METODU
