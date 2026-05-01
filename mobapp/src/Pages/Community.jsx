import React from "react";
import "./Community.css";

import Titleandview from "../Components/Layout/Titleandview";
import TodaysPhome from "../Components/Layout/TodaysPhome";
import StudyChart from "../Components/Layout/StudyChart";
import TeacherMsg from "../Components/Layout/TeacherMsg";
import SubjectProgress from "../Components/Layout/SubjectProgress";
import WorkshopSec from "../Components/Layout/WorkshopSec";

const Community= () => {
  return (
    <div className="home">


      <div className="header-card">

        <div className="header-top">
          <div>
            <h2>Hello, Ahmed!</h2>
            <p>Tuesday, March 10, 2026</p>
          </div>
        
        
    </div>

    </div>
        
   <WorkshopSec />

    <TeacherMsg />

    </div>
  );
};

export default Community;