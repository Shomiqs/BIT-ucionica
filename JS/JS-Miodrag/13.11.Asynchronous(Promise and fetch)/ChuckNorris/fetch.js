"use strict";

const URL = "https://api.chucknorris.io/jokes/random";
const dugme = document.querySelector("button");
const joke = document.querySelector("h1");

function getChuckJoke() {
  // Prvo pravimo request preko fetch() metode
  // .then nam sluzi da razresimo Promise, koji ce fetch da vrati
  // Promise ce se razresiti tek kada dobijemo pravu informaciju(objekat, niz, niz objekata...)
  // u prvom thenu, dobicemo informaciju u JSON formatu
  // da bismo razresili i preveli iz json u js, koristimo metodu .json()
  // na zalost .json() nam takodje vraca promise ali bar znamo da vise nema JSON formata
  // Na kraju u poslednjem .then, mogu da dohvatim pravu informaciju sa kojom mogu da radim
  // catch nam sluzi da uhvati gresku koja se u medjuvremenu dogodila
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showJoke(data))
    .catch((error) => console.log(error));
}

function showJoke(data) {
  console.log(data);
  joke.textContent = data.value;
}

dugme.addEventListener("click", getChuckJoke);
