import React, { useState } from "react";

export default function SubjectsStart({ onNext }) {
  const [subjects, setSubjects] = useState([]);

  const toggle = (s) => {
    setSubjects((prev) =>
      prev.includes(s)
        ? prev.filter(x => x !== s)
        : [...prev, s]
    );
  };

  const handleNext = () => {
    onNext(subjects);
  };

  return (
    <div className="container">
      <h2>Select Subjects</h2>

      {["Math","Science","English"].map(s => (
        <div
          key={s}
          className={`card ${subjects.includes(s) ? "active" : ""}`}
          onClick={() => toggle(s)}
        >
          {s}
        </div>
      ))}

      <img src="/imgcharcgter2.png" className="charImg" />

      <div className="btn" onClick={handleNext}>
        Continue
      </div>
    </div>
  );
}