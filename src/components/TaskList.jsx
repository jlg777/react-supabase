import { useEffect } from 'react'
import { useTask } from '../hook/useTask.js'

const TaskList = () => {
  const { task } = useTask()
  console.log(task)

  return <>Tareas: {task == null ? task : 'No hay tareas'}</>
}
export default TaskList
