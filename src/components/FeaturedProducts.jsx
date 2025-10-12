import React from "react";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "$45.99",
    image: "/plants/monstera.jpg",
    tag: "Featured",
  },
  {
    id: 2,
    name: "Succulent Collection",
    price: "$24.99",
    image: "/plants/succulents.jpg",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: "$89.99",
    image: "/plants/fiddle-leaf.jpg",
    tag: "Featured",
  },
  {
    id: 4,
    name: "Pink Rose Bouquet",
    price: "$55.00",
    image: "/plants/roses.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Products</h2>
      <p className="text-gray-500 mb-10">
        Explore our handpicked selection of beautiful plants and flowers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-700">{product.name}</h3>
              <p className="text-green-700 font-bold mt-2">{product.price}</p>
              <button className="mt-3 bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-full text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/products"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
