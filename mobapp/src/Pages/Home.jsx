import React, { Component } from 'react';
import Nav1 from "../Components/Layout/Nav1";

import Sectionhome from "../Components/Layout/Sectionhome";

import "./Home.css";

const Home = () => {
    return ( <>
    <div className='home'>

<Nav1 />
<Sectionhome />

    </div>

    </> );
}
 
export default Home;