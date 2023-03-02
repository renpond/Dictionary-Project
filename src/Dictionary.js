import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

///core concept to creating search function on a app/webpage
export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    //checking for response in dev tools
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setDefinition(response.data);
    let apiKey = "54ee0ta8ff3a748c85c4b774c0ea9o81";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "54ee0ta8ff3a748c85c4b774c0ea9o81";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    //console.log(event.target.value);
    setKeyword(event.target.value);
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
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input me-3"
              onChange={handleKeywordChange}
            />
            <div>
              <button className="btn" title="Search">
                Search
              </button>
            </div>
          </form>
          <div className="suggestions">
            <i class="fa-regular fa-lightbulb"></i>
            {""} {""}
            Suggestions: Wine, Yoga, Sauté, Beach, Giraffe...
          </div>
        </section>
        <Results definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
