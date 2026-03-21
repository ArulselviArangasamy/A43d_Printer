import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product({ addToCart, addToWishlist }) {
  const [category, setCategory] = useState([])
  const products = [
    { id: 1, name: "Bunny Decor", category:"Trending", price: 29.99, rating: 4.5, image:"/images/BunnyDecor.jpg" },
    { id: 2, name: "Vase", category:"HouseHold", price: 29.99, rating: 4.5, image: "/images/Vase.jpg" },
    { id: 3, name: "Rain Planter", category:"Fashion", price: 29.99, rating: 4.5, image: "/images/RainPlanter.jpg" },
    { id: 3, name: "Rain Planter", category:"Fashion", price: 29.99, rating: 4.5, image: "/images/RainPlanter.jpg" },
    { id: 4, name: "Chess Set", category:"ToysGames",cprice: 29.99, rating: 4.5, image: "/images/chess.jpg" },
    { id: 5, name: "Earrings", category:"Fashion",price: 29.99, rating: 4.5, image: "/images/earring2.jpg" },
  ];

  return (
    <div className='container'>
      <div className='banner-img'>
        <img src="/images/banner2.jpg"  alt="Banner" />
      </div>
      
      <div className='Product_list'>
        <div className='Leftside_menu'>
          <h2>Categories</h2>
          <ul>
            <li><Link onClick={()=> setCategory("Trending")} >Trending</Link></li>
            <li><Link onClick={()=> setCategory("HouseHold")} >HouseHold</Link></li>
            <li><Link onClick={()=> setCategory("ToysGames")} >Toys & Games</Link></li>
            <li><Link onClick={()=> setCategory("Fashion")} >Fashion</Link></li>
            <li><Link onClick={()=> setCategory("Art")} >Art</Link></li>
            <li><Link onClick={()=> setCategory("Photo")} >Photo</Link></li>
          </ul>
        </div>
        
        <div className='product'>
          <h2>{category}</h2>
          <div className='product_wrap'>
            {products
              .filter(item => item.category === category) // First, filter the list
              .map((product) => (                         // Then, map the filtered results
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
  );
}
