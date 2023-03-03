import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="main-content">
          <Dictionary defaultKeyword="Welcome" />
        </main>

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/reneepond/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Renee' Pond
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/renpond/Dictionary-Project-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github {""}
          </a>
          {""}
          and hosted on
          {""}
          <a
            href="https://merry-starlight-b7eca7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
