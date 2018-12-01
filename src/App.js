import React, { useState, useEffect } from "react";

import { CounterContext } from "./state";
import CounterCard from "./components/CounterCard";
import "./App.css";

const App = props => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  // similar to componentDidMount and componentDidUpdate
  // runs after every render
  useEffect(() => {
    document.title = `${count} clicks`;
  });

  return (
    <div className="App">
      <header className="App-header">React Hooks</header>
      <main>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setShowCount(!showCount)}>
          Toggle Show Count Card
        </button>
        <CounterContext.Provider value={count}>
          {showCount && <CounterCard />}
        </CounterContext.Provider>
      </main>
    </div>
  );
};

export default App;
