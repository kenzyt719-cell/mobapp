import React from "react";
import "./SmartLessonFinder.css";
import Headersmall from "../Components/Layout/Headersmall";

// ✅ IMPORT IMAGES
import recompic1 from "../Assets/recompic1.png";
import recompic2 from "../Assets/recompic2.png";
import recompic3 from "../Assets/recompic3.png";
import recompic4 from "../Assets/recompic4.png";

export default function SmartLessonFinder() {
  const lessons = [
    {
      title: "Quadratic Equations Made Easy",
      subject: "Math",
      time: "12 min",
      rating: "4.8",
      views: "2.3k views",
      img: recompic1,
    },
    {
      title: "Wave Motion & Sound Basics",
      subject: "Physics",
      time: "18 min",
      rating: "4.6",
      views: "1.8k views",
      img: recompic2,
    },
  ];

  const allLessons = [
    {
      title: "Introduction to Algebra",
      subject: "Math",
      time: "15 min",
      rating: "4.5",
      img: recompic3,
    },
    {
      title: "English Grammar Essentials",
      subject: "English",
      time: "20 min",
      rating: "4.7",
      img: recompic4,
    },
    {
      title: "Chemical Reactions Overview",
      subject: "Chemistry",
      time: "22 min",
      rating: "4.4",
      img: recompic1,
    },
    {
      title: "Ancient Egyptian History",
      subject: "History",
      time: "25 min",
      rating: "4.9",
      img: recompic2,
    },
    {
      title: "Cell Biology Basics",
      subject: "Biology",
      time: "16 min",
      rating: "4.6",
      img: recompic3,
    },
  ];

  return (
    <div className="phone">
      <div className="container">
        <Headersmall
          title1="Smart Lesson Finder"
          title2="Always here to help you learn!"
        />

        {/* SEARCH */}
        <div className="searchRow">
          <div className="searchBox">
            🔍 <span>Search topics, subjects...</span>
          </div>
          <div className="filter">⚙️</div>
        </div>

        {/* TABS */}
        <div className="tabs">
          <div className="tab active">All</div>
          <div className="tab">Math</div>
          <div className="tab">Science</div>
          <div className="tab">English</div>
          <div className="tab">History</div>
        </div>

        {/* RECOMMENDED */}
        <div className="section">
          <h2>Recommended For You</h2>

          {lessons.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt="" />

              <div className="info">
                <h3>{item.title}</h3>
                <p className="subject">{item.subject}</p>

                <div className="meta">
                  <span>⏱ {item.time}</span>
                  <span>⭐ {item.rating}</span>
                  <span>{item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALL LESSONS */}
        <div className="section">
          <h2>All Lessons</h2>

          {allLessons.map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt="" />

              <div className="info">
                <h3>{item.title}</h3>
                <p className="subject">{item.subject}</p>

                <div className="meta">
                  <span>⏱ {item.time}</span>
                  <span>⭐ {item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="bottomBtn">
          <p>+ Add Pdf</p>
          <span>Add Pdf to use the pdf narration</span>
        </div>
      </div>
    </div>
  );
}