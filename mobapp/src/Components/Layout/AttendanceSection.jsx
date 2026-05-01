// AttendanceSection.jsx

import React from "react";
import "./AttendanceSection.css";

export default function AttendanceSection() {
  return (
    <div className="attendanceRecordWrapper">
      <div className="attendanceRecordCard">
        <div className="attendanceRecordHeader">
          <div className="attendanceRecordIcon">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          <h2 className="attendanceRecordTitle">Attendance Record</h2>
        </div>

        <div className="attendanceRecordGrid">
          <div className="attendanceRecordBox attendanceRecordPresent">
            <h3 className="attendanceRecordNumber">145</h3>
            <p className="attendanceRecordLabel">Present</p>
          </div>

          <div className="attendanceRecordBox attendanceRecordAbsent">
            <h3 className="attendanceRecordNumber">3</h3>
            <p className="attendanceRecordLabel">Absent</p>
          </div>

          <div className="attendanceRecordBox attendanceRecordLate">
            <h3 className="attendanceRecordNumber">2</h3>
            <p className="attendanceRecordLabel">Late</p>
          </div>
        </div>
      </div>
    </div>
  );
}