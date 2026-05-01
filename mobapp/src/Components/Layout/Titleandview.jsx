import React from "react";
import "./Titleandview.css";

const Titleandview = ({ title, actionText, onActionClick }) => {
  return (
    <div className="titledivs">
      <h1 className="tileandviewh1">{title}</h1>

      <h2
        className="tileandviewh2"
        onClick={onActionClick}
      >
        {actionText}
      </h2>
    </div>
  );
};

export default Titleandview;