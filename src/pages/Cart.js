import React, { useState, useEffect } from 'react';
import config from '../config';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${config.apiUrl}/cart/getCart.php`)
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.productId}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
