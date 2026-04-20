import React from "react";
import Headersmall from "../Components/Layout/Headersmall";
import Buttonyellow from "../Components/Layout/Buttonyellow";
import "./Wellnessmain.css";

const Wellnessmain = () => {

  const handleClick = () => {
    console.log("Start clicked");
    // ممكن هنا تعمل navigate أو أي action
  };

  return (
    <div className="home">

      <Headersmall
        title1="Wellness & Stress Relief"
        title2="Take care of your mind"
      />

      <div>
        <h1 className="h1well">Choose your exercise</h1>
      </div>

      <div className="boxseswell">
        <div className="boxwell">
          <h1 className="boxwellhw">Breathing</h1>
        </div>

        <div className="boxwell">
          <h1 className="boxwellhw">Grounding</h1>
        </div>

        <div className="boxwell">
          <h1 className="boxwellhw">Mood</h1>
        </div>

        <div className="boxwell">
          <h1 className="boxwellhw">Focus</h1>
        </div>
      </div>

<div className="buttonymargin">
      <Buttonyellow text="Start" onClick={handleClick} />

</div>

    </div>
  );
};

export default Wellnessmain;