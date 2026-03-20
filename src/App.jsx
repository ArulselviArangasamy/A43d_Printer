import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Landing/Home'
import Product from './Landing/Product'
import Wishlist from './Landing/Wishlist'
import Contact from './Landing/Contact'
import Login from './Landing/Login'
import Cart from './Landing/Cart'
import './CSS/Landing.css'
import Forgot from './Landing/Forgot'
import Register from './Landing/Register'


function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} has been added to the cart!`)
  }

  const addToWishlist = (product) => {
    // Check if item is already in wishlist to prevent duplicates
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product])
      alert(`${product.name} has been added to your wishlist!`)
    } else {
      alert(`${product.name} is already in your wishlist.`)
    }
  }

  return (
    <>
    <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Product addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
      <Route path="/Wishlist" element={<Wishlist wishlistItems={wishlist} />}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart cartItems={cart} />}/>
      <Route path="/ForgotPassword" element={<Forgot/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
