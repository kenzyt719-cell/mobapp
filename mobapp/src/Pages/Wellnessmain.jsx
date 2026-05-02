import React from "react";
import Headersmall from "../Components/Layout/Headersmall";
import Buttonyellow from "../Components/Layout/Buttonyellow";
import "./Wellnessmain.css";

import BottomNav from "../Components/Layout/BottomNav";

import { Link } from "react-router-dom";

const Wellnessmain = () => {

  const handleClick = () => {
    console.log("Start clicked");
  
  };

  return (
    <div className="home">
      <BottomNav />

      <Headersmall
        title1="Wellness & Stress Relief"
        title2="Take care of your mind"
      />

      <div>
        <h1 className="h1well">Choose your exercise</h1>
      </div>

      <div className="boxseswell">
        <div className="boxwell">

           <Link to="/SmartLessonFinder" >
          <h1 className="boxwellhw">Breathing</h1>
           
                     </Link> 
        </div>

        <div className="boxwell">

              <Link to="/Grounding" >
          <h1 className="boxwellhw">Grounding</h1>



           
                     </Link> 
        </div>

        <div className="boxwell">

            <Link to="/Mood" >
          <h1 className="boxwellhw">Mood</h1>


           
                     </Link> 
        </div>








        <div className="boxwell">
           <Link to="/Focus" >
          <h1 className="boxwellhw">Focus</h1>

           
                     </Link> 
        </div>
      </div>

<div className="buttonymargin">
      <Buttonyellow text="Start" onClick={handleClick} />

</div>

    </div>
  );
};

export default Wellnessmain;