"use strict";

const button = document.querySelector(".button");
const buttonOff = document.querySelector(".buttonOff");
const container = document.querySelector(".container");

function toggleBackground() {
  container.classList.toggle("container-bckCol");
}

button.addEventListener("click", toggleBackground);

buttonOff.addEventListener("click", () => {
  button.removeEventListener("click", toggleBackground);
});

//--------------------------------------------------------
