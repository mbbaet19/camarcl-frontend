import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="w-full bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Camarcl Plants and Flower Shop</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Your trusted partner in growing nature at home.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 leading-7">
        <p className="mb-6 text-lg">
          Camarcl Plants and Flower Shop is a proudly Filipino-owned business dedicated to spreading the joy of plants 
          and flowers to every home, office, and special occasion. Established in <strong>March 2024</strong> in 
          Pakil, Laguna, Camarcl offers a wide variety of indoor and outdoor plants, floral arrangements, succulents, 
          and eco-friendly gardening accessories.
        </p>

        <p className="mb-6 text-lg">
          Our mission is simple — to make nature more accessible, one plant at a time. Whether you’re a seasoned plant 
          enthusiast or a first-time buyer, our team ensures every plant is carefully nurtured, beautifully packaged, 
          and sustainably sourced.
        </p>

        <p className="mb-6 text-lg">
          We believe that every plant tells a story — of growth, care, and connection — and we’re here to help you grow 
          yours. <span className="text-green-700 font-semibold">🌱</span>
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-bold text-green-700 mt-10 mb-3">🌿 Mission</h2>
        <p className="mb-6 text-lg">
          To cultivate a greener and more sustainable community by providing high-quality plants, fresh floral 
          arrangements, and gardening essentials, while inspiring people to reconnect with nature and embrace 
          eco-friendly living.
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-bold text-green-700 mt-10 mb-3">🌺 Vision</h2>
        <p className="mb-6 text-lg">
          To become a leading online and physical plant and flower shop in the Philippines, known for our creativity, 
          quality, and heartfelt service that nurtures life and beauty — one plant at a time.
        </p>

        {/* Core Values */}
        <h2 className="text-2xl font-bold text-green-700 mt-10 mb-3">Our Core Values</h2>

        <ul className="list-disc ml-6 text-lg space-y-2">
          <li><strong>Quality & Care:</strong> We ensure that every product is healthy, beautiful, and well-prepared before delivery.</li>
          <li><strong>Sustainability:</strong> We advocate responsible gardening and sustainable plant care.</li>
          <li><strong>Customer Happiness:</strong> We aim to bring joy and satisfaction to every customer.</li>
          <li><strong>Growth & Innovation:</strong> We continuously improve our products, services, and delivery experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
