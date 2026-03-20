import React from 'react'

export default function Cart({ cartItems = [] }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className='container pad_20px'>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className='cart-items-list'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item' >
              <img src={item.image} alt={item.name} />
             
                <h3>{item.name}</h3>
                <div className='cart-item-price'>
                <p>Price: <span>{item.price}</span></p>
             </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: {total}</h3>
            <button >Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p className='emptypara'>Your cart is empty.</p>
      )}
    </div>
  )
}
