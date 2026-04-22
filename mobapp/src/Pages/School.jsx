import React from "react";
import "./School.css";

import imgcharacter01 from "../Assets/imgcharacter01.png";

const School = () => {
  return (
    <div className="school-container">


      <div className="card header">
        <div>
          <h2>School system</h2>
          <p>M.M.L.S</p>
        </div>
        <img src={imgcharacter01} className="character" alt="" />

        <div className="stats">
          <div>
            <p>Overall GPA</p>
            <h3>3.7</h3>
          </div>
          <div>
            <p>Attendance</p>
            <h3>96.7%</h3>
          </div>
        </div>
      </div>


      <div className="card">
        <h3>Grades by Subject</h3>

        {["Math", "Science", "English", "Arabic", "History"].map((sub, i) => (
          <div className="grade" key={i}>
            <p>{sub}</p>
            <div className="bar">
              <div className="fill"></div>
            </div>
          </div>
        ))}
      </div>


      <div className="card attendance">
        <div><h2>145</h2><p>Present</p></div>
        <div><h2>3</h2><p>Absent</p></div>
        <div><h2>2</h2><p>Late</p></div>
      </div>

      <div className="card">
        <h3>Today's Timetable</h3>

        <div className="time">Math - 8:00</div>
        <div className="time">Science - 9:00</div>
        <div className="time">English - 10:00</div>
        <div className="time break">Break</div>
        <div className="time">Arabic - 12:00</div>
      </div>


      <div className="card">
        <h3>Homework</h3>

        <div className="hw yellow">
          <p>Math - Chapter 5</p>
        </div>

        <div className="hw yellow">
          <p>Science - Lab report</p>
        </div>

        <div className="hw green">
          <p>English - Essay</p>
        </div>
      </div>

    </div>
  );
};

export default School;