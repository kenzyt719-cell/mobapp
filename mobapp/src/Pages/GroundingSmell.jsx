// GroundingSmell.jsx
import React, { useState } from "react";
import "./GroundingSmell.css";
import { supabase } from "../supabaseClient";

const GroundingSmell = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Groundinghear")
      .insert([
        {
          item1,
          item2,
        },
      ]);

    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Saved:", data);

      setItem1("");
      setItem2("");
    }
  };

  return (
    <div className="groundingsmell-container">
      <div className="groundingsmell-header">
        <p className="groundingsmell-back">←</p>

        <div className="groundingsmell-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>

      <div className="smell-tabs">
        <div className="smell-tab">Breathing</div>
        <div className="smell-tab active">Grounding</div>
        <div className="smell-tab">Focus</div>
        <div className="smell-tab">Mood</div>
      </div>

      <div className="groundingsmell-step">
        <h2>Step 4 of 5</h2>
        <p>80%</p>
      </div>

      <div className="groundingsmell-progress">
        <div className="groundingsmell-progress-fill"></div>
      </div>

      <div className="groundingsmell-circle">
        <h1>2</h1>
      </div>

      <div className="groundingsmell-text">
        <h1>2 Things You Smell</h1>
        <p>Notice 2 scents around you right now</p>
      </div>

      <div className="groundingsmell-inputs">
        <input
          className="groundingsmell-box"
          placeholder="Item 1"
          value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />

        <input
          className="groundingsmell-box"
          placeholder="Item 2"
          value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />
      </div>

      <div className="groundingsmell-btn" onClick={handleSubmit}>
        <p>Next</p>
      </div>
    </div>
  );
};

export default GroundingSmell;