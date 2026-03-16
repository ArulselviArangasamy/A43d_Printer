import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Landing/Home'
import Product from './Landing/Product'
import Wishlist from './Landing/Wishlist'
import Contact from './Landing/Contact'
import Login from './Landing/Login'
import Cart from './Landing/Cart'
import './CSS/Landing.css'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/Home" element={<Home/>}/>
      <Route path="/Products" element={<Product/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>

    </Routes>
    </>
  )
}

export default App
