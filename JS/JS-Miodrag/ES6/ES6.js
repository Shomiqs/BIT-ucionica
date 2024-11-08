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

for (let i = 0; i < 2; i++) {
  console.log(i);
}

try {
  console.log(i);
} catch (error) {
  console.log("ne mozes da pozoves i van block scope-a");
}

const b = 7;
// b = 6;
// console.log(b)

let niz = [1, 2, 3];
Object.freeze(niz);

// niz.push(4)
console.log(niz);

let ime = "martin";
let prezime = "potkonjak";

var celoIme = `${ime} ${prezime}`;
// celoIme = ime + " " + prezime

ime += celoIme;
ime += `ahsdhasbdhba`;
console.log(ime);
console.log("martin" + " " + "potkonjak"); // concatenation

// const f = () => console.log(1)

let fruit = "apple";

const obj = {
  name: "voce",
  number: 8,
  // fruit: "apple", // ovako smo do sada
  fruit,
  // multiply: function(n){
  //     return this.number * n;
  // }, // ovako smo do sada
  times(n) {
    return this.number * n;
  },
};
// console.log(obj.multiply(2))

console.log(Math.round(Math.random() * 90) + 10);
var a = 5;
console.log(a.toInteger(3));
//---------------------------------------------------------------------------------------
// Destructuring:

const sandwich = {
  bread: "Italian",
  meat: "Tuna",
  cheese: "Swiss",
};

const { bread, meat } = sandwich;
// isto sto i:
// const bread = sandwich.bread;
// const meat = sandwich.meat;
const test = { ...sandwich };
//-------------------------------------------------------------------------------
// Destructuring:
const companies = ["Apple", "Google", "Microsoft"];
const [firstCompany, secondCompany] = companies;
console.log(firstCompany);

//-------------------------------------------------------------------------------
const regularPerson = {
  name: "John",
  surname: "Snow",
};

function showName({ name }) {
  console.log(name);
}

showName(regularPerson);
//-------------------------------------------------------------------------------
const [, , lastCompany] = companies;
console.log(lastCompany);

const numberArray = [1, 2, 3, 4];
function iterate(element) {}
numberArray.forEach((element) => {
  console.log(element);
});

for (var i = 0; i < numberArray.length; i++) {
  var element = numberArray[i];
}

const testFunction = (element) => console.log(element);
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const joinedArray = [...peaks, ...canyons];
// console.log(joinedArray);

const [first, second, ...rest] = joinedArray;
console.log(first);
console.log(second);
console.log(rest);

const morning = {
  breakfast: "Ham and eggs",
  lunch: "Burger",
};

const dinner = "Fish";

const meals = {
  ...morning,
  dinner,
};

console.log(meals);
// ------------------------------------------------------------------------------------
