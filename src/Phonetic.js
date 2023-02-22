import React from "react";
import "./Phonetic.css";
import { FaVolumeUp } from "react-icons/fa";

export default function Phonetic(props) {
  function playAudio() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <span className="Text">{props.phonetic.text}</span>
      <FaVolumeUp onClick={playAudio} />
    </div>
  );
}
