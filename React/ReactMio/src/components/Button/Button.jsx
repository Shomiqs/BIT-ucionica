import React from "react";
import "./Button.css";

// 1. nacin
const Button = ({ naslov, handle }) => {
  // 3. nacin mozemo i direktno {naslov}
  // 2. nacin

  return (
    <button className={naslov ? "crvena" : "plava"} onClick={handle}>
      {naslov}
    </button>
  );
};

export default Button;
