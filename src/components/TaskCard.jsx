const TaskCard = ({ task, onDelete, onComplete }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold text-white">
        {task.name || 'Tarea sin nombre'} {task.isDone ? '✔️' : '❌'}
      </h3>

      {/* Botones */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => onComplete(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Hecho
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TaskCard
