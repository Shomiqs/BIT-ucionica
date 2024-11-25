import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllPostsPage from "./pages/AllPostsPage/AllPostsPage";

const App = () => {
  const [isOnHomePage, setIsOnHomePage] = useState(true);

  const togglePage = () => {
    setIsOnHomePage(!isOnHomePage);
  };

  return (
    <>
      <button onClick={togglePage}>Promeni Page</button>
      {isOnHomePage ? (
        <HomePage />
      ) : (
        <AllPostsPage
          isOnHomePage={isOnHomePage}
          returnToHomePage={setIsOnHomePage}
        />
      )}
    </>
  );
};

export default App;

// 1.
// <button onClick={(a) => {
//   setIsOnHomePage(!isOnHomePage);
// }}>Promeni Page</button>

// 2.
// const togglePage = () => {
//  setIsOnHomePage(!isOnHomePage);
// }
// <button onClick={togglePage}>Promeni Page</button>

// 3.
// const togglePage = (a) => {
//  setIsOnHomePage(a);
// }
//
// <button onClick={() => togglePage(1)}>Promeni Page</button>

// NIKAKO OVAKO, OVO JE POZIV FJE!!!!
// const togglePage = () => {
//  setIsOnHomePage(!isOnHomePage);
// }
// <button onClick={togglePage()}>Promeni Page</button>
