import React, { useState } from 'react';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle checkout
    console.log('Shipping Address:', address);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <textarea
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
