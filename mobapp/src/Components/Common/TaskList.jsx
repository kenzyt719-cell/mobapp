import React, { useState } from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="list">
      {tasks.map((task) => (
        <div
          className={`card ${selected === task.id ? "active" : ""}`}
          key={task.id}
          onClick={() => handleClick(task.id)}
        >
          <div>
            <h3>
              {task.subject} {task.time}
            </h3>
            <p>{task.details}</p>
          </div>

          <div
            className={`circle ${selected === task.id ? "checked" : ""}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;