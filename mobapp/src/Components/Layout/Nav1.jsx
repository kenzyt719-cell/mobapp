import React, { useEffect, useState } from "react";
import "./Nav1.css";

import handIcon from "../../Assets/handicon.png";
import img1 from "../../Assets/img1.png";

const Nav1 = () => {
  const [progress, setProgress] = useState(0);
  const [showChar, setShowChar] = useState(false);

  // animate progress
  useEffect(() => {
    setTimeout(() => setProgress(65), 300);
  }, []);

  // character appear / disappear loop
  useEffect(() => {
    const interval = setInterval(() => {
      setShowChar((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav1-container">
      
      <div className="nav1-header">
        <div className="nav1-text">
          <h1>
            Hello, Ahmed!
            <img src={handIcon} alt="hand" className="hand-icon" />
          </h1>
          <p>Tuesday, March 10, 2026</p>
        </div>

        <div className="nav1-bell">
          <div className="bell-icon">🔔</div>
          <span className="notif">1</span>
        </div>
      </div>

      <div className="progress-card">
        <div className="progress-top">
          <p>Study Progress</p>
          <p>{progress}%</p>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="progress-text">
          Great work this week! Keep it up! ✨
        </p>

        <img
          src={img1}
          alt="character"
          className={`character-img ${showChar ? "show" : ""}`}
        />
      </div>

    </div>
  );
};

export default Nav1;