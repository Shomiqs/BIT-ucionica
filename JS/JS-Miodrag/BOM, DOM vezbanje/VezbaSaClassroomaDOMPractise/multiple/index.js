"use strict";

const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const counters = document.querySelectorAll(".counter");

const clear = document.querySelectorAll(".clear");

plusButtons.forEach((click, index) => {
  click.addEventListener("click", () => {
    counters[index].innerText = parseInt(counters[index].innerText) + 1;
  });
});

minusButtons.forEach((click, index) => {
  click.addEventListener("click", () => {
    counters[index].innerText = parseInt(counters[index].innerText) - 1;
  });
});

// popravi CLEAR dugme:

click.addEventListener("click", () => {
  counters.innerText = 0;
});

// uradi kroz for petlju sa let-om i jos jedan primer sa var-om.
