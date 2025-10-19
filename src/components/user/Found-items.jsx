import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Found = () => {
  return (
    <nav className='container'>
       
      <ul>
        <li>Home</li>
        <li>
          <Link to="/Lost-Item-Management">
          <button className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800">
            Lost Items
          </button>
          </Link>
          </li>
        <li>Found Items</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Found
