import Instruments from './components/Instruments'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router'
import NotFound from './pages/NotFound'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/tasks" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App
