import React, { useState } from "react";
import "./GradeSelect.css";

export default function GradeSelect() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const grades = [7, 8, 9, 10, 11, 12];
  const subjects = [
    "Math", "Science", "Arabic", "English",
    "History", "Geography", "French",
    "Physics", "Chemistry", "Biology"
  ];

  const toggleSubject = (sub) => {
    if (selectedSubjects.includes(sub)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== sub));
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  return (
    <div className="container">
      {/* Grades */}
      <h2 className="title">Select Your Grade</h2>

      <div className="grid">
        {grades.map((g) => (
          <div
            key={g}
            className={`card ${selectedGrade === g ? "active" : ""}`}
            onClick={() => setSelectedGrade(g)}
          >
            Grade {g}
          </div>
        ))}
      </div>

      {/* Subjects */}
      <h2 className="title">Select Your Subjects</h2>
      <p className="subtitle">Choose all that apply</p>

      <div className="grid">
        {subjects.map((sub) => (
          <div
            key={sub}
            className={`card ${selectedSubjects.includes(sub) ? "active" : ""}`}
            onClick={() => toggleSubject(sub)}
          >
            {sub}
          </div>
        ))}
      </div>

      <div className="btn">Continue</div>
    </div>
  );
}