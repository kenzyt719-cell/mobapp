// GroundingTouch.jsx
import React, { useState } from "react";
import "./GroundingTouch.css";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";

const GroundingTouch = () => {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("GroundingTouch")
      .insert([
        {
          item1,
          item2,
          item3,
          item4,
        },
      ]);

    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Saved:", data);

      setItem1("");
      setItem2("");
      setItem3("");
      setItem4("");
    }
  };

  return (
    <div className="groundingtouch-container">
            <BottomNav />
      
      <div className="groundingtouch-header">
        <p className="groundingtouch-back">←</p>

        <div className="groundingtouch-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>


 

<div className="touch-tabs">

  
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


      <div className="groundingtouch-step">
        <h2>Step 2 of 5</h2>
        <p>40%</p>
      </div>

      <div className="groundingtouch-progress">
        <div className="groundingtouch-progress-fill"></div>
      </div>


      <div className="groundingtouch-circle">
        <h1>4</h1>
      </div>


      <div className="groundingtouch-text">
        <h1>4 Things You Touch</h1>
        <p>Notice 4 things around you that you can touch</p>
      </div>


      <div className="groundingtouch-inputs">
        <input
          className="groundingtouch-box"
          placeholder="Item 1"
          value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />

        <input
          className="groundingtouch-box"
          placeholder="Item 2"
          value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />

        <input
          className="groundingtouch-box"
          placeholder="Item 3"
          value={item3}
          onChange={(e) => setItem3(e.target.value)}
        />

        <input
          className="groundingtouch-box"
          placeholder="Item 4"
          value={item4}
          onChange={(e) => setItem4(e.target.value)}
        />
      </div>


   < Link to="/GroundingHear">

<div className="groundingtouch-btn" onClick={handleSubmit}>
        <p>Next</p>
      </div>
        </Link>

      
    </div>
  );
};

export default GroundingTouch;