// src/components/FloatingCartButton.jsx
import  React,{ useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/ContextCart';
import { FaShoppingCart } from 'react-icons/fa';

const FloatingCartButton = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null; // Hide if cart is empty

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => navigate('/cart')}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaShoppingCart className="text-xl" />
        <span className="font-medium">Go to Cart ({totalItems})</span>
      </button>
    </div>
  );
};

export default FloatingCartButton;
