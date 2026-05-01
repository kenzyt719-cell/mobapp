import React from "react";
import "./TodayTimetable.css";

export default function TodayTimetable() {
  return (
    <div className="tt-card">

      <div className="tt-title">
        <span className="tt-icon">📘</span>
        <h2>Today's Timetable</h2>
      </div>

      <div className="tt-list">

        <div className="tt-item purple">
          <div>
            <h3>Math</h3>
            <p>Mr. Ahmed • Room A101</p>
          </div>
          <span>8:00 - 9:00</span>
        </div>

        <div className="tt-item lavender">
          <div>
            <h3>Science</h3>
            <p>Ms. Sara • Room B205</p>
          </div>
          <span>9:00 - 10:00</span>
        </div>

        <div className="tt-item purple">
          <div>
            <h3>English</h3>
            <p>Mrs. Fatima • Room C303</p>
          </div>
          <span>10:00 - 11:00</span>
        </div>

        <div className="tt-item break">
          <div>
            <h3>Break</h3>
            <p>-</p>
          </div>
          <span>11:00 - 12:00</span>
        </div>

        <div className="tt-item purple">
          <div>
            <h3>Arabic</h3>
            <p>Mr. Omar • Room A102</p>
          </div>
          <span>12:00 - 1:00</span>
        </div>

      </div>
    </div>
  );
}