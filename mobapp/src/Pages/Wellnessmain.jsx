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
import Headersmall from "../Components/Layout/Headersmall";


import "./Wellnessmain.css";

const Wellnessmain = () => {
    return ( <>
    <div className='home'>



<StudyHeader />
<Headersmall />

    </div>

    </> );
}
 
export default Wellnessmain;