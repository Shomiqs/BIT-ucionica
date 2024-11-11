"use strict";

const data = [
  {
    name: "Ana",
    age: 30,
    email: "a.marelja178@gmail.com",
    city: "Belgrade",
  },
  {
    name: "Milan",
    age: 35,
    email: "Milance@gmail.com",
    city: "Krusevac",
  },
  {
    name: "Aleksandar",
    age: 31,
    email: "Aca@gmail.com",
    city: "Novi Sad",
  },
  {
    name: "Milica",
    age: 39,
    email: "a.marelja178@gmail.com",
    city: "Pancevo",
  },
];

const caruselImgs = [
  "https://t3.ftcdn.net/jpg/04/19/83/70/360_F_419837075_JVhvOLBEbRXMDLjDGCDXoIUKIGWoBAPK.jpg",
  "https://t3.ftcdn.net/jpg/03/93/32/30/360_F_393323046_mo4niGwmjAWqMDMqj5CCqdaQDPit19xd.jpg",
  "https://images2.privateschoolreview.com/photo/7000/7200/IMG-Academy-8a1hvhmu19c08swgk4skw8sg4-1122.jpg",
  "https://media.istockphoto.com/id/121179299/photo/school-building-or-business-building-with-american-flag.jpg?s=612x612&w=0&k=20&c=uG58f_f1wcAeoC-mgR1kHLB-b_vlmpF_C7wXiPCuNTA=",
];
//------------------------------------------------------------------------------
const wrapper = document.querySelector(".wrapper");
//------------------------------------------------------------------------------

// 1. Korak pri dinamickom pravljenju elemenata: napravi element:

// const card = document.createElement("div");
// const title = document.createElement("h3");
// const subTitle = document.createElement("h5");

// // 2. Drugi korak: Dodavanje sadrzaja:

// // card.innerHTML = "Ja sam jedna kartica!";
// title.innerHTML = "Ana";
// subTitle.innerHTML = "Age: 30";
// card.className = "card";

// // 3. Treci korak: Prilepiti element za svog parenta:

// card.append(title, subTitle);
// wrapper.append(card);
// // ------------------------------------------------------------------------------

if (data.length === 0) {
  wrapper.innerHTML = "<h2>Sorry no results!</h2>";
  console.log("No data!");
} else {
  data.forEach((element, index, array) => {
    // 1. createElements
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const subTitle = document.createElement("h5");
    const profilePic = document.createElement("img");

    // 2. add content

    title.innerHTML = element.name;
    subTitle.innerHTML = `Age: ${element.age}`;
    card.className = "card";
    profilePic.src =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

    // 3. append elements

    card.append(profilePic, title, subTitle);
    wrapper.append(card);
  });
}

// ISTO:

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
// // ------------------------------------------------------------------------------
// CARUSEL:

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const carusel = document.querySelector("img");

let currentIndex = 0;

carusel.src = caruselImgs[currentIndex];

btnNext.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex === caruselImgs.length) {
    currentIndex = 0;
  }
  carusel.src = caruselImgs[currentIndex];
});

btnPrev.addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex <= 0) {
    currentIndex = caruselImgs.length - 1;
  }
  carusel.src = caruselImgs[currentIndex];
});
