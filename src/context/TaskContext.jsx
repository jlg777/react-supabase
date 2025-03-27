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

  // Obtener tareas solo si el usuario está disponible
  const getTask = async () => {
    if (user && user.id) {
      const { data, error } = await supabase.from('tareas').select().eq('userid', user.id)
      if (error) {
        console.error('Error obteniendo las tareas:', error) // Manejo de errores
      } else {
        setTask(data) // Actualiza el estado con las tareas obtenidas
      }
    }
  }

  const createTask = async (taskname) => {
    try {
      // Insertamos la tarea en la tabla "tareas"
      const { data, error } = await supabase
        .from('tareas')
        .insert([{ name: taskname, userid: user.id }])
      if (error) {
        console.error('Error al insertar tarea:', error)
        alert('Error al agregar la tarea') // Si hay un error, mostrar alert
      } else {
        setTask(data)
        alert(`Tarea '${taskname}' cargada con éxito!`) // Mostrar alert con la tarea cargada
      }
    } catch (error) {
      console.error('Error en la inserción:', error)
      alert('Error al agregar la tarea')
    }
  }

  // Ejecutar `getUser` una vez al montar el componente
  useEffect(() => {
    getUser() // Obtiene el usuario
  }, []) // Este useEffect se ejecuta solo una vez cuando el componente se monta

  // Ejecutar `getTask` solo cuando `user` cambia y no es null
  useEffect(() => {
    if (user) {
      getTask() // Obtiene las tareas solo si `user` está disponible
    }
  }, [])

  // Si aún está cargando la sesión, puedes mostrar un loader o algo similar
  if (loading) {
    return <div>Loading...!!!!!!</div>
  }

  //console.log(task)

  return (
    <TaskContext.Provider value={{ task, getTask, user, getUser, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}
