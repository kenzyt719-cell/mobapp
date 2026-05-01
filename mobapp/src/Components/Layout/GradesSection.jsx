// GradesSection.jsx
import React from "react";
import "./GradesSection.css";

const grades = [
  {
    subject: "Math",
    grade: "A",
    percent: "92%",
    width: "92%",
    arrow: "↗",
    arrowClass: "green",
  },
  {
    subject: "Science",
    grade: "B+",
    percent: "87%",
    width: "87%",
    arrow: "↗",
    arrowClass: "green",
  },
  {
    subject: "English",
    grade: "A-",
    percent: "90%",
    width: "90%",
    arrow: "→",
    arrowClass: "gray",
  },
  {
    subject: "Arabic",
    grade: "B",
    percent: "85%",
    width: "85%",
    arrow: "↘",
    arrowClass: "red",
  },
  {
    subject: "History",
    grade: "B+",
    percent: "88%",
    width: "88%",
    arrow: "↗",
    arrowClass: "green",
  },
];

export default function GradesSection() {
  return (
    <div className="grades-card">
      <div className="card-header">
        <div className="icon-box">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 17L9 11L13 15L21 7" />
            <path d="M14 7H21V14" />
          </svg>
        </div>

        <h2>Grades by Subject</h2>
      </div>

      <div className="grades-list">
        {grades.map((item, index) => (
          <div className="subject-card" key={index}>
            <div className="top-row">
              <h3>{item.subject}</h3>

              <div className="grade-info">
                <span className="grade">{item.grade}</span>
                <span className="percent">{item.percent}</span>
                <span className={`arrow ${item.arrowClass}`}>
                  {item.arrow}
                </span>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: item.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}