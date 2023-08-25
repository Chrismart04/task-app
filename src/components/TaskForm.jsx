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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        +
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
