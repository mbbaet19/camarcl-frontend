// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig.js";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // Load Featured Products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const ref = collection(db, "products");
      const snapshot = await getDocs(ref);

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(list.slice(0, 4)); // Show only 4 featured products
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full">

      {/* HERO / BANNER SECTION */}
      <div
        className="w-full h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('./assets/hero-bg.png')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Camarcl Plants and Flower Shop
        </h1>
        <p className="text-white mt-3 text-lg drop-shadow-md">
          Your trusted partner in growing nature at home.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            to="/shop"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
          >
            Shop Now
          </Link>

          <a
            href="#highlights"
            className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <section id="highlights" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-4">Why Choose Us?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover what makes Camarcl your trusted partner for plants, flowers, and nature-inspired joy.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl">🌿</span>
            <h3 className="font-semibold text-lg mt-3">Healthy Plants</h3>
            <p className="text-gray-600 text-sm mt-2">
              Every plant is carefully nurtured and delivered fresh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl">🚚</span>
            <h3 className="font-semibold text-lg mt-3">Fast Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Safe and quick delivery to your doorstep, guaranteed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <span className="text-4xl">💚</span>
            <h3 className="font-semibold text-lg mt-3">Customer Care</h3>
            <p className="text-gray-600 text-sm mt-2">
              We're here to help you grow and care for your plants.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-3">Featured Products</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our handpicked selection of beautiful plants and flowers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
              <p className="text-green-700 font-medium">₱{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
