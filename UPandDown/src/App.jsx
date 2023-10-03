import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter=15;
  const addValue = () => {
    setCounter(counter + 1);
  };
  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Up and Down</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {counter} </button>
    </>
  );
}

export default App;
