import React from "react";
import "./PlanTabs2.css";
import { Link } from "react-router-dom";

const PlanTabs2 = () => {
  return (
    <div className="tabsContainer">
      <div className="tabs">
   <Link to="/todays-plan" style={{ textDecoration: "none" }}>
        
        <p className="active">Today's Plan</p>
</Link>
   <Link to="/weekly-plan" style={{ textDecoration: "none" }}>
       
        <p >Weekly Plan</p>
</Link>

      </div>

      <div className="dateRow">
        <p className="arrow">‹</p>
        <h2>Feb 11 - Feb 17</h2>
        <p className="arrow">›</p>
      </div>

   <Link to="/CalendarMonth" style={{ textDecoration: "none" }}>
  <div className="calendarBtn">
    <p>View Calendar</p>
  </div>
</Link>
    

      <div className="dayRow">
        <h3>Tuesday</h3>
        <p className="edit">Edit</p>
      </div>
    </div>
  );
};

export default PlanTabs2;