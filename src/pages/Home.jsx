// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-2">
          Camarcl Plants and Flower Shop
        </h1>
        <p className="text-gray-600 mb-6">
          Your trusted partner in growing nature at home.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
            Shop Now
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Featured Products</h2>
        <p className="text-gray-600 mb-10">
          Explore our handpicked selection of beautiful plants and flowers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
            <img
              src="/monstera.png"
              alt="Monstera Deliciosa"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold">Monstera Deliciosa</h3>
            <p className="text-green-600 font-bold">$45.99</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
              Add to Cart
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
            <img
              src="/succulent.jpg"
              alt="Succulent Collection"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold">Succulent Collection</h3>
            <p className="text-green-600 font-bold">$24.99</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
              Add to Cart
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
            <img
              src="/fiddle-leaf.jpg"
              alt="Fiddle Leaf Fig"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold">Fiddle Leaf Fig</h3>
            <p className="text-green-600 font-bold">$89.99</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
              Add to Cart
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
            <img
              src="/romantic-bouquet-pink-roses.jpg"
              alt="Pink Rose Bouquet"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold">Pink Rose Bouquet</h3>
            <p className="text-green-600 font-bold">$55.00</p>
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full">
              Add to Cart
            </button>
          </div>
        </div>

        <Link to="/products"
        className="mt-10 inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
        View All Products
        </Link>

      </section>
    </main>
  );
};

export default Home;
