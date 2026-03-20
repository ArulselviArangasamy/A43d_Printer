import React from 'react'
import '../CSS/Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='loginPage'>
        <div className='login-container'>
            <h2 className='logo'>A43D Printing</h2>
            <form className='login-form' >
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <span className='forgot-password'><Link to="/ForgotPassword">Forgot Password?</Link></span>
                <button>Login</button>
            </form>
              <div className='register-link'>
                <p>Don't have an account? <Link to="/Register">Register here</Link></p>
              </div>
              
        </div>
        
    </div>
  )
}
