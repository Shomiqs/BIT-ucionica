import React, { useState } from "react";
import "./Counter.css";

export const Counter = ({ startValue, increment, maxValue }) => {
  const [counter, setCounter] = useState(startValue);
  const isEven = counter % 2 === 0 ? "Even" : "Odd";
  return (
    <div>
      <h1>{counter}</h1>
      <p>{isEven}</p>

      <button
        className={counter === maxValue ? "color" : ""}
        onClick={() => {
          if (counter + increment < maxValue) {
            setCounter(counter + increment);
          } else {
            setCounter(maxValue);
          }
        }}
      >
        +
      </button>
      <button
        className={counter === maxValue ? "color" : ""}
        onClick={() => {
          if (counter - increment > 0) {
            setCounter(counter - increment);
          } else {
            setCounter(0);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
