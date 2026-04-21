import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TodaysPlan from "./Pages/TodaysPlan";
import Weeklyplan from "./Pages/Weeklyplan";
import GradeSelect from "./Pages/GradeSelect";
import Wellnessmain from "./Pages/Wellnessmain";
import BreathingStart from "./Pages/BreathingStart";
import BreathingSteps from "./Pages/BreathingSteps";

import Grounding from "./Pages/Grounding";
import GroundingTouch from "./Pages/GroundingTouch";
import GroundingHear from "./Pages/GroundingHear";
import GroundingSmell from "./Pages/GroundingSmell";
import GroundingTaste from "./Pages/GroundingTaste";
import GroundingFinish from "./Pages/GroundingFinish";

import Onboarding from "./Pages/Onboarding";

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/todays-plan" element={<TodaysPlan />} />
        <Route path="/weekly-plan" element={<Weeklyplan />} />
        <Route path="/grade-select" element={<GradeSelect />} />

        <Route path="/Wellnessmain" element={<Wellnessmain/>} />

        <Route path="/BreathingStart" element={<BreathingStart/>} />
        <Route path="/BreathingSteps" element={<BreathingSteps/>} />

        <Route path="/grounding" element={<Grounding/>} />
        <Route path="/grounding-touch" element={<GroundingTouch/>} />
        <Route path="/grounding-hear" element={<GroundingHear/>} />
        <Route path="/grounding-smell" element={<GroundingSmell/>} />
        <Route path="/grounding-taste" element={<GroundingTaste/>} />
        <Route path="/grounding-finish" element={<GroundingFinish/>} />

        <Route path="/onboarding" element={<Onboarding />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;