import React from "react";
import "./Home.css";

import Titleandview from "../Components/Layout/Titleandview";
import TodaysPhome from "../Components/Layout/TodaysPhome";
import StudyChart from "../Components/Layout/StudyChart";
import UpcomingExams from "../Components/Layout/UpcomingExams";
import SubjectProgress from "../Components/Layout/SubjectProgress";

const Home = () => {
  return (
    <div className="home">


      <div className="header-card">

        <div className="header-top">
          <div>
            <h2>Hello, Ahmed!</h2>
            <p>Tuesday, March 10, 2026</p>
          </div>

          <div className="bell">🔔</div>
        </div>

        <div className="progress-box">
          <div className="progress-top">
            <span>Study Progress</span>
            <span>65%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p className="motivation">
            Great work this week! Keep it up ✨
          </p>
        </div>

        <img src="/character.png" alt="" className="character" />
      </div>


      <div className="actions">

        <div className="action purple">
          📘
          <p>Study</p>
        </div>

        <div className="action yellow">
          💬
          <p>Study Buddy</p>
        </div>

        <div className="action gray">
          🧘
          <p>Wellness</p>
        </div>

      </div>

     
      <div className="section">
        <Titleandview title="Today's Plan" actionText="View All" />
        <TodaysPhome />
      </div>


      <div className="section">
        <Titleandview title="This Week's Progress" actionText="View All" />
        <StudyChart />
      </div>

      <div className="section">
        <UpcomingExams />
      </div>


      <div className="section">
        <SubjectProgress />
      </div>

    </div>
  );
};

export default Home;