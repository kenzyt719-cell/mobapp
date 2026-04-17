import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home';
import TodaysPlan from './Pages/TodaysPlan';


const RountingApp = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="TodaysPlan" element={<TodaysPlan/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default RountingApp;