import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import TodaysPlan from './Pages/TodaysPlan';
import Weeklyplan from './Pages/Weeklyplan';
import GradeSelect from './Pages/GradeSelect';


const RountingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="TodaysPlan" element={<TodaysPlan/>} />
        <Route path="Weeklyplan" element={< Weeklyplan/>} />
        <Route path="GradeSelect" element={< GradeSelect/>} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default RountingApp;