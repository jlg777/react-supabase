'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../db/db'

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
        console.log(data.user) // Imprimir los datos del usuario en la consola
      }
    }

    fetchUser() // Llamada a la función asincrónica dentro del useEffect
  }, []) // El array vacío asegura que solo se ejecute una vez cuando el componente se monte

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskname) // Imprimir el nombre de la tarea cuando se envíe el formulario
  }

  // Función para manejar el cambio en el input de tarea
  const handleClick = (e) => {
    setTaskname(e.target.value) // Actualizar el estado de taskname cuando el usuario escriba
    console.log(e.target.value) // Imprimir el valor actual del input
  }

  return (
    <>
      <h2>Formulario de Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          placeholder="Escribe el nombre de la tarea"
          onChange={handleClick} // Actualizar el estado con el valor del input
        />
        <button type="submit">Enviar</button>
      </form>
      {user && <p>Usuario logueado: {user.id}</p>}{' '}
      {/* Mostrar el ID del usuario si está logueado */}
      {user && <p>Email logueado: {user.email}</p>}
    </>
  )
}

export default TaskForm
