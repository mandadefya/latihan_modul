import React, { useState } from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import productsData from "../../data/product.json";
import ProductDetail from "./ProductDetail"; 

export default function TopProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-heading font-bold text-center mb-8">
        Similar Products
      </h2>
      <p className="text-center text-gray-500 mb-6">Recently Added</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow-md overflow-hidden relative cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            {product.sale && (
              <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 top-2 left-2 rounded z-10">
                Sale
              </div>
            )}

            <div className="p-6 flex justify-center items-center bg-white relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 object-contain"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                  className="bg-green-400 hover:bg-green-500 text-white rounded-full p-2 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("View clicked");
                  }}
                >
                  <FiEye size={20} />
                </button>
                <button
                  className="bg-green-400 hover:bg-green-500 text-white rounded-full p-2 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Wishlist clicked");
                  }}
                >
                  <FiHeart size={20} />
                </button>
                <button
                  className="bg-gray-800 hover:bg-green-600 text-white rounded-full p-2 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Add to cart clicked");
                  }}
                >
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>

            <div className="p-4 text-center bg-white">
              <h3 className="font-heading font-bold text-lg">{product.name}</h3>
              <div className="flex justify-center mt-2 space-x-1 text-green-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-gray-700 font-semibold text-lg">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-gray-700 hover:text-gray-900 px-4 py-2 font-bold text-xl float-right"
              aria-label="Close detail modal"
            >
              &times;
            </button>
            <ProductDetail product={selectedProduct} />
          </div>
        </div>
      )}
    </section>
  );
}
