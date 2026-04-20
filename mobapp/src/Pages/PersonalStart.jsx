import React, { useState } from "react";
import "./PersonalStart.css";

export default function PersonalStart({ onNext }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");

  const handleNext = () => {
    if (!name || !age || !school || !grade) {
      alert("Fill all fields");
      return;
    }

    onNext({
      name,
      age,
      school,
      grade,
    });
  };

  return (
    <div className="personal-page">
      <div className="personal-card">
        <h2 className="personal-title">
          Let’s get to know you ✨
        </h2>

        <div className="personal-form">
          <input
            className="personal-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="personal-input"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="personal-input"
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />

          <input
            className="personal-input"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <img src="/imgcharcgter1.png" className="personal-img" alt="" />

        <button className="personal-btn" onClick={handleNext}>
          Continue
        </button>
      </div>
    </div>
  );
}