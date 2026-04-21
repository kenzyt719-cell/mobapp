// GroundingFinish.jsx
import React from "react";
import "./GroundingFinish.css";
import characterfinish from "../Assets/chacterfnish.png";

const GroundingFinish = () => {
  return (
    <div className="finish-container">
      {/* Header */}
      <div className="finish-header">
        <p className="finish-back">←</p>

        <div className="finish-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="finish-tabs">
        <div className="finish-tab">Breathing</div>
        <div className="finish-tab active">Grounding</div>
        <div className="finish-tab">Focus</div>
        <div className="finish-tab">Mood</div>
      </div>

      {/* Progress */}
      <div className="finish-step">
        <h2>Step 5 of 5</h2>
        <p>100%</p>
      </div>

      <div className="finish-progress">
        <div className="finish-progress-fill"></div>
      </div>

      {/* Text */}
      <div className="finish-text">
        <h1>You have completed the grounding exercise</h1>
      </div>

      {/* Score Circle */}
      <div className="finish-circle">
        <h1>100/100</h1>
      </div>

      {/* Button */}
      <div className="finish-btn">
        <p>Done</p>
      </div>

      {/* Character */}
      <div className="finish-character">
        <img src={characterfinish} alt="finish" />
      </div>
    </div>
  );
};

export default GroundingFinish;