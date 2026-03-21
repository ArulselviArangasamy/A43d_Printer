import React from 'react'
import Banner from '/images/banner.jpg'
import { Link } from 'react-router-dom'

export default function Home({ addToCart, addToWishlist }) {
  const products = [
    
    { id: 1, name: "Bunny Decor", price: 300, rating: 4.8, image:"/images/BunnyDecor.jpg" },
    { id: 2, name: "Vase", price: 200, rating: 3.0, image: "/images/Vase.jpg" },
    { id: 3, name: "Rain Planter", price: 800, rating: 3.5, image: "/images/RainPlanter.jpg" },
    { id: 4, name: "Chess Set", price: 900, rating: 4.5, image: "/images/chess.jpg" },
    { id: 5, name: "Earrings", price: 50, rating: 5.0, image: "/images/earring2.jpg" },
  ];
    const newArrivalsproducts = [
    
    { id: 1, name: "Batman", price: 299.99, rating: 4.0, image:"/images/Batman.jpg" },
    { id: 2, name: "cat Helmet", price: 400, rating: 3.5, image: "/images/catHelmet.jpg" },
    { id: 3, name: "Corner Bracket", price: 150, rating: 4.5, image: "/images/CornerBracket.jpg" },
    { id: 4, name: "Keychain", price: 100, rating: 5.0, image: "/images/Keychain.jpg" },
    { id: 5, name: "Earrings", price: 50, rating: 4.5, image: "/images/earring1.jpg" },
  ]; 
  const bestSales =   [
    
    { id: 1, name: "Hair pin", price: 80, rating: 5.0, image:"/images/Hairpin.jpg" },
    { id: 2, name: "Laptop Stand", price: 100, rating: 3.5, image: "/images/LaptopStand.jpg" },
    { id: 3, name: "Vacum Clear set", price: 100, rating: 4.5, image: "/images/Vacuum.jpg" },
    { id: 4, name: "Clock", price: 200, rating: 2.5, image: "/images/clock.jpg" },
    { id: 5, name: "Solar System", price: 1000, rating: 4.0, image: "/images/solarsystem.jpg" },
  ];
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
            {products.map((product) => (
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
{newArrivalsproducts.map((newArivalsproduct) => (
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
