import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import TaskList from "../Common/TaskList";

const TaskListSection = () => {
  const [tasksData, setTasksData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("mobdailytasks")
        .select("*");

      if (error) {
        console.log("Error fetching tasks:", error);
      } else {
        setTasksData(data);
      }

      setLoading(false);
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <TaskList tasks={tasksData} />
    </div>
  );
};

export default TaskListSection;