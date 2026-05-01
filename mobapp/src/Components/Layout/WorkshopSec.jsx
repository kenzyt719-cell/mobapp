import "./WorkshopSec.css";

import workshopImg from "../../Assets/picpicpic.png";
import calendarIcon from "../../Assets/calendar.png";
import clockIcon from "../../Assets/clock.png";
import locationIcon from "../../Assets/location.png";

export default function WorkshopSec() {
  return (
    <div className="workshop-card">
      <img src={workshopImg} alt="workshop" className="workshop-img" />

      <h3 className="title">Math Problem Solving Workshop</h3>

      <div className="info">
        <div className="row">
          <img src={calendarIcon} className="icon" alt="" />
          <p>March 15, 2026</p>
        </div>

        <div className="row">
          <img src={clockIcon} className="icon" alt="" />
          <p>3:00 PM - 5:00 PM</p>
        </div>

        <div className="row">
          <img src={locationIcon} className="icon" alt="" />
          <p>Online</p>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="badge">Grades 7-9</span>
          <span className="spots">12 spots left</span>
        </div>

        <button className="join-btn">Join</button>
      </div>
    </div>
  );
}