import React, { useState } from "react";
import productsData from "../../data/product.json";

export default function ProductDetail() {
  const product = productsData[0]; // Kamu bisa ubah ke berdasarkan ID jika perlu
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-green-600 text-xl font-bold mb-4">
            {product.price}
          </p>
          <p className="text-sm text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-4">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 border rounded-l bg-gray-200"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b">{qty}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 border rounded-r bg-gray-200"
            >
              +
            </button>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex border-b border-gray-300 mb-4">
          <button
            className={`py-2 px-6 text-sm font-semibold ${
              activeTab === "description"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`py-2 px-6 text-sm font-semibold ${
              activeTab === "additional"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Info
          </button>
          <button
            className={`py-2 px-6 text-sm font-semibold ${
              activeTab === "reviews"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" && (
          <div className="text-gray-700 text-sm leading-relaxed">
            <p>{product.description}</p>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="text-gray-700 text-sm leading-relaxed">
            <ul className="list-disc pl-5">
              {product.additionalInfo?.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            {product.reviews?.map((review, index) => (
              <div
                key={index}
                className="border p-4 rounded-md shadow-sm bg-gray-50"
              >
                <p className="font-semibold">{review.user}</p>
                <p className="text-yellow-500">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </p>
                <p className="text-sm mt-1">{review.comment}</p>
              </div>
            ))}
            {product.reviews?.length === 0 && (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
