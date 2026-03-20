import React from 'react'

export default function Forgot() {
  return (
    <div className='container'>
        <form className='login-form' >
            <h1>Forgot Password</h1>
            <input type="email" placeholder='Enter your email' />
            <button>Submit</button>

        </form>
    </div>
  )
}
