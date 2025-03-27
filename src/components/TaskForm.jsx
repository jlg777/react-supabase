'use client'
import { useEffect, useState } from 'react'
import TaskList from './TaskList'
import { useTask } from '../hook/useTask'

const TaskForm = () => {
  const { user, createTask } = useTask()
  const [taskname, setTaskname] = useState('') // Estado para almacenar el nombre de la tarea

  useEffect(() => {}, [])

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!taskname.trim()) {
      alert('Por favor, ingresa un nombre para la tarea')
      return
    } else {
      createTask(taskname)
      setTaskname('') // Limpiar el input después de la inserción exitosa
    }
  }

  // Función para manejar el cambio en el input de tarea
  const handleClick = (e) => {
    setTaskname(e.target.value) // Actualizar el estado de taskname cuando el usuario escriba
  }

  return (
    <>
      <h2>Formulario de Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          placeholder="Escribe el nombre de la tarea"
          value={taskname} // Vinculamos el valor del input con el estado
          onChange={handleClick} // Actualizar el estado con el valor del input
        />
        <button type="submit">Enviar</button>
      </form>
      {user && <p>Usuario logueado: {user.id}</p>}
      {user && <p>Email logueado: {user.email}</p>}
      <TaskList />
    </>
  )
}

export default TaskForm
