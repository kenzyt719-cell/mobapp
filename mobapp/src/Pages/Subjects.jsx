import React, { useState } from "react";
import "./Onboarding.css";

export default function Subjects({ onNext }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const subjects = [
    "Math","Science","English","Arabic",
    "History","Geography","Art","PE"
  ];

  const toggle = (sub) => {
    setSelectedSubjects(prev =>
      prev.includes(sub)
        ? prev.filter(s => s !== sub)
        : [...prev, sub]
    );
  };

  return (
    <div className="container">
      <div className="progress">
        <div className="bar active"></div>
        <div className="bar active"></div>
        <div className="bar"></div>
      </div>

      <h2 className="title">Which subjects need more help?</h2>
      <p className="subtitle">We’ll focus on these together</p>

      <div className="grid">
        {subjects.map(sub => (
          <div
            key={sub}
            className={`card ${selectedSubjects.includes(sub) ? "active" : ""}`}
            onClick={() => toggle(sub)}
          >
            {sub}
          </div>
        ))}
      </div>

      <div className="btn" onClick={() => onNext(selectedSubjects)}>
        Continue
      </div>

      <img src="/characterimg1.png" className="charImg" />
    </div>
  );
}