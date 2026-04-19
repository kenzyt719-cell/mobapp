import React from "react";
import "./WeeklyOverview.css";

const data = [
  { day: "Monday", progress: "2/3" },
  { day: "Tuesday", progress: "1/3" },
  { day: "Wednesday", progress: "0/2" },
  { day: "Thursday", progress: "0/3" },
  { day: "Friday", progress: "0/2" },
];

const getPercent = (value) => {
  const [done, total] = value.split("/").map(Number);
  return total === 0 ? 0 : (done / total) * 100;
};

const WeeklyOverview = () => {
  return (
    <div className="weekly-card">
  

      {data.map((item, index) => (
        <div className="day-card" key={index}>
          <div className="row">
            <h3>{item.day}</h3>
            <p>{item.progress} sessions</p>
          </div>

          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${getPercent(item.progress)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyOverview;