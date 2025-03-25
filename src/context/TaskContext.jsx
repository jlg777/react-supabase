import { createContext, useState, useEffect } from 'react'
import { supabase } from '../db/db'

// Crea el contexto
export const TaskContext = createContext()

// Crea el proveedor de contexto
export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // Añadido para controlar el estado de carga

  // Obtener el usuario actual cuando el componente se monte
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser() // Obtener el usuario actual
    if (error) {
      console.error('Error obteniendo el usuario:', error) // Manejo de errores
    } else {
      setUser(data.user) // Si se obtiene el usuario, lo almacenamos en el estado
    }
    setLoading(false) // Marcar como cargado una vez completada la verificación
  }

  const getTask = async () => {
    if (user) {
      const { data, error } = await supabase.from('tareas').select().eq('userid', user.id)
      if (error) {
        console.error('Error obteniendo las tareas:', error) // Manejo de errores
      } else {
        setTask(data) // Actualiza el estado de las tareas
        //console.log('Tareas obtenidas:', data)
      }
    }
  }

  useEffect(() => {
    getUser()
    if (user) {
      getTask() // Obtiene las tareas si el usuario está disponible
    }
  }, []) // Se ejecuta cada vez que el usuario cambia

  // Si aún está cargando la sesión, puedes mostrar un loader o algo similar
  if (loading) {
    return <div>Loading...!!!!!!!!!!!</div>
  }

  return (
    <TaskContext.Provider value={{ task, getTask, user, getUser }}>{children}</TaskContext.Provider>
  )
}
