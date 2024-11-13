"use strict";

const chatContainer = document.querySelector(".chat-container");
const inputField = document.querySelector("input");
const button = document.querySelector(".button");

button.onclick = () => {
  // napravi element:
  const dataP = document.createElement("p");
  // dodaj content u taj element:
  dataP.innerHTML = inputField.value;
  // append element na chat:
  chatContainer.append(dataP);
};
