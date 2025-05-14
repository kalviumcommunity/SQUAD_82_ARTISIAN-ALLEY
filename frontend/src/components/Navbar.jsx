// /components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        Artisan Alley
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/products" className="text-gray-700 hover:text-indigo-500">
          Products
        </Link>
        <Link to="/cart" className="text-gray-700 hover:text-indigo-500 flex items-center">
          <FaShoppingCart className="mr-1" /> Cart
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-500 flex items-center">
          <FaUser className="mr-1" /> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;