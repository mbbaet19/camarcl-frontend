// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-10 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">Camarcl</h4>
          <p>Your trusted source for beautiful plants and flowers since 2023.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/shop" className="hover:text-green-700">Shop</a></li>
            <li><a href="/about" className="hover:text-green-700">About</a></li>
            <li><a href="/contact" className="hover:text-green-700">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-700">Returns</a></li>
            <li><a href="#" className="hover:text-green-700">Shipping Info</a></li>
            <li><a href="#" className="hover:text-green-700">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p>123 Garden Street, Green City, GC 12345</p>
          <p>(555) 123-4567</p>
          <p>hello@camarcl.com</p>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-200 pt-4 text-gray-500">
        © 2025 Camarcl Plants & Flowers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

