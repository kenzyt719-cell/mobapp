import React from "react";
import "./CommonButton.css";

const CommonButton = ({ text, onClick }) => {
  return (
    <button className="common-btn" onClick={onClick}>
      <span className="icon">+</span>
      <p>{text}</p>
    </button>
  );
};

export default CommonButton;