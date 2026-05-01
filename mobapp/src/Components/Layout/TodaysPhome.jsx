import React from "react";
import "./TodaysPhome.css";
import TaskCard from "../Common/TaskCard";

const TodaysPhome = () => {
  return (
    <>
      <TaskCard time="09:00" title="Math" subtitle="Algebra practice" />
      <TaskCard time="11:00" title="Physics" subtitle="Waves chapter review" />
      <TaskCard time="14:00" title="English" subtitle="Essay writing" />
    </>
  );
};

export default TodaysPhome;