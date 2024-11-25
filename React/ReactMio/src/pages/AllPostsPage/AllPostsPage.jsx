import React, { useState } from "react";
import "./AllPostsPage.css";
import { DATA } from "../../mockData/data";
import { SinglePostPage } from "../SinglePostPage/SinglePostPage";

// 1. const AllPostsPage = (props) => {
// 2. const AllPostsPage = ({ name, arr, user, stejt }) => {
// 3. const AllPostsPage = (props) => {
// 3. const { name, arr, user, stejt } = props;

const AllPostsPage = ({ isOnHomePage, returnToHomePage }) => {
  const [clickedPost, setClickedPost] = useState(null);
  return (
    <div className="all-posts-page">
      <h1>Welcome to All Posts Page</h1>
      {!clickedPost && <div className="posts-wrapper">
        {/* mapiramo kartice */}
        {DATA.map((post) => {
          return (
            <div className="post-card">
              <h2>{post.title}</h2>
              <h3>{post.description}</h3>
              <h3>{post.createdBy}</h3>
              <button onClick={() => {
                setClickedPost(post)
              }}>View Post</button>
            </div>
          );
        })}
      </div>}
      {clickedPost && <SinglePostPage post={clickedPost} />}
      {/* <h2>
        {`Trenutno se nalazite na ${isOnHomePage ? "Home" : "All Posts"} Page`}
      </h2>
      <button
        onClick={() => {
          returnToHomePage(true);
        }}
      >
        Vrati se na Home Page
      </button> */}
      {/* <Button naslov="Neki naslov" handle={() => console.log("Cao svete")} /> */}
    </div>
  );
};

export default AllPostsPage;
