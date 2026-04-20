// BreathingStart.jsx
import React from "react";
import "./BreathingStart.css";

const BreathingStart = () => {
  return (
    <div className="start-screen">

      <div className="tabs">
        <div className="tab active">Breathing</div>
        <div className="tab">Grounding</div>
        <div className="tab">Focus</div>
        <div className="tab">Mood</div>
      </div>

      <div className="card">
        <h1>Breathing Exercise</h1>
        <p>4-4-4 breathing technique to reduce stress</p>

        <div className="ready-circle">
          <h2>Ready</h2>
        </div>

        <button>Start Breathing Exercise</button>

        <div className="info-box">
          <h3>How it works:</h3>
          <p>• Breathe in for 4 seconds</p>
          <p>• Hold for 4 seconds</p>
          <p>• Breathe out for 4 seconds</p>
          <p>• Repeat for 5 minutes</p>
        </div>
      </div>

    </div>
  );
};

export default BreathingStart;