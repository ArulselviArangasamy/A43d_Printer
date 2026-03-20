import React from 'react'
import '../CSS/Contact.css'
export default function Contact() {
  return (
    <div className='container'>
        <form className='Contact_form'>
            <h1>Contact Us</h1>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="text" placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <button>Submit</button>

        </form>
    </div>
  )
}
