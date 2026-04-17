import React from "react";
import "./UpcomingExams.css";

const UpcomingExams = () => {
  return (
    <div className="exam-card">
      <div className="header">
        <h3>Upcoming Exams</h3>
        <span>View Calendar</span>
      </div>

      <div className="exam-box">
        <div>
          <h4>Math</h4>
          <p>Quiz</p>
        </div>
        <span className="date">March 15</span>
      </div>

      <div className="exam-box">
        <div>
          <h4>Science</h4>
          <p>Exam</p>
        </div>
        <span className="date">March 18</span>
      </div>
    </div>
  );
};

export default UpcomingExams;