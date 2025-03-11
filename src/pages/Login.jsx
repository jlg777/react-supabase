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
        email,
        options: {
          emailRedirectTo: 'https://localhost.3000/instruments'
        }
      })
      //console.log(data)
    } catch (error) {}
    console.error(error)
    //console.log('Email enviado:', email)
  }

  const handleOnchange = (e) => {
    //console.log(e.target.value)
    setEmail(e.target.value)
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/instruments')
      }
    })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Ingrese su email"
          onChange={handleOnchange}
        />
        <button>Enviar</button>
      </form>
    </>
  )
}
export default Login
