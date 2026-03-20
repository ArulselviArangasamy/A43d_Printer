import React from 'react'
import { Link } from 'react-router-dom'

export default function Wishlist({ wishlistItems = [] }) {
  return (
    <div className='container pad_20px'>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="wishlist-items-list" >
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <h3 >{item.name}</h3>
              <p >Price: ${item.price}</p>
              {/* Optional: Add a button here to move item to cart */}
              <Link to="/Products">
                 View Produc
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>Your wishlist is empty.</p>
      )}
    </div>
  )
}
