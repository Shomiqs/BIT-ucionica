"use strict";

let body = document.querySelector("body");
let buttonChange = document.querySelector(".button1");
let buttonClear = document.querySelector(".button2");
let intervalId;

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

// button.addEventListener("click", setBg);

// timeout za klik
// button.addEventListener("click", function () {
//   setTimeout(setBg, 1000);
// });

// sam menja boje posle prvog klika
buttonChange.addEventListener("click", function () {
  intervalId = window.setInterval(setBg, 1000);
});

// clearuje odnosno zaustavlja setInterval
buttonClear.addEventListener("click", () => {
  window.clearInterval(intervalId);
});
