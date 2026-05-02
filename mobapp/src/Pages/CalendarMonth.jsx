import React from "react";
import "./CalendarMonth.css";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";

const CalendarMonth = () => {
  return (
    <div className="calendar-container">
 
      <BottomNav />

      <div className="calendar-header">
        <div className="back">←</div>

        <div>
          <h1>Calender</h1>
          <p>Schedule & Events</p>
        </div>
      </div>


      <div className="month-nav">
        <div className="arrow">‹</div>
        <h3>February 2026</h3>
        <div className="arrow">›</div>
      </div>



      <div className="toggle">
          <Link

  to="/CalendarWeek"

  style={{

    textDecoration: "none",



    width: "50%",

  }}

>

        <div className="tab">Week View</div>
     </Link>
        <div className="tab active">Month View</div>
      </div>


      <div className="weekdays">
        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
        <span>Thu</span><span>Fri</span><span>Sat</span>
      </div>

      <div className="grid">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={`day ${i === 10 ? "active" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>



      <h3 className="section-title">Upcoming Events</h3>

      <div className="event-card">
        <p className="tag exam">EXAM</p>
        <h4>Physics Exam</h4>
        <small>Feb 15, 2026 • 09:00 AM</small>
      </div>

      <div className="event-card">
        <p className="tag task">TASK</p>
        <h4>Submit Math Assignment</h4>
        <small>Feb 17, 2026 • Due date</small>
      </div>

      <div className="event-card">
        <p className="tag exam">EXAM</p>
        <h4>Math Exam</h4>
        <small>Feb 18, 2026 • 10:00 AM</small>
      </div>

 
      <div className="add-btn">+ Add Event</div>


      <div className="quick">
        <h3>Quick Add</h3>
        <div className="chips">
          <span>+ Study Session</span>
          <span>+ Homework</span>
          <span>+ Quiz/Exam</span>
          <span>+ School Event</span>
        </div>
      </div>

    </div>
  );
};

export default CalendarMonth;