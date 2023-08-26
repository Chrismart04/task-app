import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContex } from "../context/TaskContex";

function TaskList() {
  const { tasks } = useContext(TaskContex);

  if (tasks.length === 0) {
    return <h1 className="text-white text-xl">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
