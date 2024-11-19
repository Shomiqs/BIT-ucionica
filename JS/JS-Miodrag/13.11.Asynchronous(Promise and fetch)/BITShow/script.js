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
const searchInput = document.querySelector("#search-field");
const searchResults = document.querySelector(".search-results");

function showShows(data) {
  console.log(data);

  const show = data;

  show.slice(0, 50).forEach((e) => {
    // 1. Pravljenje elemenata kartice
    // const subDiv = document.createElement("div");

    const showDiv = document.createElement("div");
    const showImg = document.createElement("img");
    const showName = document.createElement("h4");
    showDiv.className = "showDiv";
    // 2. dodeljivanje vrednosti elementima:
    showImg.setAttribute("src", e.image.medium);
    showName.textContent = e.name;
    // 3. appendovanje elemenata:
    container.append(showDiv);
    // subDiv.append(showDiv);
    showDiv.append(showImg, showName);
    //---------------------------------------------------------------------------

    showDiv.addEventListener("click", () => {
      localStorage.setItem("showDetails", JSON.stringify(e));
      window.open("ShowInfo.html");
    });
  });
}

searchInput.addEventListener("keyup", (event) => {
  // console.log('desio se keyup', event.target.value);
  const searchInput = event.target.value;
  fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then((res) => res.json())
    .then((res) => showSearchOptions(res));
});

const showSearchOptions = (data) => {
  searchResults.innerHTML = "";
  data.forEach((show) => {
    // console.log(show);
    const searchTitle = document.createElement("p");

    searchTitle.innerHTML = show.show.name;
    searchTitle.addEventListener("click", () => {
      localStorage.setItem("showDetails", JSON.stringify(show.show));
      window.open("showInfo.html", "_self");
    });

    searchResults.append(searchTitle);
  });
};
