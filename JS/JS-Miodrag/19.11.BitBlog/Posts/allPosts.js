"use strict";

const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";

const postsDiv = document.querySelector(".posts");

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showPosts(data));
}
getPosts();

function showPosts(data) {
  const post = data;
  console.log(post);

  post.slice(0, 10).forEach((e) => {
    // Pravljenje elemenata kartice:
    const postDiv = document.createElement("div");
    postsDiv.append(postDiv);
    const postTitle = document.createElement("p");
    const postDescription = document.createElement("p");
    const postAuthor = document.createElement("p");
    postTitle.innerHTML = 
});
}
