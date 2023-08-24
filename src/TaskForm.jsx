import {useState} from 'react'
function TaskForm() {

    const [title , setTitle ] = useState("")
  return (
    <div>
      <form>
        <input placeholder="escribe tu tarea" 
        onChange={(e) => setTitle(e.target.value)}/>
        <button>Guardar</button>
      </form>
      
    </div>
  );
}

export default TaskForm;
