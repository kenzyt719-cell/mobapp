import React, { Component } from 'react';
import Nav1 from "../Components/Layout/Nav1";
import Titleandview from "../Components/Layout/Titleandview";
import StudyChart from "../Components/Layout/StudyChart";
import UpcomingExams from "../Components/Layout/UpcomingExams";
import SubjectProgress from "../Components/Layout/SubjectProgress";
import TaskList from "../Components/Layout/TaskList";

import Sectionhome from "../Components/Layout/Sectionhome";
import StudyHeader from "../Components/Layout/StudyHeader";
import PlanTabs from "../Components/Layout/PlanTabs";

import "./TodaysPlan.css";

const TodaysPlan = () => {
    return ( <>
    <div className='home'>



<StudyHeader />
<PlanTabs />
<TaskList />

    </div>

    </> );
}
 
export default TodaysPlan;