import React, { useState } from "react";
import "./Grounding.css";
import { supabase } from "../supabaseClient";

import { Link } from "react-router-dom";

const Grounding = () => {
  const [seeitem1, setSeeitem1] = useState("");
  const [seeitem2, setSeeitem2] = useState("");
  const [seeitem3, setSeeitem3] = useState("");
  const [seeitem4, setSeeitem4] = useState("");
  const [seeitem5, setSeeitem5] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Grounding")
      .insert([
        {
          seeitem1,
          seeitem2,
          seeitem3, 
          seeitem4,
          seeitem5,
        },
      ]);

    if (error) {
      console.log("Error:", error.message);
    } else {
      console.log("Saved:", data);

      setSeeitem1("");
      setSeeitem2("");
      setSeeitem3("");
      setSeeitem4("");
      setSeeitem5("");
    }
  };

  return (
    <div className="grounding-container">

      <div className="grounding-header">
        <p className="grounding-back">←</p>

        <div className="grounding-header-text">
          <h1>Grounding</h1>
          <p>Take care of your mind</p>
        </div>
      </div>


      <div className="steps-tabs">
        <div className="steps-tab">Breathing</div>
        <div className="steps-tab active">Grounding</div>
        <div className="steps-tab">Focus</div>
        <div className="steps-tab">Mood</div>
      </div>


      <div className="grounding-step">
        <h2>Step 1 of 5</h2>
        <p>20%</p>
      </div>

      <div className="grounding-progress">
        <div className="grounding-progress-fill"></div>
      </div>


      <div className="grounding-circle">
        <h1>5</h1>
      </div>


      <div className="grounding-text">
        <h1>5 Things You See</h1>
        <p>Look around and name 5 things you can see</p>
      </div>


      <div className="grounding-inputs">
        <input
          className="grounding-box"
          placeholder="Item 1"
          value={seeitem1}
          onChange={(e) => setSeeitem1(e.target.value)}
        />

        <input
          className="grounding-box"
          placeholder="Item 2"
          value={seeitem2}
          onChange={(e) => setSeeitem2(e.target.value)}
        />

        <input
          className="grounding-box"
          placeholder="Item 3"
          value={seeitem3}
          onChange={(e) => setSeeitem3(e.target.value)}
        />

        <input
          className="grounding-box"
          placeholder="Item 4"
          value={seeitem4}
          onChange={(e) => setSeeitem4(e.target.value)}
        />

        <input
          className="grounding-box"
          placeholder="Item 5"
          value={seeitem5}
          onChange={(e) => setSeeitem5(e.target.value)}
        />
      </div>


     

   < Link to="/GroundingTouch">


      <div className="grounding-btn" onClick={handleSubmit}>
        <p>Next</p>
      </div>

        </Link>


    </div>
  );
};

export default Grounding;