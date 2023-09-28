import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather.js />
          <footer>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/aznivgalstyan/"
              rel="noreferrer"
            >
              Azniv Mary Galstyan
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/MaryAznivG/react-project-Weather-app"
              rel="noreferrer"
            >
              open-sourced on Github.
            </a>
          </footer>
      </div>
    </div>
  );
}

export default App;
