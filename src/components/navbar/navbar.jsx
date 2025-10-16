import React from 'react'
import './navbar.css'
import logo from '../../assets/ifindlogo.png'

const Navbar = () => {
  return (
    <nav className='container'>
       
      <img src={logo} alt="" className='logo' />

      <ul>
        <li>Home</li>
        <li>Lost Items</li>
        <li>Found Items</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
