"use strict";

// const buttonContent = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
// <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M8 10V20H17.3604C18.3138 20 19.1346 19.3271 19.3216 18.3922L20.5216 12.3922C20.7691 11.1547 19.8225 10 18.5604 10H14L16.4258 6.36138C17.1929 5.2106 16.5885 3.64714 15.2467 3.31169L15.1992 3.2998C14.4642 3.11607 13.6886 3.36333 13.1956 3.9385L8 10Z" fill="#000000"/>
// <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>Like`;
const URL = "https://rickandmortyapi.com/api/character";
const container = document.querySelector(".container");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let nextPageUrl;
let prevPageUrl;

function getCharacters() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      nextPageUrl = data.info.next;
      prevPageUrl = data.info.prev;
      showCharacters(data);
    });
}
getCharacters();

const newFetchData = (url) => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      nextPageUrl = data.info.next;
      prevPageUrl = data.info.prev;
      showCharacters(data);
    });
};

prevButton.addEventListener("click", () => {
  newFetchData(prevPageUrl);
});
nextButton.addEventListener("click", () => {
  newFetchData(nextPageUrl);
});

function showCharacters(data) {
  container.innerHTML = "";
  console.log(data?.results);
  const char = data.results || [];
  const subContainer = document.createElement("div");
  subContainer.className = "subContainer";
  // const subContainer = document.createElement("div");

  const selected = JSON.parse(localStorage.getItem("char")) || [];

  char.forEach((e) => {
    // 1. pravljenje elemenata kartice:
    const charDiv = document.createElement("div");
    charDiv.className = "charDiv";
    //---------------------------------------------
    const charImg = document.createElement("img");
    const charName = document.createElement("p");
    const charButton = document.createElement("button");
    charButton.className = "button";
    if (
      selected.some((char) => {
        return char.id === e.id;
      })
    ) {
      charButton.classList.add("liked");
    }
    // 2. dodeljivanje vrednosti elementima:
    charImg.setAttribute("src", e.image);
    charImg.addEventListener("click", () => {
      localStorage.setItem("charDetails", JSON.stringify(e));
      window.open("charInfo.html");
    }); // kada kliknemo sliku upisuje char detalje u local storage
    charName.textContent = e.name;
    charButton.textContent = "Like";
    // 3. appendovanje elemenata:
    charDiv.append(charImg, charName, charButton);
    subContainer.append(charDiv);
    container.append(subContainer);

    charButton.addEventListener("click", () => {
      charButton.classList.toggle("liked");
      const selected = JSON.parse(localStorage.getItem("char")) || [];
      if (!selected.some((existingItem) => existingItem.id === e.id)) {
        selected.push(e);
        localStorage.setItem("char", JSON.stringify(selected));
      } else {
        const selected2 = selected.filter((char) => {
          console.log(char.id !== e.id);
          return char.id !== e.id;
        });

        console.log(selected2);
        localStorage.setItem("char", JSON.stringify(selected2));
      }
      //---------------------
    });
  });
}
// showCharacters();

// proveri da li karakter postoji u nizu, ako ne postoji znaci da ga dodam u lokal storage,
// Kada kliknem like, kroz niz u koji upisujem, da filtriram po ID-u.
// treba da cita iz local storage-a sta je ubaceno i da to oboji u zeleno.
