// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-40 object-cover mb-3 rounded-lg"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-2">₱{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
