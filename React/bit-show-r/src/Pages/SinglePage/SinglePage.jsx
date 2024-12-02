import "./SinglePage.css";
import { useEffect, useState } from "react";

export const SinglePage = () => {
  const [show, setShow] = useState([]);

  const fetchShowById = (id) => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShow(data));
  };

  useEffect(() => {
    fetchShowById(show);
  }, []);

  return (
    <div className="single-page">
      <h1>show.name</h1>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
