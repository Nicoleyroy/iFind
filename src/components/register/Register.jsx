import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'


const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // In a later iteration, replace with real submit logic
    // eslint-disable-next-line no-alert
    alert(`Account created for ${formValues.firstName} ${formValues.lastName}`)
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <h1 className="register-title">Create your account</h1>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="name-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="divider">- or -</div>

            <button type="button" className="google-btn">
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
            <button className="outline-btn">Log in</button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Register


