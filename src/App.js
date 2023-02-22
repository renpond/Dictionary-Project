import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          {" "}
          <a
            href="https://github.com/renpond/Dictionary-Project-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source Code
          </a>
          {""}
          {""}
          <span> by Renee'</span>
        </footer>
      </div>
    </div>
  );
}
