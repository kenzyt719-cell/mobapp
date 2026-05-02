// BreathingStart.jsx
import React from "react";
import "./BreathingStart.css";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";

const BreathingStart = () => {
  return (

      <div className="mainbreathdiv">
          <BottomNav />
    
    <div className="breathing-start-screen ">



      <div className="breathing-tabs">
        <Link
      
    to="/BreathingStart"
      
          className="touch-tab"
      
          style={{ textDecoration: "none",  }}
      
        >
      
          Breathing
      
        </Link>
      
        <Link
      
          to="/Grounding"
      
          className="touch-tab active"
      
          style={{ textDecoration: "none",  }}
      
        >
      
          Grounding
      
        </Link>
      
        <Link
      
          to="/Focus"
      
          className="touch-tab"
      
          style={{ textDecoration: "none", }}
      
        >
      
          Focus
      
        </Link>
      
        <Link
      
          to="/Mood"
      
          className="touch-tab"
      
          style={{ textDecoration: "none",  }}
      
        >
      
          Mood
      
        </Link>
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
          </div>
  );
};

export default BreathingStart;