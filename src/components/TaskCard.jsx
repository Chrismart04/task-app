function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
