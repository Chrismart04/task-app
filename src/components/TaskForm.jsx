import { useState, useContext } from "react";
import { TaskContex } from "../context/TaskContex";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim == "") {
      alert("El titulo y la descripción no pueden estar vacios ");
      return;
    }
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto p-4 sm:p-10">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 sm:p-10 mb-4 rounded-lg">
        <h1 className="text-xl sm:text-2xl text-white font-bold mb-4 ">Crea tu tarea</h1>

        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-2 sm:p-3 w-full mb-2 rounded-lg"
          autoFocus
        />

        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-2 sm:p-3 w-full mb-2 rounded-lg"
        ></textarea>
        <button className="bg-indigo-400 px-3 py-2 rounded-lg text-white hover:bg-indigo-500 w-full sm:w-auto">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
