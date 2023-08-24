import { useState } from "react";
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
    };
    createTask(newTask);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
