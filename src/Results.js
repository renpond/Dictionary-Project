import React from "react";
import Phonetic from "./Phonetic";
import Audio from "./Audio";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section>
          <h2>{props.definition.word}</h2>
          <Phonetic phonetic={props.definition.phonetic} />
          <Audio audio={props.audio?.length > 0} />
        </section>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
