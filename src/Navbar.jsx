import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar({ cartCount, wishlistCount }) {
  return (
    <div className="navbar">
        <div>
            <h2 className='logo'><Link to="/Home">A43D Printing</Link></h2>
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
                <li className='wishlist'><Link to="/Wishlist">Wishlist {wishlistCount > 0 && `(${wishlistCount})`}</Link></li>
                <li className='cart'><Link to="/Cart">Cart {cartCount > 0 && `(${cartCount})`}</Link></li>
            </ul>
            
        </div>
    </div>
  )
}
