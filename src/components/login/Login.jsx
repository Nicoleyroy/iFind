import React, { useState } from 'react'
import './login.css'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  
  return (
    <div className="login-page">
      <div className="login-card">
        <aside className="login-left">
          <div className="left-wrap">
            <h2>Hello, Welcome!</h2>
            <p>Don't have an account?</p>
            <Link to="/register">
              <button className="outline-light">Register</button>
            </Link>
          </div>
        </aside>

        <div className="login-right">
          <h1 className="login-title">Log In</h1>
          <form className="form" >
            <input
              type="email"
              name="email"
              placeholder="Email"

            />
            <div className="form">
              <input
                type="password"
                name="password"
                placeholder="Password"

              />
            </div>

            <div className="line">
              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"

                />
                <span>Remember me</span>
              </label>
              <a className="forgot" href="#">Forgot password?</a>
            </div>

            <div className="divider">- or -</div>

            <button type="button" className="google-btn">
              <span className="google-icon">G</span>
              <span>Sign in with Google</span>
            </button>

            <Link to="/Found-Items">
              <button className="primary-btn">Login</button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
