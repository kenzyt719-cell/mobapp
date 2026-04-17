import React from "react";
import "./StudyHeader.css";

const StudyHeader = () => {
  return (
    <div className="header">
      <div className="top">
        <p className="back">←</p>
        <div>
          <h1 className="title">Study Plan</h1>
          <p className="sub">AI-Generated Schedule</p>
        </div>
      </div>

      <div className="timerBox">
        <p className="timerTitle">Study Session Timer</p>
        <h1 className="time">25:00</h1>

        <div className="actions">
          <div className="play">▶</div>
          <div className="reset">↺</div>
        </div>
      </div>
    </div>
  );
};

export default StudyHeader;