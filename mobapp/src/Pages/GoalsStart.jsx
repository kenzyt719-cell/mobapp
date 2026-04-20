import React, { useState } from "react";

export default function GoalsStart({ onSubmit }) {
  const [hours, setHours] = useState("");
  const [challenge, setChallenge] = useState("");

  const finish = () => {
    onSubmit({
      study_per_day: hours,
      biggest_challenge: challenge,
    });
  };

  return (
    <div className="container">

      <input
        className="input"
        placeholder="Study hours"
        value={hours}
        onChange={(e)=>setHours(e.target.value)}
      />

      {["Practice","Reading","Videos"].map(o => (
        <div
          key={o}
          className={`card ${challenge === o ? "active" : ""}`}
          onClick={() => setChallenge(o)}
        >
          {o}
        </div>
      ))}

      <div className="btn" onClick={finish}>
        Finish
      </div>

    </div>
  );
}