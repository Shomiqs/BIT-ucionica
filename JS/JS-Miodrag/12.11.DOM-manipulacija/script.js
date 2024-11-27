// "use strict";

// const container = document.querySelector("#container");
// const display = document.createElement("h1");

// display.innerHTML = "0";

// container.append(display);

// const button1 = document.createElement("button");
// const button2 = document.createElement("button");

// button1.innerHTML = "+";
// button2.innerHTML = "-";

// container.append(button1);
// container.append(button2);

// button1.addEventListener("click", () => {
//   const currentValue = Number(display.innerHTML, typeof display.innerHTML);

//   const newValue = addOrSub("+", currentValue);

//   display.innerHTML = newValue;
// });

// button2.addEventListener("click", () => {
//   const currentValue = Number(display.innerHTML, typeof display.innerHTML);

//   const newValue = addOrSub("-", currentValue);

//   if (currentValue === 0) {
//     currentValue = 0;
//   } else {
//     display.innerHTML = newValue;
//   }
// });

// const addOrSub = (operation, currentValue) => {
//   if (operation === "+") {
//     return ++currentValue;
//   } else if (operation === "-") {
//     return --currentValue;
//   } else {
//     return currentValue;
//   }
// };
//------------------------------------------------------------------------------------------------------------------

const cocktail = document.querySelector("#cocktail");
const sastojci = [
  { ingredient: "White Rum" },
  { ingredient: "Fresh Lime" },
  { ingredient: "Simple Sirup" },
  { ingredient: "Ice" },
  { ingredient: "Club Soda" },
];

const slikaKoktela = document.createElement("img");
cocktail.append(slikaKoktela);
const uList = document.createElement("ul");
cocktail.append(uList);
slikaKoktela.className = "slika";
slikaKoktela.src =
  "https://upload.wikimedia.org/wikipedia/commons/8/87/15-09-26-RalfR-WLC-0067.jpg";

sastojci.forEach((element, index, array) => {
  const oList = document.createElement("li");
  oList.innerHTML = element.ingredient;
  uList.append(oList);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  oList.append(checkBox);
});
//------------------------------------------------------------------------------------------------------------------
//
