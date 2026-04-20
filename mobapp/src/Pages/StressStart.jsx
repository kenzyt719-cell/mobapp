import React, { useState } from "react";

export default function StressStart({ onNext }) {
  const [selected, setSelected] = useState("");

  const emojis = ["😊","🙂","😐","😟","😰"];

  const handleNext = () => {
    if (!selected) return alert("Select feeling");
    onNext(selected);
  };

  return (
    <div className="container">

      <h2>Stress level</h2>

      <div className="emojiBox">
        {emojis.map(e => (
          <span
            key={e}
            className={selected === e ? "active emoji" : "emoji"}
            onClick={() => setSelected(e)}
          >
            {e}
          </span>
        ))}
      </div>

      <div className="btn" onClick={handleNext}>
        Continue
      </div>

    </div>
  );
}