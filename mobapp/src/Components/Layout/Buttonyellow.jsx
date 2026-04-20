import React from "react";
import "./Buttonyellow.css";

const Buttonyellow = ({ text = "Next", onClick, disabled = false }) => {
  return (
    <button
      className={`yellowbuttonn ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="textbuttonyelloo">{text}</span>
    </button>
  );
};

export default Buttonyellow;