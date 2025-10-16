import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '', remember: false })

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // eslint-disable-next-line no-alert
    alert('Logged in!')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <aside className="login-left">
          <div className="left-wrap">
            <h2>Hello, Welcome!</h2>
            <p>Don't have an account?</p>
            <button className="outline-light">Register</button>
          </div>
        </aside>

        <div className="login-right">
          <h1 className="login-title">Log In</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <div className="form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
             
            </div>

            <div className='line'>
                <label className="remember">
                <input
                    type="checkbox"
                    name="remember"
                    checked={formValues.remember}
                    onChange={handleChange}
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

            <button type="submit" className="primary-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login


