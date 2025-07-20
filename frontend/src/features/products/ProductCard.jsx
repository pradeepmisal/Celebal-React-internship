import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../contexts/StoreProvider";

const ProductCard = ({ product }) => {
  const { addToCart, currency } = useContext(StoreContext);

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-t-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">
            {currency}{product.price.toFixed(2)}
          </p>
          
          <button
            onClick={() => addToCart(product._id)}
            className="inline-flex items-center rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
