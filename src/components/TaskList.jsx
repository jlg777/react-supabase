import { useEffect } from 'react'
import { useTask } from '../hook/useTask.js'

const TaskList = () => {
  const { task, getTask } = useTask()
  //console.log(task)

  useEffect(() => {
    getTask()
  }, [])

  return <>task</>
}
export default TaskList
