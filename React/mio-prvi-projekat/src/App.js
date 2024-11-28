import AllPostsPage from "./pages/AllPostsPage";
import HomePage from "./pages/HomePage";

function App() {
  let isOnHomePage = true;
  console.log(isOnHomePage);

  return (
    <div className="App">
      <h2>This is my first project!</h2>
      <button
        onClick={() => {
          isOnHomePage = false;
          console.log(isOnHomePage);
        }}
      >
        Go to All Post Page
      </button>
      {isOnHomePage ? <HomePage /> : <AllPostsPage />}
    </div>
  );
}

export default App;
