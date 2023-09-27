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
          This project was coded by Azniv Mary Galstyan and is
          <a
            href="https://github.com/MaryAznivG/react-project-Weather-app"
            target="_blank"
          >
            open-sourced on
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
