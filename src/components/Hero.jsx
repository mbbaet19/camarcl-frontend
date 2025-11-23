import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-40 p-10 rounded-2xl text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Camarcl Plants and Flower Shop
        </h1>
        <p className="mb-6 text-lg">
         Your trusted partner in growing nature at home.
        </p>

        {/* ✅ Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
