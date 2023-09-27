import React from "react";
import SearchEngine from "./SearchEngine";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/aznivgalstyan/" rel="noreferrer">
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
      </header>
    </div>
  );
}

export default App;
