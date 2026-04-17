import React from "react";
import "./SubjectProgress.css";

const subjects = [
  { name: "Math", progress: 80, color: "#3b82f6" },
  { name: "Science", progress: 60, color: "#22c55e" },
  { name: "English", progress: 90, color: "#a855f7" },
  { name: "Arabic", progress: 50, color: "#f59e0b" },
  { name: "History", progress: 40, color: "#ef4444" },
];

const SubjectProgress = () => {
  return (
    <div className="progress-card">
      <h3>Subject Progress</h3>

      {subjects.map((sub, index) => (
        <div key={index} className="subject">
          <div className="top">
            <span>{sub.name}</span>
            <span>{sub.progress / 10}/10 sessions</span>
          </div>

          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{
                width: `${sub.progress}%`,
                background: sub.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectProgress;