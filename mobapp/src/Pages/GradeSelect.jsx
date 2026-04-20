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
          subject: selectedSubjects.join(", "), // ✅ FIX HERE
        },
      ])
      .select();

    setLoading(false);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      alert(error.message);
      return;
    }

    console.log("Saved:", data);
    alert("Saved successfully 🎉");

    setSelectedGrade(null);
    setSelectedSubjects([]);
  };

  return (
    <div className="container">

      {/* Progress */}
      <div className="progress">
        <div className="bar active"></div>
        <div className="bar active"></div>
        <div className="bar"></div>
      </div>

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
            className={`card ${
              selectedSubjects.includes(sub) ? "active" : ""
            }`}
            onClick={() => toggleSubject(sub)}
          >
            {sub}
          </div>
        ))}
      </div>

      {/* Button */}
      <div
        className="btn"
        onClick={handleSubmit}
        style={{
          opacity: loading ? 0.6 : 1,
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        {loading ? "Saving..." : "Continue"}
      </div>
    </div>
  );
}