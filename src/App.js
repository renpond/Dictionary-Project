//import logo from "./logo.gif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Renee' Pond and is open-sourced by {""}
          <a
            href="https://github.com/renpond/Dictionary-Project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {""}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
