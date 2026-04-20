import React from "react";
import "./Headersmall.css";
import arrow01 from "../../Assets/arrow01.png";

const Headersmall = () => {
  return (
<>
 <div className="divup">

       <img className="styleimg1i" src={arrow01} alt="description" />
 <div>
  <h1 className="titleupp">Wellness & Stress Relief</h1>
  <h1 className="titleupp2">Take care of your mind</h1>

 </div>
 </div>
</>
  );
};

export default Headersmall;