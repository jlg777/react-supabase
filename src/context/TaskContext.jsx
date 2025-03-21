import { createContext, useState } from 'react'
import { supabase } from '../db/db'

// Crea el contexto
export const TaskContext = createContext()

// Crea el proveedor de contexto
export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([])

  const getTask = async () => {
    const user = await supabase.auth.getUser()
    const { data } = await supabase.from('tareas').select().eq('userid', user.id)
    console.log('result', data)
  }

  return <TaskContext.Provider value={{ task, getTask }}>{children}</TaskContext.Provider>
}
