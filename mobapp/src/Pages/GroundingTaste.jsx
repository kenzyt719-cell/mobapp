// GroundingTaste.jsx
import React, { useState } from "react";
import "./GroundingTaste.css";
import { supabase } from "../supabaseClient";

const GroundingTaste = () => {
  const [item, setItem] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Groundingtaste")
      .insert([
        {
          item,
        },
      ]);

    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Saved:", data);
      setItem("");
    }
  };

  return (
    <div className="groundingtaste-container">
      <div className="groundingtaste-header">
        <p className="groundingtaste-back">←</p>

        <div className="groundingtaste-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>

      <div className="taste-tabs">
        <div className="taste-tab">Breathing</div>
        <div className="taste-tab active">Grounding</div>
        <div className="taste-tab">Focus</div>
        <div className="taste-tab">Mood</div>
      </div>

      <div className="groundingtaste-step">
        <h2>Step 5 of 5</h2>
        <p>100%</p>
      </div>

      <div className="groundingtaste-progress">
        <div className="groundingtaste-progress-fill"></div>
      </div>

      <div className="groundingtaste-circle">
        <h1>1</h1>
      </div>

      <div className="groundingtaste-text">
        <h1>1 Thing You Taste</h1>
        <p>Notice one taste in your mouth or something you can taste now</p>
      </div>

      <div className="groundingtaste-inputs">
        <input
          className="groundingtaste-box"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div className="groundingtaste-btn" onClick={handleSubmit}>
        <p>Finish</p>
      </div>
    </div>
  );
};

export default GroundingTaste;