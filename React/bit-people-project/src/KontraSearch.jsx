import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://randomuser.me/api/?results=100&seed=e768482669cd1c8e";

export const KontraSearch = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRandomUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRandomUsers(data.results);
  };

  const filteredUsers = randomUsers.filter(
    (user) =>
      user.name.first.toLowerCase().includes(search) ||
      user.name.last.toLowerCase().includes(search)
  );

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  console.log(filteredUsers);
  return (
    <>
      <input
        type="text"
        placeholder="Search by name..."
        onInput={(event) => setSearch(event.target.value.toLowerCase())}
        value={search}
      />
      {filteredUsers.map((user) => {
        return (
          <p>
            {user.name.first} {user.name.last}
          </p>
        );
      })}
    </>
  );
};

// console.logove menjamo za state.
