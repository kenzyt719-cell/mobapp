
import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";

import iconCalendarnav from "../../Assets/icon-calendarnav.svg";
import iconProfilenav from "../../Assets/icon-profilenav.svg";
import iconHomenav from "../../Assets/icon-homenav.svg";
import iconSchoolnav from "../../Assets/icon-schoolnav.svg";
import iconWellnessnav from "../../Assets/icon-wellnessnav.svg";

export default function BottomNav() {
  return (
    <div className="bottomNavContainer">

      <Link to="/CalendarWeek" className="bottomNavItem">
        <img src={iconCalendarnav} alt="Calendar" className="bottomNavIcon" />
        <p className="bottomNavText">Calendar</p>
      </Link>

      <Link to="/profile" className="bottomNavItem">
        <img src={iconProfilenav} alt="Profile" className="bottomNavIcon" />
        <p className="bottomNavText">Profile</p>
      </Link>

      <Link to="/home" className="bottomNavItem activeBottomNav">
        <img src={iconHomenav} alt="Home" className="bottomNavIcon" />
        <p className="bottomNavText">Home</p>
      </Link>

      <Link to="/school" className="bottomNavItem">
        <img src={iconSchoolnav} alt="School" className="bottomNavIcon" />
        <p className="bottomNavText">School</p>
      </Link>

      <Link to="/Wellnessmain" className="bottomNavItem">
        <img src={iconWellnessnav} alt="Wellness" className="bottomNavIcon" />
        <p className="bottomNavText">Wellness</p>
      </Link>

    </div>
  );
}