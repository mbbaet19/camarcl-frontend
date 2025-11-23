// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-10 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">Camarcl Plants and Flower Shop</h4>
          <p>Your trusted partner in growing nature at home. Proudly Filipino-owned, Camarcl Plants provides quality plants, flowers, and eco-friendly gardening essentials since 2024..</p>
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
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p><FontAwesomeIcon icon={faLocationDot} />Brgy. Casinsin, Pakil, Laguna, Philippines</p>
          <p><FontAwesomeIcon icon={faPhone} />: +63 977 797 2078</p>
          <p><FontAwesomeIcon icon={faEnvelope} />: clcamar74@gmail.com</p>
          <p><FontAwesomeIcon icon={faGlobe} />: www.camarclplants.com</p>
          <p><FontAwesomeIcon icon={faFacebook} />: facebook.com/camarclplants</p>
          <p><FontAwesomeIcon icon={faInstagram} />: @camarclplants</p>
          <br></br>

        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-200 pt-4 text-gray-500">
        © 2025 Camarcl Plants & Flowers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

