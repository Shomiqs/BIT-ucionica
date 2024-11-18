"use strict";

const player = document.querySelector(".player");
const field = document.querySelector(".field");
const button = document.querySelector(".button");

field.addEventListener("click", (event) => {
  console.log(event);
  const x = event.clientX - field.offsetLeft; // uzimamo vrednosti(poziciju igraca na X osi)
  const y = event.clientY - field.offsetTop; // uzimamo vrednosti(poziciju igraca na Y osi)

  //   player.style.left = `${x}px`; // klikom postavljamo igraca na poziciju
  //   player.style.top = `${y}px`;

  player.style.left = `${x - player.width / 2}px`; // player.width / 2 i player.height / 2 postavlja igraca na sredinu kursora
  player.style.top = `${y - player.height / 2}px`; // umesto da kursor bude u gornjem levom uglu slike igraca
});
