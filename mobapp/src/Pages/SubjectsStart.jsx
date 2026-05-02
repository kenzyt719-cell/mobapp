import React, { useState } from "react";
import "./SubjectsStart.css";

// ✅ FIXED IMAGE IMPORT (make sure file is inside src/Assets)
import imgCharacter2 from "../Assets/imgcharcgter2.png";

export default function SubjectsStart({ onNext }) {
  const [subjects, setSubjects] = useState([]);

  const toggle = (s) => {
    setSubjects((prev) =>
      prev.includes(s)
        ? prev.filter((x) => x !== s)
        : [...prev, s]
    );
  };

  const handleNext = () => {
    onNext(subjects);
  };

  return (
    <div className="subjects-page">
      
      {/* CARD */}
      <div className="subjects-card">
        <h2 className="subjects-title">Select Subjects</h2>

        <div className="subjects-list">
          {["Math", "Science", "English"].map((s) => (
            <div
              key={s}
              className={`subject-card ${
                subjects.includes(s) ? "active" : ""
              }`}
              onClick={() => toggle(s)}
            >
              {s}
            </div>
          ))}
        </div>

        <button className="subjects-btn" onClick={handleNext}>
          Continue
        </button>
      </div>

      {/* 👇 IMAGE OUTSIDE CARD */}
      <img
        src={imgCharacter2}
        className="subjects-img"
        alt="character"
      />
    </div>
  );
}