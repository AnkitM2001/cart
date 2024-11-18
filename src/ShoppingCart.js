import React, { useState } from 'react';

const ShoppingCart = ({ cart, removeFromCart, applyDiscount }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleApplyDiscount = () => {
    if (discountCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% discount
      setDiscountApplied(true);
    } else {
      alert('Invalid discount code');
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const totalAfterDiscount = total - (total * discount);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalAfterDiscount.toFixed(2)}</p>
      <input
        type="text"
        placeholder="Discount code"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <button onClick={handleApplyDiscount} disabled={discountApplied}>
        Apply Discount
      </button>
    </div>
  );
};

export default ShoppingCart;
