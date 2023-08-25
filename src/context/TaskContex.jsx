import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
export const TaskContex = createContext();

export function TaskContexProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <TaskContex.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContex.Provider>
  );
}
