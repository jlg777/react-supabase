import { useEffect, useState } from 'react'
import { supabase } from '../db/db'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email
      })
      if (error) {
        throw error
      }
      // Si la solicitud fue exitosa
      alert('Su correo fue enviado, favor revise su casilla de email')
      setEmail('') // Limpia el campo de correo
    } catch (error) {
      console.error(error)
      alert('Hubo un error al enviar el correo. Intente nuevamente.')
    }
  }

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    // Escucha los cambios de estado de autenticación
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/instruments') // Redirige a la página de instrumentos si el usuario está autenticado
      }
    })
  }, [navigate])

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
          value={email} // Asegúrate de que el valor del input esté vinculado al estado
          onChange={handleOnChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Login
