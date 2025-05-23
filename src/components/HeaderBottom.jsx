import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function HeaderBottom() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-gray-700">
        {/* Login / Register */}
        <div className="flex items-center space-x-2 cursor-pointer text-green-700 font-semibold">
          <FaUserCircle className="text-green-600" />
          <Link to="/login" className="hover:underline">
            Login / Register
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          <Link to="/guest" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About
          </Link>
          <Link to="/cek-ketersediaan-produk" className="hover:text-green-600">
            Stock
          </Link>
          <Link to="/Products" className="hover:text-green-600">
            Products
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contact
          </Link>
        </nav>

        {/* Right side icons - hanya search dan cart, tanpa nomor hp & bendera */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="English"
            className="w-5 h-5 rounded-sm"
          />
          <span>English</span>
        </div>
      </div>
    </div>
  );
}
