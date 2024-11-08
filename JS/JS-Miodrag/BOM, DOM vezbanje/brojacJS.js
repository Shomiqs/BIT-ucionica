"use strict";

let brojac = document.querySelector("h1");
let clear = document.querySelector(".clear");

let minusFive = document.querySelector(".button1");
let minus = document.querySelector(".button2");
let plus = document.querySelector(".button3");
let plusFive = document.querySelector(".button4");

plus.addEventListener("click", () => {
  brojac.innerText = parseInt(brojac.innerText) + 1;
});

minus.addEventListener("click", () => {
  brojac.innerText = parseInt(brojac.innerText) - 1;
});

plusFive.addEventListener("click", () => {
  brojac.innerText = parseInt(brojac.innerText) + 5;
});

minusFive.addEventListener("click", () => {
  brojac.innerText = parseInt(brojac.innerText) - 5;
});

clear.addEventListener("click", () => {
  brojac.innerText = 0;
});
