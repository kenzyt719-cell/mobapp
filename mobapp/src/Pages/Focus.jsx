import React, { useState, useEffect, useRef } from "react";
import "./Focus.css";
import { Link } from "react-router-dom";


const Focus = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState(25);

  const intervalRef = useRef(null);

  // TIMER
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // FORMAT TIME
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  // START / PAUSE
  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // RESET
  const resetTimer = () => {
    setIsRunning(false);
    setTime(mode * 60);
  };

  // CHANGE MODE
  const changeMode = (min) => {
    setMode(min);
    setTime(min * 60);
    setIsRunning(false);
  };

  return (
    <div className="focus-container">

      {/* HEADER */}
      <div className="focus-header">
        <div className="back">←</div>
        <div>
          <h1>Focus</h1>
          <p>Take care of your mind</p>
        </div>
      </div>

      {/* TABS */}
      <div className="focus-tabs">
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
 
     className="touch-tab active"
 
     style={{ textDecoration: "none", }}
 
   >
 
     Focus
 
   </Link>
 
   <Link
 
     to="/Mood"
 
     className="touch-tab"
 
     style={{ textDecoration: "none",  }}
 
   >
 
     Mood
 
   </Link>
      </div>

      {/* CARD */}
      <div className="focus-card">

        <div className="title">⏱ Focus Timer</div>
        <p className="sub">Pomodoro technique for better concentration</p>

        <div className={`timer ${isRunning ? "running" : ""}`}>
          {formatTime(time)}
        </div>

        <p className="hint">
          {isRunning ? "Stay focused 🔥" : "Press start to begin"}
        </p>

        {/* START / PAUSE */}
        <button className="start-btn" onClick={toggleTimer}>
          {isRunning ? "Pause" : "Start Focus Session"}
        </button>

        {/* RESET */}
        <button className="reset-btn" onClick={resetTimer}>
          Reset
        </button>

        {/* MODES */}
        <div className="time-row">
          <div onClick={() => changeMode(25)}>25 min</div>
          <div onClick={() => changeMode(15)}>15 min</div>
          <div onClick={() => changeMode(5)}>5 min</div>
        </div>

      </div>

      <button className="music-btn">Play Music ▶</button>

    </div>
  );
};

export default Focus;