import {useContext} from 'react'
import {TaskContex} from '../context/TaskContex'



function TaskCard({ task}) {
const {deleteTask}= useContext(TaskContex)


  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
