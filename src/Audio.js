import React from "react";
import "./Audio.css";
import { FaVolumeUp } from "react-icons/fa";

export default function Audio(props) {
  function playAudio() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Audio">
      <span className="Sound"></span>
      <FaVolumeUp onClick={playAudio} />
    </div>
  );
}
