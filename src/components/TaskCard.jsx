const TaskCard = ({ task }) => {
  return <div> {task.name || 'Tarea sin nombre'} </div>
}
export default TaskCard
