import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("Welcome");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "eTzPVet67z3618gs6Shb7cBbr1YPEbJy5s5qvatIPi1fGPPXKnzTizHI";
    const headers = { Authorization: pexelsApiKey };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  useEffect(() => {
    // Runs on initial render
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "eTzPVet67z3618gs6Shb7cBbr1YPEbJy5s5qvatIPi1fGPPXKnzTizHI";
    const headers = { Authorization: pexelsApiKey };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Dictionary">
      <section>
        <h1>
          Dictionary <i class="fa-solid fa-book-open"></i>
        </h1>
        <form
          className="col-12 d-flex me-5 justify-content-center"
          onSubmit={search}
        >
          <input
            autoFocus="on"
            className="form-cobtrol me-3 rounded searchBar"
            onChange={handleKeywordChange}
            placeholder="Search for a word..."
            type="search"
          />
        </form>
        <div className="suggestions">
          <i class="fa-regular fa-lightbulb"></i> <strong>Suggestions: </strong>
          Wine, Lemon, Yoga...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} keyword={keyword} />
    </div>
  );
}
