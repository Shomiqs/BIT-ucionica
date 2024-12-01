import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h2>BIT Shows</h2>

        <label htmlFor="search"></label>
        <input type="search" name="search" id="" />
      </div>
    </div>
  );
};
