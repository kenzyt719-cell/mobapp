import React, { Component } from 'react';
import Nav1 from "../Components/Layout/Nav1";
import Titleandview from "../Components/Layout/Titleandview";
import StudyChart from "../Components/Layout/StudyChart";
import UpcomingExams from "../Components/Layout/UpcomingExams";
import SubjectProgress from "../Components/Layout/SubjectProgress";
import TodaysPhome from "../Components/Layout/TodaysPhome";

import Sectionhome from "../Components/Layout/Sectionhome";
import StudyHeader from "../Components/Layout/StudyHeader";

import "./Home.css";

const Home = () => {
    return ( <>
    <div className='home'>

<Nav1 />
<Sectionhome />

<Titleandview 
  title="Today's Plan"
  actionText="View"
  onActionClick={() => console.log("View clicked")}
/>
<TodaysPhome />
<StudyChart />
<UpcomingExams />

<SubjectProgress />


    </div>

    </> );
}
 
export default Home;