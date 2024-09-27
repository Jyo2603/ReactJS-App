import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        border: '1px solid #ccc' 
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <th style={{ textAlign: 'left', border: '1px solid #ccc', padding: '10px' }}>Product Name</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>Image</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{item.title}</td>
              <td style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100px', height: 'auto', objectFit: 'cover' }}
                />
              </td>
              <td style={{ textAlign: 'center', border: '1px solid #ccc', padding: '10px' }}>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button 
          style={{ padding: '10px', fontSize: '16px' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
