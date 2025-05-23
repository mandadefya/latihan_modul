import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-gray-700 text-sm">
        <div className="flex items-center space-x-6">
          <FaTwitter className="text-gray-500 hover:text-green-600 cursor-pointer" />
          <FaFacebookF className="text-gray-500 hover:text-green-600 cursor-pointer" />
          <FaInstagram className="text-gray-500 hover:text-green-600 cursor-pointer" />
          <div className="flex items-center space-x-1 border-l border-gray-300 pl-6">
            <FaEnvelope className="text-green-600" />
            <span>info@organik.com</span>
          </div>
        </div>

        <div className="text-2xl font-heading font-bold">
          <Link to="/">
            <span className="text-green-500 text-3xl">🍃</span> BumiRasa
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 border-r border-gray-300 pr-6">
            <FaPhoneAlt className="text-green-600" />
            <span>92 666 888 0000</span>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded px-2">
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none px-2 py-1 text-sm"
            />
            <button type="submit">
              <FaSearch className="text-gray-600 cursor-pointer" />
            </button>
          </form>

          <FaShoppingCart className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
