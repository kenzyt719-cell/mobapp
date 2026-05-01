import React from "react";
import "./HomeworkAssignments.css";

export default function HomeworkAssignments() {
  return (
    <div className="hw-card">

      <div className="hw-title">
        <span className="hw-icon">✔</span>
        <h2>Homework Assignments</h2>
      </div>

      <div className="hw-list">

        <div className="hw-item yellow">
          <div className="hw-header">
            <h3>Math</h3>
                <h3>Done</h3>
          </div>
          <p>Chapter 5 exercises (pg. 45–47)</p>
          <small>Due: Tomorrow</small>
        </div>

        <div className="hw-item yellow">
          <div className="hw-header">
            <h3>Science</h3>
            <h3>Done</h3>
         
          </div>
          <p>Lab report on photosynthesis</p>
          <small>Due: March 14</small>
        </div>

        <div className="hw-item green done">
          <div className="hw-header">
            <h3>English ✓</h3>
          </div>
          <p>Essay: My favorite book</p>
          <small>Due: March 15</small>
        </div>

      </div>
    </div>
  );
}