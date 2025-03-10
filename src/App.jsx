import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
      </Routes>

      
    </>
  )
}
export default App
