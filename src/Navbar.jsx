import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar({ cartCount, wishlistCount }) {
  return (
    <div className="navbar">
        <div>
            <h2 className='logo'><Link to="/">A43D Printing</Link></h2>
        </div>
        <ul className='nav-links'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Products">Products</NavLink></li>
            <li><NavLink to="/Wishlist">Wishlist</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
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
