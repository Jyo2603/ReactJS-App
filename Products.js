import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <button
        onClick={handleGoToCart}
        style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}
      >
        Go to Cart ({cart.length})
      </button>
    </div>
  );
};

export default Products;
