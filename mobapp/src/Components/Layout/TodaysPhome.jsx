import React from "react";
import "./TodaysPhome.css";
import TaskCard from "../Common/TaskCard"; // ✅ fixed path

const TodaysPhome = () => {
  return (
    <>
 <TaskCard 
        time="09:00"
        title="Math"
        subtitle="Algebra practice"
      />
 <TaskCard 
        time="09:00"
        title="Math"
        subtitle="Algebra practice"
      />
 <TaskCard 
        time="09:00"
        title="Math"
        subtitle="Algebra practice"
      />

    </>
  );
};

export default TodaysPhome;