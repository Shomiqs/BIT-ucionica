"use strict";

const charData = JSON.parse(localStorage.getItem("charDetails"));

console.log(charData);

const img = document.querySelector("img");
img.src = charData.image;

document.querySelector("#name").innerHTML += charData.name;
document.querySelector("#species").innerHTML += charData.species;
document.querySelector("#gender").innerHTML += charData.gender;
document.querySelector("#status").innerHTML += charData.status;
