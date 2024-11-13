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
  const selected = [];

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

    charDiv.addEventListener("click", () => {
      charButton.classList.toggle("liked");
      if (charButton.id === "liked") {
        selected.push(e);
        localStorage.setItem("char", JSON.stringify(selected));
      } else if (charButton.id !== "liked") {
        localStorage.removeItem("char", JSON.stringify(selected));
      }
    });
  });
}
showCharacters();

// proveri da li karakter postoji u nizu, ako ne postoji znaci da ga setujem u lokal storage, a ako postoji u nizu
// da ga remove iz local storage-a. Kada kliknem like, kroz niz u koji upisujem, da filtriram po ID-u.
// treba da cita iz local storage-a sta je ubaceno i da to oboji u zeleno kao da je kliknuto.
