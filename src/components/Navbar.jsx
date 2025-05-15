// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import  React,{ useContext } from 'react';
import { CartContext } from '../context/ContextCart';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold text-blue-600">🛍️ Quick Shop</Link>

      <div className="flex items-center gap-4">
        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-blue-600 transition"
        >
          <FaShoppingCart/>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
