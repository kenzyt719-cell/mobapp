import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = ({ time, title, subtitle }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className={`task-card ${checked ? "checked" : ""}`}>
      
      {/* Time Box */}
      <div className="time-box">
        <h2>{time}</h2>
      </div>

      {/* Text Content */}
      <div className="task-content">
        <h2 className="task-title">{title}</h2>
        <p className="task-subtitle">{subtitle}</p>
      </div>

      {/* Checkbox */}
      <div 
        className={`task-check ${checked ? "active" : ""}`} 
        onClick={toggleCheck}
      >
        {checked && <span>✓</span>}
      </div>

    </div>
  );
};

export default TaskCard;