"use strict";

const URL = "http://api.tvmaze.com/shows";
const container = document.querySelector(".container");
//---------------------------------------------------------------------------
function getShows() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showShows(data));
}
getShows();
//---------------------------------------------------------------------------

function showShows(data) {
  console.log(data);

  const show = data;

  show.slice(0, 50).forEach((e) => {
    // 1. Pravljenje elemenata kartice
    const subDiv = document.createElement("div");

    const showDiv = document.createElement("div");
    const showImg = document.createElement("img");
    const showName = document.createElement("h4");
    showDiv.className = "showDiv";
    // 2. dodeljivanje vrednosti elementima:
    showImg.setAttribute("src", e.image.medium);
    showName.textContent = e.name;
    // 3. appendovanje elemenata:
    container.append(subDiv);
    subDiv.append(showDiv);
    showDiv.append(showImg, showName);
    //---------------------------------------------------------------------------

    showDiv.addEventListener("click", () => {
      localStorage.setItem("showDetails", JSON.stringify(e));
      window.open("ShowInfo.html");
    });
  });
}
