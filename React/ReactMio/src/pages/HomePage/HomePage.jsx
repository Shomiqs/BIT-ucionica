import { useState } from "react";
import "./HomePage.css";
import Button from "../../components/Button/Button";

const HomePage = () => {
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter++);
  }

  const decrementCounter = () => {
    setCounter(counter--);
  }

  return (
    <div className="home-page">
      <h1>Welcome to Home Page</h1>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>


      {/* POSLE */}
      {/* <Button naslov="Increment" handle={handleIncrement} />
      <Button naslov="Decrement" handle={handleDecrement} /> */}
      {/* <Button />
      <Button /> */}
    </div>
  );
};

export default HomePage;
