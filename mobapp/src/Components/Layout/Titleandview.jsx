import React from "react";
import "./Titleandview.css";

const Titleandview = ({ title, actionText, onActionClick }) => {
  return (
    <div className="titledivs">
      <h1 className="tileandviewh1">{title}</h1>
      
      <h1 
        className="tileandviewh2"
        onClick={onActionClick}
        style={{ cursor: "pointer" }}
      >
        {actionText}
      </h1>
    </div>
  );
};

export default Titleandview;