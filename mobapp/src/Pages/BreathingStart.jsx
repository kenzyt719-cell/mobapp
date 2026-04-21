// BreathingStart.jsx
import React from "react";
import "./BreathingStart.css";

const BreathingStart = () => {
  return (
    <div className="breathing-start-screen">
      <div className="breathing-tabs">
        <div className="breathing-tab active">Breathing</div>
        <div className="breathing-tab">Grounding</div>
        <div className="breathing-tab">Focus</div>
        <div className="breathing-tab">Mood</div>
      </div>

      <div className="breathing-card">
        <h1 className="breathing-title">Breathing Exercise</h1>
        <p className="breathing-subtitle">
          4-4-4 breathing technique to reduce stress
        </p>

        <div className="ready-circle">
          <p>Ready</p>
        </div>

        <button className="start-btn">Start Breathing Exercise</button>

        <div className="how-box">
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