import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize">{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio?.length > 0 && phonetic.text?.length > 0)
              return (
                <span key={index}>
                  <Phonetic phonetic={phonetic} />
                </span>
              );
            return null;
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
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
