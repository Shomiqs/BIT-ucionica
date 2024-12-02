import "./App.css";
import { useEffect, useState } from "react";

const URL = "https://api.tvmaze.com/search/shows?q=";

function App() {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  const fetchSearchedShows = async () => {
    const response = await fetch(URL + search);
    const data = await response.json();
    setSearchedData(data);
  };

  useEffect(() => {
    fetchSearchedShows();
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      ></input>
      {searchedData.length ? (
        <>
          {searchedData.map((data) => (
            <h4 key={crypto.randomUUID()}>{data.show.name}</h4>
          ))}
        </>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default App;
