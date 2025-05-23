import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Oganik Logo + Description */}
        <div>
          <h1 className="text-white font-serif text-2xl flex items-center gap-1">
            <span className="text-green-500 text-3xl">🍃</span> BumiRasa
          </h1>
          <p className="mt-4 leading-relaxed text-gray-400">
            Sajian lezat dengan harga bersahabat, tempat berkumpul keluarga dan
            sahabat
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-500" /> 666 888 0000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" /> info@company.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" /> 66 top broklyn
              street. New York
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Top Sellers</li>
            <li>Shopping</li>
            <li>About Store</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>New Products</li>
            <li>My Account</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 mb-3 text-gray-900 rounded-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Social + Copyright */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="#" aria-label="Twitter" className="hover:text-green-500">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-green-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-green-500">
            <FaInstagram />
          </a>
        </div>
        <div>© Copyright 2025 by Company.com</div>
      </div>
    </footer>
  );
}
