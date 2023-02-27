import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

///core concept to creating search function on a app/webpage
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //checking for response in dev tools
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "eTzPVet67z3618gs6Shb7cBbr1YPEbJy5s5qvatIPi1fGPPXKnzTizHI";
    let pexelsApiUrl = `htpps://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>
            {" "}
            Dictionary {""}
            <i class="fa-solid fa-book-open"></i>
          </h1>
          <form
            className="col-12 d-flex me-5 justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Type a word"
              autoFocus="on"
              className="form-control me-3"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <div>
              <button className="btn" title="Search">
                {" "}
                Search{" "}
              </button>
            </div>
          </form>
          <div className="suggestions">
            <i class="fa-regular fa-lightbulb"></i>
            {""} {""}
            <strong>Suggestions: </strong> Sauté, Beach, Giraffe...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
