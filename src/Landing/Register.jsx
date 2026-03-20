import React from 'react'

export default function Register() {
  return (
    <div  className='container'>
        <form className='login-form'>
            <h1>Register</h1>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Phone Number' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Register</button>
        </form>
    </div>
  )
}
