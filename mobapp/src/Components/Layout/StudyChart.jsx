import React from "react";
import "./StudyChart.css";

const StudyChart = () => {
  return (
    <div className="study-card">
      <div className="bars">
        <div className="bar-item">
          <div className="bar bar1"></div>
          <p>Mon</p>
        </div>

        <div className="bar-item">
          <div className="bar bar2"></div>
          <p>Tue</p>
        </div>

        <div className="bar-item">
          <div className="bar bar3"></div>
          <p>Wed</p>
        </div>

        <div className="days">
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
          <p>Sun</p>
        </div>
      </div>

      <p className="avg-text">45 min average study time</p>
    </div>
  );
};

export default StudyChart;