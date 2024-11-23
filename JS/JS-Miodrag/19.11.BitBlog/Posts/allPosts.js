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
    const onePostDiv = document.createElement("div");
    onePostDiv.className = "post";
    postsDiv.append(onePostDiv);

    const postTitle = document.createElement("p");
    postTitle.id = "post-title";
    const postDescription = document.createElement("p");
    postDescription.id = "post-description";
    const postAuthor = document.createElement("p");
    postAuthor.id = "post-author";

    postTitle.innerHTML = `Posts title: ${e.title}`;
    postDescription.innerHTML = `Post description: ${e.description}`;
    postAuthor.innerHTML = `Author: ${e.createdBy}`;

    onePostDiv.append(postTitle, postDescription, postAuthor);

    onePostDiv.addEventListener("click", () => {
      localStorage.setItem("postDetails", JSON.stringify(e));
      window.open("./SinglePost/SinglePost.html");
    });
  });
}
