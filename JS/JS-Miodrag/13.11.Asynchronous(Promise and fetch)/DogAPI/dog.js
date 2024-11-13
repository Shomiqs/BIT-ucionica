"use strict";

const URL = "https://dog.ceo/api/breed/african/images";
const button = document.querySelector("button");
const dogContainer = document.querySelector(".dogs");

function getDogImages() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showDogs(data));
}

function showDogs(data) {
  console.log(data.message);
  const newDogArray = data.message.slice(0, 6);

  newDogArray.forEach((e) => {
    const dogImage = document.createElement("img");
    dogImage.setAttribute("src", e);
    dogContainer.append(dogImage);
  });

  // manje adekvatan nacin, ali je moguce i ovako:
  //   dogContainer.innerHTML = newDogArray
  //     .map((e) => `<img src="${e}" alt"">`)
  //     .join("");
}

button.addEventListener("click", getDogImages);
