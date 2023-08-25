import { useState, useContext} from "react";
import {TaskContex} from '../context/TaskContex'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 const {createTask}= useContext(TaskContex)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-4 ">Crea tu tarea</h1>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-lg"
          autoFocus
        />
        +
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-lg"
        ></textarea>
        <button className="bg-indigo-400 px-3 py-2 rounded-lg  text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
