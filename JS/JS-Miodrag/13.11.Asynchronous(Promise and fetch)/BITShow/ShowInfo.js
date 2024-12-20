"use strict";

const showSeasons = JSON.parse(localStorage.getItem("showDetails"));

// console.log(showSeasons);

const seasonURL = `http://api.tvmaze.com/shows/${showSeasons.id}/seasons`;
const castURL = `http://api.tvmaze.com/shows/${showSeasons.id}/cast`;

const infoContainer = document.querySelector(".infoContainer");
//---------------------------------------------------------------------------
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".main-img");
img.src = showSeasons.image.original;

document.querySelector("#showName").innerHTML = showSeasons.name;

//---------------------------------------------------------------------------
function getSeasons() {
  fetch(seasonURL)
    .then((response) => response.json())
    .then((data) => showSeason(data));
}
getSeasons();
//---------------------------------------------------------------------------
function getCast() {
  fetch(castURL)
    .then((response) => response.json())
    .then((data) => showCast(data));
}
getCast();
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------

function showSeason(data) {
  const totalSeasons = data.length;

  const seasonDiv = document.createElement("div");
  seasonDiv.className = "season";

  const seasonName = document.createElement("h3");
  seasonName.textContent = `Season (${totalSeasons})`;

  seasonDiv.append(seasonName);
  right.append(seasonDiv);

  data.forEach((season) => {
    const seasonDate = document.createElement("li");
    seasonDate.className = "dateList";
    seasonDate.textContent = `${season.premiereDate} - ${season.endDate}`;
    seasonDiv.append(seasonDate);
  });

  const summartTitle = document.createElement("h3");
  const detailsContainer = document.createElement("div");

  summartTitle.innerText = "Show Details";
  const summary = document.createElement("p");
  summary.innerHTML = showSeasons.summary;
  detailsContainer.append(summartTitle);
  detailsContainer.append(summary);
  infoContainer.append(detailsContainer);
}

function showCast(data) {
  const castContainer = document.createElement("div");
  const castTitle = document.createElement("h3");
  castTitle.innerText = "Cast";
  castContainer.append(castTitle);
  data.forEach((cast) => {
    const castList = document.createElement("li");
    castList.className = "castList";
    castList.textContent = `${cast.person.name}`;
    castContainer.append(castList);
  });
  right.append(castContainer);
}
//---------------------------------------------------------------------------
