import { useContext } from "react";
import { TaskContex } from "../context/TaskContex";

function TaskCard({ task: { id, title, description } }) {
  const { deleteTask } = useContext(TaskContex);
  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg sm:p-6">
      <h1 className="text-xl sm:text-xl font-bold capitalize">{title}</h1>
      <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={handleDelete}
      >
        eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
