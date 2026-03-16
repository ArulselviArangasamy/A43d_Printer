import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
        <div>
            <h2 className='logo'>A43D Printer</h2>
        </div>
        <ul className='nav-links'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/Wishlist">Wishlist</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className='nav-login'>
            <ul>
               
                <li className='login'><Link to="/Login">Login</Link></li>
                <li className='wishlist'><Link to="/Wishlist">WishList</Link></li>
                <li  className='cart'><Link to="/Cart">Cart</Link></li>
            </ul>
            
        </div>
    </div>
  )
}
