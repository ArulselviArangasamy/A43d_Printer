import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ addToCart, addToWishlist }) {
  const products = [
    
    { id: 1, name: "Bunny Decor", price: 29.99, rating: 4.5, image:"/images/BunnyDecor.jpg" },
    { id: 2, name: "Vase", price: 29.99, rating: 4.5, image: "/images/Vase.jpg" },
    { id: 3, name: "Rain Planter", price: 29.99, rating: 4.5, image: "/images/RainPlanter.jpg" },
    { id: 4, name: "Chess Set", price: 29.99, rating: 4.5, image: "/images/chess.jpg" },
    { id: 5, name: "Earrings", price: 29.99, rating: 4.5, image: "/images/earring2.jpg" },
  ];

  return (
    <div className='container'>
        <div className='Product_list'>
       
        <div className='Leftside_menu'>
            <h2>Categories</h2>
          <ul>
            <li><Link to="../Products">Trending</Link></li>
            <li><Link to="../Household">HouseHold</Link></li>
            <li><Link to="/Toys">Toys & Games</Link></li>
            <li><Link to="/Furniture">Fashion</Link></li>
            <li><Link to="/Art">Art</Link></li>
            <li><Link to="/Photo">Photo</Link></li>
          </ul>
        </div>
        <div className='product'>
          <h2>Trending</h2>
          <div className='product_wrap'>
            {products.map((product) => (
              <div className='product_item' key={product.id}>
                <div className='product_item_img'> 
                 
                
                  <img src={product.image} alt={product.name} />
                </div>
                <div className='product_item_name'>
                  <h3>{product.name}</h3>
                  <div className='product_item_name_rating'>
                     <p className='product_item_price'>Price: ${product.price}</p>
                     <span>Rating: {product.rating}</span>
                  </div>
                 
                  <div className='product_button'>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <button className='wishlist' onClick={() => addToWishlist(product)}>Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
