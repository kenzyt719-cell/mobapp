import React from "react";
import "./GroundingMain.css";
import { Link } from "react-router-dom";

const GroundingMain = () => {
  return (
    <div className="grounding-main-container">


      <div className="gm-header">
        <div className="gm-back">←</div>

        <div className="gm-title">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>

      <div className="gm-tabs">
        <div className="gm-tab">Breathing</div>
        <div className="gm-tab active">Grounding</div>
        <div className="gm-tab">Focus</div>
        <div className="gm-tab">Mood</div>
      </div>


      <div className="gm-card blue">
        <div className="icon">👁</div>
        <div>
          <h3>5 Things You Can See</h3>
          <p>Look around and name 5 things you can see</p>
        </div>
      </div>

      <div className="gm-card purple">
        <div className="icon">✋</div>
        <div>
          <h3>4 Things You Can Touch</h3>
          <p>Notice 4 things you can feel</p>
        </div>
      </div>

      <div className="gm-card green">
        <div className="icon">👂</div>
        <div>
          <h3>3 Things You Can Hear</h3>
          <p>Listen for 3 different sounds</p>
        </div>
      </div>

      <div className="gm-card yellow">
        <div className="icon">👃</div>
        <div>
          <h3>2 Things You Can Smell</h3>
          <p>Notice 2 scents around you</p>
        </div>
      </div>

      <div className="gm-card pink">
        <div className="icon">😊</div>
        <div>
          <h3>1 Thing You Can Taste</h3>
          <p>Focus on 1 taste in your mouth</p>
        </div>
      </div>

   < Link to="/Grounding">

      <div className="gm-btn">Start</div>
        </Link>

    </div>
  );
};

export default GroundingMain;