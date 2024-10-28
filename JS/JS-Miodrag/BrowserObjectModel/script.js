"use strict";

console.log("Zdravo BOM-e");

console.log(document.body);

// var vrednost = window.prompt("Poy");
// console.log(vrednost);

// console.log(window.location);
// window.location.href = "https://google.com";

console.log(window.screen);

console.log(window.history);

console.log(window.screen.height);
console.log(window.screen.availHeight);

console.log(window.localStorage);

// localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// if (localStorage.getItem("theme") === "light") {
//   document.body.className = "light";
// } else {
//   document.body.className = "dark";
// }

var body = document.body;
var dugme = document.createElement("button");
dugme.textContent = "Promeni temu";

function whenButtonClicked() {
  console.log("Button is clicked!");
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    body.className = "dark";
  } else {
    localStorage.setItem("theme", "light");
    body.className = "light";
  }
}

dugme.addEventListener("click", whenButtonClicked);

body.prepend(dugme);
