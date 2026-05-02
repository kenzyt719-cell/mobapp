import React, { useState } from "react";
import "./Mood.css";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";


const moods = [
  { emoji: "😢", label: "Very Sad", value: "very_sad" },
  { emoji: "😟", label: "Sad", value: "sad" },
  { emoji: "😐", label: "Okay", value: "okay" },
  { emoji: "🙂", label: "Good", value: "good" },
  { emoji: "😄", label: "Great", value: "great" },
];

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [savedMood, setSavedMood] = useState(null);

  const handleSave = () => {
    setSavedMood(selectedMood);
  };

  return (
    <div className="mood-container">
      <BottomNav />


      <div className="mood-header">
        <div className="back">←</div>
        <div>
          <h1>Mood Tracker</h1>
          <p>Take care of your mind</p>
        </div>
      </div>


      <div className="mood-tabs">
               
  <Link

    to="/BreathingStart"

    className="touch-tab"

    style={{ textDecoration: "none",  }}

  >

    Breathing

  </Link>

  <Link

    to="/Grounding"

    className="touch-tab "

    style={{ textDecoration: "none",  }}

  >

    Grounding

  </Link>

  <Link

    to="/Focus"

    className="touch-tab"

    style={{ textDecoration: "none", }}

  >

    Focus

  </Link>

  <Link

    to="/Mood"

    className="touch-tab active"

    style={{ textDecoration: "none",  }}

  >

    Mood

  </Link>
      </div>

      {/* CARD */}
      <div className="mood-card">

        <div className="title">❤️ How are you feeling today?</div>
        <p className="sub">Track your emotional well-being</p>

        {/* MOODS */}
        <div className="mood-row">
          {moods.map((mood) => (
            <div
              key={mood.value}
              className={`mood-item ${
                selectedMood === mood.value ? "active-mood" : ""
              }`}
              onClick={() => setSelectedMood(mood.value)}
            >
              <div className="emoji">{mood.emoji}</div>
              <p>{mood.label}</p>
            </div>
          ))}
        </div>

        {/* SAVE */}
        <button className="save-btn" onClick={handleSave}>
          Save Mood Check
        </button>

        {/* FEEDBACK */}
        {savedMood && (
          <div className="tips">
            <h4>Saved Mood:</h4>
            <p>
              You are feeling{" "}
              <strong>
                {moods.find((m) => m.value === savedMood)?.label}
              </strong>
              . Take care of yourself ✨
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Mood;