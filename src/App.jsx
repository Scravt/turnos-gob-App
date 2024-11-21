
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Home } from './pages/home/Home';
import Turn from './pages/turn/Turn';


function App() {

  return (
  <div  className='w-screen' >
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/turn" element={<Turn />} />
        <Route path="*" element={
          <div>404</div>
        } />
       
      </Routes>
  </div>
    
  )
}

export default App
