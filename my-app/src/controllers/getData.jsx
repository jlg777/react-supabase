import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://yjhqntheebomyqpigitk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaHFudGhlZWJvbXlxcGlnaXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNjM2OTksImV4cCI6MjA1NjkzOTY5OX0.c-CHHYs7Q5pvvz29e4-tHnKbyn2mve6O7v9KkCiLfhc'
)

function App() {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstruments()
  }, [])

  async function getInstruments() {
    const { data } = await supabase.from('instruments').select()
    setInstruments(data)
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  )
}

export default App
    