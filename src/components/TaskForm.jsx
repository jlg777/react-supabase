'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../db/db'
import TaskList from './TaskList'

const TaskForm = () => {
  const [taskname, setTaskname] = useState('') // Estado para el nombre de la tarea
  const [user, setUser] = useState(null) // Estado para almacenar al usuario logueado

  // Obtener el usuario de Supabase cuando el componente se monta
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser() // Obtener el usuario actual
      if (error) {
        console.error('Error obteniendo el usuario:', error) // Manejo de errores si ocurre algún problema
      } else {
        setUser(data.user) // Si se obtiene el usuario, lo almacenamos en el estado
        //console.log(data.user) // Imprimir los datos del usuario en la consola
      }
    }

    fetchUser() // Llamada a la función asincrónica dentro del useEffect
  }, []) // El array vacío asegura que solo se ejecute una vez cuando el componente se monte

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Insertamos la tarea en la tabla "tareas"
      const { data, error } = await supabase
        .from('tareas')
        .insert([{ name: taskname, userid: user.id }])

      if (error) {
        console.error('Error al insertar tarea:', error)
        alert('Error al agregar la tarea') // Si hay un error, mostrar alert
      } else {
        console.log('Tarea insertada con éxito:', taskname)
        alert(`Tarea '${taskname}' cargada con éxito!`) // Mostrar alert con la tarea cargada
        setTaskname('') // Limpiar el input después de la inserción exitosa
      }
    } catch (error) {
      console.error('Error en la inserción:', error)
      alert('Error al agregar la tarea')
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
