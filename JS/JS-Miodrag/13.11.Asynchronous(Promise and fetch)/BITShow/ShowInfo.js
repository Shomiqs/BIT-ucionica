"use strict";

const showSeasons = JSON.parse(localStorage.getItem("showDetails"));

// console.log(showSeasons);

const seasonURL = `http://api.tvmaze.com/shows/${showSeasons.id}/seasons`;
const castURL = `http://api.tvmaze.com/shows/${showSeasons.id}/cast`;

const seasonCast = document.querySelector(".seasonCast");
//---------------------------------------------------------------------------

const img = document.querySelector("img");
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
function showSeason(data) {
  const totalSeasons = data.length;

  const seasonDiv = document.createElement("div");
  seasonDiv.className = "season";

  const seasonName = document.createElement("h3");
  seasonName.textContent = `Season (${totalSeasons})`;

  seasonDiv.append(seasonName);
  seasonCast.append(seasonDiv);

  data.forEach((season) => {
    const seasonDate = document.createElement("li");
    seasonDate.className = "dateList";
    seasonDate.textContent = `${season.premiereDate} - ${season.endDate}`;
    seasonCast.append(seasonDate);
  });

  data.forEach((cast) => {
    console.log(cast);
    const castList = document.createElement("li");
    castList.className = "castList";
    castList.textContent = `${cast.person.name}`;
    seasonCast.append(castList);
  });
}

function showCast(data) {
  const totalSeasons = data.length;

  const seasonDiv = document.createElement("div");
  seasonDiv.className = "season";

  const seasonName = document.createElement("h3");
  seasonName.textContent = `Season (${totalSeasons})`;

  seasonCast.append(seasonDiv);

  data.forEach((cast) => {
    console.log(cast);
    const castList = document.createElement("li");
    castList.className = "castList";
    castList.textContent = `${cast.person.name}`;
    seasonCast.append(castList);
  });
} 
//---------------------------------------------------------------------------
