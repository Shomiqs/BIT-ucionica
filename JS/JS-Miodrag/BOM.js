"use strict";

// function information() {
//   console.log(navigator.platform);
//   console.log(navigator.appVersion);
//   console.log(navigator.vendor);
//   console.log(navigator.userAgent);
// }
// information();

// function isOnline() {
//   console.log(navigator.onLine);
// }
// isOnline();

// function ekran() {
//   console.log(`Visina: ${screen.availHeight}`);
//   console.log(`Sirina: ${screen.availWidth}`);
// }
// ekran();

// function lokacija() {
//   console.log(location.href);
//   console.log(location.host);
//   console.log(location.protocol);
//   console.log(location.search);
// }
// lokacija();

// function redirectToPage() {
//   location.href = "https://www.imdb.com";
// }
// redirectToPage();

// function redirectToNewPage() {
//   window.open = "https://www.imdb.com";
// }
// redirectToNewPage();
// ----------------------------------------------------------------

function setLocalStorage() {
  localStorage.setItem("ime", "Miodrag");
}
setLocalStorage();

function readStoredData() {
  if (localStorage.getItem("ime") !== null) {
    console.log(localStorage);
  } else {
    console.log("There is no data!");
  }
}
readStoredData();

function deleteStoredData() {
  localStorage.removeItem("ime");
}
deleteStoredData();
// ----------------------------------------------------------------
// URADITI ISTO SA ARROW FUNKCIJAMA //

// let setLocalStorage = (key, value) => localStorage.setItem(key, value);
// setLocalStorage("ime", "Miodrag");

// let readStoredData =
