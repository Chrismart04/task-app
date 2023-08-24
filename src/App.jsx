import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import {useEffect, useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);



  return (
    <>
      <TaskForm />
      <TaskList tasks ={tasks}/>
    </>
  );
}

export default App;
