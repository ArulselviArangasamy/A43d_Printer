import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Landing/Home'
import Product from './Landing/Product'
import Wishlist from './Landing/Wishlist'
import Contact from './Landing/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/Landing/Home" element={<Home/>}/>
      <Route path="/Landing/Products" element={<Product/>}/>
      <Route path="/Landing/Wishlist" element={<Wishlist/>}/>
      <Route path="/Landing/Contact" element={<Contact/>}/>
    </Routes>

     
   
      <div className="App">
        <h1>A43dPrinter</h1>
        <p>3D printing made easy.</p>
      </div>
    </>
  )
}

export default App
