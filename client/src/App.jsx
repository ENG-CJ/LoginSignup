import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <>
    <Routes>
       <Route path='/' element={<Login/>}/>
    </Routes>
    <Routes>
       <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </>
       
      
  )
}

export default App
