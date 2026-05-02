// BreathingSteps.jsx
import React from "react";
import "./BreathingSteps.css";
import BottomNav from "../Components/Layout/BottomNav";

const BreathingSteps = () => {
  return (
          <div className="mainbreathdiv{">
                  <BottomNav />
            
    <div className="steps-screen">

      <div className="steps-tabs">
        <div className="steps-tab active">Breathing</div>
        <div className="steps-tab">Grounding</div>
        <div className="steps-tab">Focus</div>
        <div className="steps-tab">Mood</div>
      </div>

      <div className="steps-card">
        <h1 className="steps-title">Breathing Exercise</h1>
        <p className="steps-subtitle">
          4-4-4 breathing technique to reduce stress
        </p>

        <div className="outline-circle"></div>

        <h2 className="main-breathing-title">4-4-4 Breathing</h2>

        <div className="instruction-box">
          <div className="step-row">
            <div className="step-number">1</div>
            <div>
              <h3>Inhale</h3>
              <p>Breathe in slowly for 4 seconds</p>
            </div>
          </div>

          <div className="step-row">
            <div className="step-number">2</div>
            <div>
              <h3>Hold</h3>
              <p>Hold your breath for 4 seconds</p>
            </div>
          </div>

          <div className="step-row">
            <div className="step-number">3</div>
            <div>
              <h3>Exhale</h3>
              <p>Breathe out slowly for 4 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BreathingSteps;