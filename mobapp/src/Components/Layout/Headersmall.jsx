import React from "react";
import "./Headersmall.css";
import arrow01 from "../../Assets/arrow01.png";

const Headersmall = ({ title1, title2 }) => {
  return (
    <>
      <div className="divup">
        <img className="styleimg1i" src={arrow01} alt="header" />

        <div>
          <h1 className="titleupp">{title1}</h1>
          <h1 className="titleupp2">{title2}</h1>
        </div>
      </div>
    </>
  );
};

export default Headersmall;