import { useEffect, useState } from "react";
import { AllBlogsPage } from "./pages/AllBlogsPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { CreateBlogModal } from "./components/CreateBlogModal";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export const URL = "https://6745ca58512ddbd807f9a88c.mockapi.io/api/v1/blogs";
// push
//
function App() {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAllBlogs = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return new Error("Failed to fetch data!");
      })
      .then((data) => setBlogs(data));
  };

  useEffect(() => {
    fetchAllBlogs();
  }, [refresh]);

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`app ${theme === "light" ? "" : "dark"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                theme={theme}
                setTheme={setTheme}
                toggleModalOpen={toggleModalOpen}
              />
              <AllBlogsPage
                blogs={blogs}
                setSingleBlog={setSingleBlog}
                setRefresh={setRefresh}
              />
              <SingleBlogPage blogs={blogs} />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Header
                theme={theme}
                setTheme={setTheme}
                toggleModalOpen={toggleModalOpen}
              />
              <SingleBlogPage blogs={blogs} />
              <Footer />
            </>
          }
        />
        <Route />
      </Routes>

      {isModalOpen && <CreateBlogModal toggleModalOpen={toggleModalOpen} />}
    </div>
  );
}

export default App;
