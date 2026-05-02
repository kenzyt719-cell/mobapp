import React, { useState } from "react";
import "./StressStart.css";

// (optional) add image like other screens if you want
import imgCharacter3 from "../Assets/imgcharcgter3.png";

export default function StressStart({ onNext }) {
  const [selected, setSelected] = useState("");

  const emojis = ["😊", "🙂", "😐", "😟", "😰"];

  const handleNext = () => {
    if (!selected) return alert("Select feeling");
    onNext(selected);
  };

  return (
    <div className="stress-page">

      {/* CARD */}
      <div className="stress-card">
        <h2 className="stress-title">Stress level</h2>

        <div className="emoji-box">
          {emojis.map((e) => (
            <span
              key={e}
              className={`emoji ${selected === e ? "active" : ""}`}
              onClick={() => setSelected(e)}
            >
              {e}
            </span>
          ))}
        </div>

        <button className="stress-btn" onClick={handleNext}>
          Continue
        </button>
      </div>

      {/* IMAGE OUTSIDE CARD */}
      <img
        src={imgCharacter3}
        className="stress-img"
        alt="character"
      />
    </div>
  );
}