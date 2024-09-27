import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [viewCartVisible, setViewCartVisible] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    setViewCartVisible(true);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <div className="btn-container">
        <button className="btn-add" onClick={handleAddToCart}>Add to Cart</button>
        {viewCartVisible && (
          <button className="btn-view" onClick={handleViewCart}>View Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
