import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllPostsPage from "./pages/AllPostsPage/AllPostsPage";

const App = () => {
  const [isOnHomePage, setIsOnHomePage] = useState(true);

  return (
    <>
      {isOnHomePage ? <HomePage /> : <AllPostsPage />}
      <button onClick={() => setIsOnHomePage(!isOnHomePage)}>
        Promeni Page
      </button>
      {console.log(isOnHomePage)}
    </>
  );
};

export default App;
