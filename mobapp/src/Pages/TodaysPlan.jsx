import React, { Component } from 'react';
import Nav1 from "../Components/Layout/Nav1";
import Titleandview from "../Components/Layout/Titleandview";
import StudyChart from "../Components/Layout/StudyChart";
import UpcomingExams from "../Components/Layout/UpcomingExams";
import SubjectProgress from "../Components/Layout/SubjectProgress";
import TodaysPhome from "../Components/Layout/TodaysPhome";

import Sectionhome from "../Components/Layout/Sectionhome";
import StudyHeader from "../Components/Layout/StudyHeader";
import PlanTabs2 from "../Components/Layout/PlanTabs2";
import TaskListsection from "../Components/Layout/TaskListsection";

import BottomNav from "../Components/Layout/BottomNav";

import "./TodaysPlan.css";

const TodaysPlan = () => {
    return ( <>
    <div className='home'>

<BottomNav />


<StudyHeader />
<PlanTabs2 />
<TaskListsection />

    </div>

    </> );
}
 
export default TodaysPlan;