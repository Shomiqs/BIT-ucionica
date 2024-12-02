import React from "react";
import { Header } from "./components/Header/Header";
import { Homepage } from "./Pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import { SinglePage } from "./Pages/SinglePage/SinglePage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/shows"
        element={
          <>
            <Header />
            <Homepage />
            <Footer />
          </>
        }
      />
      <Route
        path="/show/:id"
        element={
          <>
            <Header />
            <SinglePage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
