"use strict";

const URL = "https://rickandmortyapi.com/api/character";
const container = document.querySelector(".container");

function getCharacters() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showCharacters(data));
}
getCharacters();

function showCharacters(data) {
  console.log(data?.results);
  const char = data.results;

  char.forEach((e) => {
    // 1. pravljenje elemenata kartice:
    const charDiv = document.createElement("div");
    charDiv.className = "charDiv";
    //---------------------------------------------
    const charImg = document.createElement("img");
    const charName = document.createElement("p");
    const charButton = document.createElement("button");
    charButton.className = "button";
    // 2. dodeljivanje vrednosti elementima:
    charImg.setAttribute("src", e.image);
    charName.textContent = e.name;
    charButton.textContent = "Like";
    // 3. appendovanje elemenata:
    charDiv.append(charImg, charName, charButton);
    container.append(charDiv);
  });
}
showCharacters();
