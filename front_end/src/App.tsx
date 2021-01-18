import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App(): JSX.Element {
  const [health, setHealth] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("./health");
      setHealth(result.data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {health}
        </a>
      </header>
    </div>
  );
}

export default App;
