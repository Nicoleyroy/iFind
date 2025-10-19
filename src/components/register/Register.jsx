import React, { useState } from 'react'
import './register.css'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
 
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <h1 className="register-title">Create your account</h1>

          <form className="register-form" >
            <div className="name-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
         
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
           
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
        
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
            
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
           
            />

            <div className="divider">- or -</div>

            <button type="button" className="google-btn" >
              <span className="google-icon">G</span>
              <span>Sign up with Google</span>
            </button>

            <button type="submit" className="primary-btn">Create account</button>
          </form>
        </div>

        <aside className="register-right">
          <div className="welcome-wrap">
            <h2>Welcome Back!</h2>
            <p>Already have an account?</p>
            <Link to="/Login">
              <button className="outline-btn">Log in</button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Register
