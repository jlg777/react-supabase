import { createContext, useState } from 'react'

// Crea el contexto
export const TaskContext = createContext()

// Crea el proveedor de contexto
export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([])

  return <TaskContext.Provider value={{ task, setTask }}>{children}</TaskContext.Provider>
}
