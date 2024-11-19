"use strict";

const postDetails = JSON.parse(localStorage.getItem("postDetails"));

document.querySelector("#post-title").textContent = `Post title: ${postDetails.title}`;
document.querySelector("#post-description").textContent = `Post description: ${postDetails.description}`;
document.querySelector("#post-author").textContent = `Post author: ${postDetails.createdBy}`;