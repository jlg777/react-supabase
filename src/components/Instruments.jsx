import { useEffect, useState } from 'react'
import { supabase } from '../db/db'
import { useNavigate } from 'react-router-dom'
import TaskForm from './TaskForm'

function Instruments() {
  const [instruments, setInstruments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
        console.log(session)
      }
    })
    getInstruments()
  }, [])

  async function getInstruments() {
    const { data } = await supabase.from('instruments').select()
    setInstruments(data)
  }

  return (
    <>
      <div>Instruments</div>
      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.name}>{instrument.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Instruments
