import React, { Component } from 'react';
import Nav1 from "../Components/Layout/Nav1";
import Titleandview from "../Components/Layout/Titleandview";
import StudyChart from "../Components/Layout/StudyChart";
import UpcomingExams from "../Components/Layout/UpcomingExams";
import SubjectProgress from "../Components/Layout/SubjectProgress";
import TodaysPhome from "../Components/Layout/TodaysPhome";

import Sectionhome from "../Components/Layout/Sectionhome";
import StudyHeader from "../Components/Layout/StudyHeader";
import PlanTabs from "../Components/Layout/PlanTabs";
import TaskListsection from "../Components/Layout/TaskListsection";
import WeeklyOverview from "../Components/Layout/WeeklyOverview";


import "./Weeklyplan.css";

const Weeklyplan = () => {
    return ( <>
    <div className='home'>



<StudyHeader />
<PlanTabs />
<WeeklyOverview />


    </div>

    </> );
}
 
export default Weeklyplan;