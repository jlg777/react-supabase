import { useEffect } from 'react'
import { useTask } from '../hook/useTask.js'
import TaskCard from './TaskCard.jsx'

const TaskList = () => {
  const { task, getTask, onComplete, onDelete } = useTask() // Asegúrate de que `getTask` esté disponible en el contexto.

  // Verificamos si `task` es null o un array vacío
  const renderTasks = () => {
    if (task === null || task.length === 0) {
      return <div>No hay tareas</div>
    }

    // Si hay tareas, las mostramos
    return (
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {/* Asegúrate de que cada tarea tenga un identificador único y un nombre */}
            <TaskCard task={task} onComplete={onComplete} onDelete={onDelete} />

            {/* Si no hay un nombre, se muestra un texto por defecto */}
          </li>
        ))}
      </ul>
    )
  }

  useEffect(() => {
    if (!task || task.length === 0) {
      getTask() // Llama a `getTask` para obtener las tareas solo si aún no existen
    }
    //console.log(task)
  }, [task]) // `getTask` se ejecutará cuando el estado `task` cambie

  return (
    <div>
      <h2>Tareas:</h2>
      {renderTasks()}
    </div>
  )
}

export default TaskList
