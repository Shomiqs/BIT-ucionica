import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter startValue={0} increment={1} maxValue={15} />
      <Counter startValue={5} increment={2} maxValue={15} />
      <Counter startValue={10} increment={5} maxValue={15} />
    </div>
  );
}

export default App;
