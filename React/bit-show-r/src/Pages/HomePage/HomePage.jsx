import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import "./HomePage.css";

const SHOW_URL = " https://api.tvmaze.com/shows";

export const Homepage = () => {
  const [data, setData] = useState([]);
  // const [clickedShow, setClickedShow] = useState(null);

  useEffect(() => {
    fetch(SHOW_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  const top50Shows = data
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 50);

  return (
    <>
      <div className="container">
        {top50Shows.map((item) => (
          <Card key={item.id} show={item} />
        ))}
      </div>
    </>
  );
};
