import React from 'react'
import '../CSS/Login.css'
export default function Login() {
  return (
    <div className='loginPage'>
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form' action="" method='post'>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
        
    </div>
  )
}
