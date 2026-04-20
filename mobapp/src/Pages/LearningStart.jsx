import React, { useState } from "react";

export default function LearningStart({ onNext }) {
  const [selected, setSelected] = useState("");

  const options = ["Practice","Reading","Videos","Listening"];

  const handleNext = () => {
    if (!selected) return alert("Select option");
    onNext(selected);
  };

  return (
    <div className="container">

      <h2>Learning style</h2>

      <div className="column">
        {options.map(o => (
          <div
            key={o}
            className={`card ${selected === o ? "active" : ""}`}
            onClick={() => setSelected(o)}
          >
            {o}
          </div>
        ))}
      </div>

      <div className="btn" onClick={handleNext}>
        Continue
      </div>

    </div>
  );
}