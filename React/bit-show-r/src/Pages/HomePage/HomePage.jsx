import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import "./HomePage.css";

const SHOW_URL = "https://api.tvmaze.com/shows";

export const Homepage = () => {
  const [shows, setShows] = useState([]);

  const fetchAllShows = () => {
    fetch(SHOW_URL)
      .then((res) => res.json())
      .then((data) => setShows(data));
  };

  useEffect(() => {
    fetchAllShows();
  }, []);

  const top50Shows = shows
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 50);

  return (
    <>
      <div className="show-container">
        {top50Shows.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </>
  );
};
