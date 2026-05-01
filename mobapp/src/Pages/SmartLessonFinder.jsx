import React from "react";
import "./SmartLessonFinder.css";

const lessons = [
  {
    title: "Quadratic Equations Made Easy",
    subject: "Math",
    time: "12 min",
    rating: "4.8",
    views: "2.3k views",
  },
  {
    title: "Wave Motion & Sound Basics",
    subject: "Physics",
    time: "18 min",
    rating: "4.6",
    views: "1.8k views",
  },
];

const allLessons = [
  {
    title: "Introduction to Algebra",
    subject: "Math",
    time: "15 min",
    rating: "4.5",
  },
  {
    title: "English Grammar Essentials",
    subject: "English",
    time: "20 min",
    rating: "4.7",
  },
  {
    title: "Chemical Reactions Overview",
    subject: "Chemistry",
    time: "22 min",
    rating: "4.4",
  },
  {
    title: "Ancient Egyptian History",
    subject: "History",
    time: "25 min",
    rating: "4.9",
  },
  {
    title: "Cell Biology Basics",
    subject: "Biology",
    time: "16 min",
    rating: "4.6",
  },
];

export default function SmartLessonFinder() {
  return (
    <div className="phone">
      <div className="container">
        {/* Header */}
        <div className="header">
          <p className="back">←</p>
          <h1>Smart Lesson Finder</h1>
          <p className="subtitle">Always here to help you learn!</p>
        </div>

        {/* Search */}
        <div className="searchRow">
          <div className="searchBox">
            <p>🔍 Search topics, subjects...</p>
          </div>
          <div className="filter">⚲</div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <p className="tab active">All</p>
          <p className="tab">Math</p>
          <p className="tab">Science</p>
          <p className="tab">English</p>
          <p className="tab">History</p>
        </div>

        {/* Recommended */}
        <div className="section">
          <h2>Recommended For You</h2>

          {lessons.map((item, i) => (
            <div className="card" key={i}>
              <img src="/studeylessonpic01.png" alt="" />
              <div className="info">
                <h3>{item.title}</h3>
                <p className="subject">{item.subject}</p>
                <div className="meta">
                  <p>⏱ {item.time}</p>
                  <p>⭐ {item.rating}</p>
                  <p>{item.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Lessons */}
        <div className="section">
          <h2>All Lessons</h2>

          {allLessons.map((item, i) => (
            <div className="card" key={i}>
              <img src="/studeylessonpic01.png" alt="" />
              <div className="info">
                <h3>{item.title}</h3>
                <p className="subject">{item.subject}</p>
                <div className="meta">
                  <p>⏱ {item.time}</p>
                  <p>⭐ {item.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="bottomBtn">
          <p>+ Add Pdf</p>
          <span>Add Pdf to use the pdf narration</span>
        </div>
      </div>
    </div>
  );
}