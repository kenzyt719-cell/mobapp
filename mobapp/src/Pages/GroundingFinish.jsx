// GroundingFinish.jsx
import React from "react";
import "./GroundingFinish.css";
import characterfinish from "../Assets/chacterfnish.png";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";

const GroundingFinish = () => {
  return (
    <div className="finish-container">
      <BottomNav />

      <div className="finish-header">
        <p className="finish-back">←</p>

        <div className="finish-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>


      <div className="finish-tabs">
         
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


      <div className="finish-step">
        <h2>Step 5 of 5</h2>
        <p>100%</p>
      </div>

      <div className="finish-progress">
        <div className="finish-progress-fill"></div>
      </div>


      <div className="finish-text">
        <h1>You have completed the grounding exercise</h1>
      </div>

 
      <div className="finish-circle">
        <h1>100/100</h1>
      </div>


      <div className="finish-btn">
        <p>Done</p>
      </div>


      <div className="finish-character">
        <img src={characterfinish} alt="finish" />
      </div>
    </div>
  );
};

export default GroundingFinish;