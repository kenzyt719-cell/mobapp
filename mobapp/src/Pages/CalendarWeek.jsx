import React from "react";
import "./CalendarWeek.css";
import { Link } from "react-router-dom";

const CalendarWeek = () => {
  return (
    <div className="calendar-week-container">

      <div className="cw-header">
        <div className="cw-back">←</div>

        <div className="cw-title">
          <h1>Calender</h1>
          <p>Schedule & Events</p>
        </div>
      </div>


      <div className="cw-month-nav">
        <div className="cw-arrow">‹</div>
        <h3>February 2026</h3>
        <div className="cw-arrow">›</div>
      </div>

<div className="calendarToggleWrap">

    <div className="calendarTab calendarTabActive">Week View</div>

  <Link
    to="/CalendarMonth"
    style={{
      textDecoration: "none",
      width: "50%",
    }}
    className="calendarToggleLink"
  >
  <div className="calendarTab ">Month View</div>
  </Link>
</div>


      <div className="cw-day-card">
        <div className="cw-day-top">
          <div className="cw-date-box">
            <span>Mon</span>
            <h4>10</h4>
          </div>

          <h2>Monday</h2>
        </div>

        <div className="cw-event blue">
          <p>2:00 PM</p>
          <h4>Math Study</h4>
        </div>

        <div className="cw-event green">
          <p>4:00 PM</p>
          <h4>Science Homework</h4>
        </div>
      </div>

      {/* Tuesday */}
      <div className="cw-day-card">
        <div className="cw-day-top">
          <div className="cw-date-box purple-box">
            <h4>11</h4>
          </div>

          <h2>Tuesday</h2>
        </div>

        <div className="cw-event purple">
          <p>3:00 PM</p>
          <h4>English Essay</h4>
        </div>
      </div>

      
      <div className="cw-day-card">
        <div className="cw-day-top">
          <div className="cw-date-box">
            <h4>12</h4>
          </div>

          <h2>Wednesday</h2>
        </div>

        <div className="cw-event yellow">
          <p>10:00 AM</p>
          <h4>School Assembly</h4>
        </div>
      </div>

    
      <div className="cw-day-card">
        <div className="cw-day-top">
          <div className="cw-date-box">
            <h4>13</h4>
          </div>

          <h2>Thursday</h2>
        </div>

        <div className="cw-event blue">
          <p>2:00 PM</p>
          <h4>Math Study</h4>
        </div>
      </div>


      <div className="cw-day-card">
        <div className="cw-day-top">
          <div className="cw-date-box">
            <h4>14</h4>
          </div>

          <h2>Friday</h2>
        </div>

        <div className="cw-event red">
          <p>1:00 PM</p>
          <h4>Math Quiz</h4>
        </div>
      </div>


      <div className="cw-btn">＋ Add Event</div>


      <div className="cw-quick">
        <h3>Quick Add</h3>

        <div className="cw-tags">
          <div className="tag blue-tag">+ Study Session</div>
          <div className="tag green-tag">+ Homework</div>
          <div className="tag red-tag">+ Quiz/Exam</div>
          <div className="tag yellow-tag">+ School Event</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWeek;