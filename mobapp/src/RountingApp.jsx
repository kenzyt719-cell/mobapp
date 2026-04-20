import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TodaysPlan from "./Pages/TodaysPlan";
import Weeklyplan from "./Pages/Weeklyplan";
import GradeSelect from "./Pages/GradeSelect";
import Wellnessmain from "./Pages/Wellnessmain";


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


        {/* ✅ ONLY ONE ENTRY */}
        <Route path="/onboarding" element={<Onboarding />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;