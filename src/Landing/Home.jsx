import React from 'react'
import Banner from '/images/banner.jpg'
import { Link } from 'react-router-dom'
import { allProducts } from './data';

export default function Home({ addToCart, addToWishlist }) {
  const trendingProducts = allProducts.filter(product => product.tags && product.tags.includes('Trending'));
  const newArrivals = allProducts.filter(product => product.tags && product.tags.includes('NewArrival'));
  const bestSales = allProducts.filter(product => product.tags && product.tags.includes('BestSale'));
  return (
    <div  className='container' >
      <div className='banner_image'>
        <img src={Banner} alt="Banner" />
        <h1>Welcome to A43D Printing</h1>
        <p>Discover the future of 3D printing</p>
        <Link to="/Products">Shop Now</Link>
      </div>
      <div>
        <div className='product'>
          <h2 className="center-text">Trending</h2>
          <div className='product_wrap'>
            {trendingProducts.map((product) => (
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
           <h2 className="center-text">New Arrivals </h2>
           <div className='product_wrap'>
{newArrivals.map((newArivalsproduct) => (
              <div className='product_item' key={newArivalsproduct.id}>
                <div className='product_item_img'> 
                 
                
                  <img src={newArivalsproduct.image} alt={newArivalsproduct.name} />
                </div>
                <div className='product_item_name'>
                  <h3>{newArivalsproduct.name}</h3>
                  <div className='product_item_name_rating'>
                     <p className='product_item_price'>Price: {newArivalsproduct.price}</p>
                     <span>Rating: {newArivalsproduct.rating}</span>
                  </div>
                 
                  <div className='product_button'>
                    <button onClick={() => addToCart(newArivalsproduct)}>Add to Cart</button>
                    <button className='wishlist' onClick={() => addToWishlist(newArivalsproduct)}>Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
           </div>
           <h2 className="center-text">Best Sale </h2>
           <div className='product_wrap'>
{bestSales.map((bestSale) => (
              <div className='product_item' key={bestSale.id}>
                <div className='product_item_img'> 
                 
                
                  <img src={bestSale.image} alt={bestSale.name} />
                </div>
                <div className='product_item_name'>
                  <h3>{bestSale.name}</h3>
                  <div className='product_item_name_rating'>
                     <p className='product_item_price'>Price: {bestSale.price}</p>
                     <span>Rating: {bestSale.rating}</span>
                  </div>
                 
                  <div className='product_button'>
                    <button onClick={() => addToCart(bestSale)}>Add to Cart</button>
                    <button className='wishlist' onClick={() => addToWishlist(bestSale)}>Wishlist</button>
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
