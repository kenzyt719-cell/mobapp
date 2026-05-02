import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Onboarding from "./Pages/Onboarding";
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
import GroundingMain from "./Pages/GroundingMain";
import Focus from "./Pages/Focus";
import Mood from "./Pages/Mood";
import CalendarMonth from "./Pages/CalendarMonth";
import CalendarWeek from "./Pages/CalendarWeek";
import School from "./Pages/School";
import SmartLessonFinder from "./Pages/SmartLessonFinder";
import Community from "./Pages/Community";
import WelcomeScreen from "./Pages/WelcomeScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* FIRST SCREEN */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* OTHER ROUTES */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todays-plan" element={<TodaysPlan />} />
        <Route path="/weekly-plan" element={<Weeklyplan />} />
        <Route path="/grade-select" element={<GradeSelect />} />

        <Route path="/Wellnessmain" element={<Wellnessmain />} />
        <Route path="/BreathingStart" element={<BreathingStart />} />
        <Route path="/BreathingSteps" element={<BreathingSteps />} />

        <Route path="/Grounding" element={<Grounding />} />
        <Route path="/GroundingTouch" element={<GroundingTouch />} />
        <Route path="/GroundingHear" element={<GroundingHear />} />
        <Route path="/GroundingSmell" element={<GroundingSmell />} />
        <Route path="/GroundingTaste" element={<GroundingTaste />} />
        <Route path="/GroundingFinish" element={<GroundingFinish />} />
        <Route path="/GroundingMain" element={<GroundingMain />} />

        <Route path="/Focus" element={<Focus />} />
        <Route path="/Mood" element={<Mood />} />

        <Route path="/CalendarMonth" element={<CalendarMonth />} />
        <Route path="/CalendarWeek" element={<CalendarWeek />} />

        <Route path="/School" element={<School />} />
        <Route path="/SmartLessonFinder" element={<SmartLessonFinder />} />
        <Route path="/Community" element={<Community />} />

        {/* optional: keep direct access */}
        <Route path="/WelcomeScreen" element={<WelcomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}