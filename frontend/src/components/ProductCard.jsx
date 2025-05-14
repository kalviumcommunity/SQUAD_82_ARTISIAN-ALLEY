// /components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-200 w-full max-w-xs mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <p className="text-indigo-600 font-bold text-lg mb-1">₹{product.price}</p>
      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;