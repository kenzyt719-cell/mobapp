// GroundingHear.jsx
import React, { useState } from "react";
import "./GroundingHear.css";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const GroundingHear = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Groundinghear")
      .insert([
        {
          item1,
          item2,
          item3,
        },
      ]);

    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Saved:", data);

      setItem1("");
      setItem2("");
      setItem3("");
    }
  };

  return (
    <div className="groundinghear-container">

      <div className="groundinghear-header">
        <p className="groundinghear-back">←</p>

        <div className="groundinghear-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>


      <div className="hear-tabs">
        
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


      <div className="groundinghear-step">
        <h2>Step 3 of 5</h2>
        <p>60%</p>
      </div>

      <div className="groundinghear-progress">
        <div className="groundinghear-progress-fill"></div>
      </div>

      <div className="groundinghear-circle">
        <h1>3</h1>
      </div>


      <div className="groundinghear-text">
        <h1>3 Things You Hear</h1>
        <p>Pause and name 3 sounds you can hear around you</p>
      </div>


      <div className="groundinghear-inputs">
        <input
          className="groundinghear-box"
          placeholder="Item 1"
          value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />

        <input
          className="groundinghear-box"
          placeholder="Item 2"
          value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />

        <input
          className="groundinghear-box"
          placeholder="Item 3"
          value={item3}
          onChange={(e) => setItem3(e.target.value)}
        />
      </div>


   < Link to="/GroundingSmell">

  <div className="groundinghear-btn" onClick={handleSubmit}>
        <p>Next</p>
      </div>
        </Link>

    
    </div>
  );
};

export default GroundingHear;