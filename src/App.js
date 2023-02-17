import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
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
