import React, { useState } from "react";
import "./GradeSelect.css";
import { supabase } from "../supabaseClient";

export default function GradeSelect() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const grades = [7, 8, 9, 10, 11, 12];

  const subjects = [
    "Math",
    "Science",
    "Arabic",
    "English",
    "History",
    "Geography",
    "French",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  const toggleSubject = (sub) => {
    setSelectedSubjects((prev) =>
      prev.includes(sub)
        ? prev.filter((s) => s !== sub)
        : [...prev, sub]
    );
  };

  const handleSubmit = async () => {
    if (!selectedGrade || selectedSubjects.length === 0) {
      alert("Please select grade and subjects");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("users_selection_app")
      .insert([
        {
          grade: selectedGrade,
          subject: selectedSubjects.join(", "),
        },
      ])
      .select();

    setLoading(false);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      alert(error.message);
      return;
    }

    alert("Saved successfully 🎉");
    setSelectedGrade(null);
    setSelectedSubjects([]);
  };

  return (
    <div className="container">
      <div className="progress">
        <div className="bar active"></div>
        <div className="bar active"></div>
        <div className="bar"></div>
      </div>

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

      <h2 className="title">Select Your Subjects</h2>
      <p className="subtitle">Choose all that apply</p>

      <div className="grid">
        {subjects.map((sub) => (
          <div
            key={sub}
            className={`card ${
              selectedSubjects.includes(sub) ? "active" : ""
            }`}
            onClick={() => toggleSubject(sub)}
          >
            {sub}
          </div>
        ))}
      </div>

      <button className="btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Saving..." : "Continue"}
      </button>
    </div>
  );
}