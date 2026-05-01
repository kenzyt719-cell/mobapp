// School.jsx

import React from "react";
import "./School.css";
import  TodayTimetable from "../Components/Layout/TodayTimetable";
import HomeworkAssignments from "../Components/Layout/HomeworkAssignments";

import GradesSection from "../Components/Layout/GradesSection";

import AttendanceSection from "../Components/Layout/AttendanceSection";
import Headersmall from "../Components/Layout/Headersmall";
import WorkshopSec from "../Components/Layout/WorkshopSec";




export default function School() {
  return (
    <div className="schoolPageWrapper">
      <div className="schoolScreen">
        <Headersmall
          title1="Wellness & Stress Relief"
          title2="Take care of your mind"
        />
        <GradesSection />
        <AttendanceSection />
        <HomeworkAssignments />
        <TodayTimetable />
        <WorkshopSec />
      </div>
    </div>
  );
}