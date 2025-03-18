import Instruments from './components/Instruments'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom' // Asegúrate de usar 'react-router-dom' correctamente
import NotFound from './pages/NotFound'
import TaskForm from './components/TaskForm'
import { TaskContextProvider } from './context/TaskContext.jsx' // Importa correctamente el TaskContextProvider

const App = () => {
  return (
    <TaskContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/tasks" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
