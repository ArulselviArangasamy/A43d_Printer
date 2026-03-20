import React from 'react'
import Banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div  className='container' >
      <div className='banner_image'>
        <img src={Banner} alt="Banner" />
        <h1>Welcome to A43D Printing</h1>
        <p>Discover the future of 3D printing</p>
        <Link to="/Products">Shop Now</Link>
      </div>
    
    </div>
  )
}
