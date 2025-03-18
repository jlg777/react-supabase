import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

const TaskList = () => {
  const { task, setTask } = useContext(TaskContext) // Accede al valor del contexto
  console.log(task)
  return <>task</>
}
export default TaskList