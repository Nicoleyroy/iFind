import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Register from './components/register/Register'
import Login from './components/login/Login'

const App = () => {
  return (

    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  
    

  )
}


export default App
