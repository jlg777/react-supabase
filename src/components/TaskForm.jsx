import { useState } from 'react'

const TaskForm = () => {
  const [taskname, setTaskname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskname)
  }

  const handleClick = (e) => {
    setTaskname(e.target.value)
    console.log(taskname)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="taskname" placeholder="Write a task name" onChange={handleClick} />
        <button>envio</button>
      </form>
    </>
  )
}
export default TaskForm
