import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer group"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="h-52 w-full p-4 flex items-center justify-center overflow-hidden bg-gray-50 rounded-t-xl">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h2>

        <p className="mt-2 text-green-600 font-bold text-lg">
          ${product.price.toFixed(2)}
        </p>

        <p className="text-yellow-500 text-sm">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            navigate(`/product/${product.id}`);
          }}
          className="mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer w-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
