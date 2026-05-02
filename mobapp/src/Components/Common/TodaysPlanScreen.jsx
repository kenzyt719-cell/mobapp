import React from "react";
import "./TodaysPlanScreen.css";

export default function TodaysPlanScreen() {
  return (
    <div className="zqScreenWrapA">
      <div className="zqTabsA">
        <p className="zqTabItemA zqActiveA">Today's Plan</p>
        <p className="zqTabItemA">Weekly Plan</p>
      </div>

      <div className="zqDateRowA">
        <span className="zqArrowA">←</span>
        <p>Today</p>
        <span className="zqArrowA">→</span>
      </div>

      <div className="zqCalendarBtnA">
        View Calendar
      </div>

      <div className="zqDayRowA">
        <p>Morning Task</p>
        <p className="zqEditA">Edit</p>
      </div>
    </div>
  );
}