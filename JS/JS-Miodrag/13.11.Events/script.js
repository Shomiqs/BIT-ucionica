"use strict";

const button = document.querySelector(".button");
const buttonOff = document.querySelector(".buttonOff");
const buttonOn = document.querySelector(".buttonOn");
const container = document.querySelector(".container");

function toggleBackground() {
  container.classList.toggle("container-bckCol");
}

button.addEventListener("click", toggleBackground);

buttonOff.addEventListener("click", () => {
  button.removeEventListener("click", toggleBackground);
});

buttonOn.addEventListener("click", () => {
  button.addEventListener("click", toggleBackground);
});

//--------------------------------------------------------
