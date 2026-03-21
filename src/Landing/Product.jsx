import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { allProducts } from './data';

export default function Product({ addToCart, addToWishlist }) {
  const [category, setCategory] = useState("Trending")

  return (
    <div className='container'>
      <div className='banner-img'>
        <img src="/images/banner2.jpg"  alt="Banner" />
      </div>
      
      <div className='Product_list'>
        <div className='Leftside_menu'>
          <h2>Categories</h2>
          <ul>
            <li><Link className={category === "Trending" ? "active" : ""} onClick={()=> setCategory("Trending")} >Trending</Link></li>
            <li><Link className={category === "HouseHold" ? "active" : ""} onClick={()=> setCategory("HouseHold")} >HouseHold</Link></li>
            <li><Link className={category === "ToysGames" ? "active" : ""} onClick={()=> setCategory("ToysGames")} >Toys & Games</Link></li>
            <li><Link className={category === "Fashion" ? "active" : ""} onClick={()=> setCategory("Fashion")} >Fashion</Link></li>
            <li><Link className={category === "Art" ? "active" : ""} onClick={()=> setCategory("Art")} >Art</Link></li>
            <li><Link className={category === "Photo" ? "active" : ""} onClick={()=> setCategory("Photo")} >Photo</Link></li>
          </ul>
        </div>
        
        <div className='product'>
          <h2>{category}</h2>
          <div className='product_wrap'>
            {allProducts.filter(item => item.category === category) // First, filter the list
              .map((product) => (                         // Then, map the filtered results
                <div className='product_item' key={product.id}>
                  <div className='product_item_img'> 
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className='product_item_name'>
                    <h3>{product.name}</h3>
                    <div className='product_item_name_rating'>
                       <p className='product_item_price'>Price: {product.price}</p>
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
