import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/Landing/Home">Home</Link></li>
            <li><Link to="/Landing/Products">Products</Link></li>
            <li><Link to="/Landing/Wishlist">Wishlist</Link></li>
            <li><Link to="/Landing/Contact">Contact</Link></li>
           
             
        </ul>
    </div>
  )
}
