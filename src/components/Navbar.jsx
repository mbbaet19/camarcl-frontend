import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar({ onSignIn, onSignUp }) {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg text-green-700">
            Camarcl Plants & Flowers
          </span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-green-600">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-600">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-700 hover:text-green-700">Cart</Link>
          </li>
        </ul>

        {/* Right: Search, Cart, and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search plants..."
              className="border border-gray-300 rounded-full pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>

          
          {/* Sign In / Sign Up */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onSignIn}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Sign In
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={onSignUp}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
