import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/aznivgalstyan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azniv Mary Galstyan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MaryAznivG/react-project-Weather-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://reactweatherappamg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
