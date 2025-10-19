import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/register/register'
import Login from './components/login/Login'
import Dashboard from './components/user/dashboard'
import Found from './components/user/Found-items'
import LostItemManagement from './components/user/Lost-Item-Management'

const App = () => {
  return (

    <Router>

      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Found-Items" element={<Found />} />
          <Route path="/Lost-Item-Management" element={<LostItemManagement />} />

      </Routes>
    </Router>
        
  )
}


export default App
