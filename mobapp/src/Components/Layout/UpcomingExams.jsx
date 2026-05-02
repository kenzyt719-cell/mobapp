import React from "react";
import "./UpcomingExams.css";
import Titleandview from "../../Components/Layout/Titleandview";

const UpcomingExams = () => {
  return (
    <div className="upcoming-exams-wrapper">
      
      <Titleandview
        title="Upcoming Events"
        actionText="View All"
      />

      <div className="exam-card">

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
    </div>
  );
};

export default UpcomingExams;