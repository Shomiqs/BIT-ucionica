import React from "react";
import "./AllPostsPage.css";
import { DATA } from "../../mockData/data";

const AllPostsPage = () => {
  return (
    <>
      <div className="all-posts-page">
        <h1>All Posts Page!</h1>
        <div className="post-wrapper">
          {DATA.map((post) => {
            return (
              <div className="post-card">
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <h3>{post.createdBy}</h3>
                <button>View Post</button>
              </div>
            );
          })}
        </div>
        {/* <Button title="Neki naslov" handle={() => console.log("cao svete!")} /> */}
      </div>
    </>
  );
};

export default AllPostsPage;
