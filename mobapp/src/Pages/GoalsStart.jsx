import React, { useState } from "react";
import "./GoalsStart.css";

export default function GoalsStart({ onSubmit }) {
  const [hours, setHours] = useState("");
  const [grade, setGrade] = useState("");
  const [challenge, setChallenge] = useState("");

  const finish = () => {
    if (!hours || !grade || !challenge)
      return alert("Fill all fields");

    onSubmit({
      study_per_day: hours,
      target_grade: grade,
      biggest_challenge: challenge,
    });
  };

  const options = ["Practice", "Reading", "Videos", "Listening"];

  return (
    <div className="goals-page">

      {/* progress */}
      <div className="progress">
        <div className="bar active"></div>
        <div className="bar active"></div>
        <div className="bar"></div>
      </div>

      <div className="goals-card">

        <h2 className="title">Study hours per day</h2>
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="input"
        />

        <h2 className="title">Target grade average</h2>
        <input
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="input"
        />

        <h2 className="title">What’s your biggest challenge?</h2>

        <div className="list">
          {options.map((o) => (
            <div
              key={o}
              className={`item ${challenge === o ? "active" : ""}`}
              onClick={() => setChallenge(o)}
            >
              {o}
            </div>
          ))}
        </div>

        {/* FIXED BUTTON */}
        <button className="btn" onClick={finish}>
          Continue
        </button>

      </div>
    </div>
  );
}