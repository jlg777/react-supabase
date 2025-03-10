import { useState } from 'react'
import { supabase } from '../db/db'

const Login = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithOtp({ email })
      //console.log(data)
    } catch (error) {}
    console.error(error)
    //console.log('Email enviado:', email)
  }

  const handleOnchange = (e) => {
    //console.log(e.target.value)
    setEmail(e.target.value)
  }
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
