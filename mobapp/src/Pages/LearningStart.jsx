import React, { useState } from "react";
import "./LearningStart.css"; 

import imgCharacter4 from "../Assets/imgcharcgter2.png";

export default function LearningStart({ onNext }) {
  const [selected, setSelected] = useState("");

  const options = ["Practice", "Reading", "Videos", "Listening"];

  const handleNext = () => {
    if (!selected) return alert("Select option");
    onNext(selected);
  };

  return (
    <div className="learning-page">

      <div className="learning-card">
        <h2 className="learning-title">Learning style</h2>

        <div className="learning-list">
          {options.map((o) => (
            <div
              key={o}
              className={`learning-card-item ${selected === o ? "active" : ""}`}
              onClick={() => setSelected(o)}
            >
              {o}
            </div>
          ))}
        </div>

        <button className="learning-btn" onClick={handleNext}>
          Continue
        </button>
      </div>

      <img
        src={imgCharacter4}
        className="learning-img"
        alt="character"
      />
    </div>
  );
}