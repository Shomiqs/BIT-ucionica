"use strict";

function information() {
  console.log(navigator.platform);
  console.log(navigator.appVersion);
  console.log(navigator.vendor);
  console.log(navigator.userAgent);
}
information();

function isOnline() {
  console.log(navigator.onLine);
}
isOnline();

function ekran() {
  console.log(`Visina: ${screen.availHeight}`);
  console.log(`Sirina: ${screen.availWidth}`);
}
ekran();

function lokacija() {
  console.log(location.href);
  console.log(location.host);
  console.log(location.protocol);
  console.log(location.search);
}
lokacija();

// function redirectToPage() {
//   location.href = "https://www.imdb.com";
// }
// redirectToPage();

function redirectToNewPage() {
  window.open = "https://www.imdb.com";
}
redirectToNewPage();
