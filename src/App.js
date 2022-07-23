import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>

        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCount(count - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={disabled}
          >
            +
          </button>
        </div>

        <div>
          <button
            data-testid="onoff"
            onClick={() => {
              disabled ? setDisabled(false) : setDisabled(true);
            }}
            style={{ backgroundColor: "blue" }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
