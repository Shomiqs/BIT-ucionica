import React, { useState } from "react";
import "./HomePage.css";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () =>{
    setCounter((prevCounter) => prevCounter + 1)
  }
  const handleDecrement = () =>{
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      {/* <button onClick={() => setCounter((prevCounter) => (prevCounter += 1))}>
        Increment
      </button> */}
      <Button title="Increment" handle ={handleIncrement} />
      <Button title="Decrement" handle={handleDecrement}/>
      {/* <Button />
      <Button /> */}
    </div>
  );
};

export default HomePage;
