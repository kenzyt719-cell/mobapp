import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="list">
      {tasks.map((task, index) => (
        <div className="card" key={index}>
          <div>
            <h3>
              {task.subject} {task.time}
            </h3>
            <p>{task.description}</p>
          </div>
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;