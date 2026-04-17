import React from "react";
import "./PlanTabs.css";

const PlanTabs = () => {
  return (
    <div className="tabsContainer">
      <div className="tabs">
        <p className="active">Today's Plan</p>
        <p>Weekly Plan</p>
      </div>

      <div className="dateRow">
        <p className="arrow">‹</p>
        <h2>Feb 11 - Feb 17</h2>
        <p className="arrow">›</p>
      </div>

      <div className="calendarBtn">
        <p>View Calendar</p>
      </div>

      <div className="dayRow">
        <h3>Tuesday</h3>
        <p className="edit">Edit</p>
      </div>
    </div>
  );
};

export default PlanTabs;