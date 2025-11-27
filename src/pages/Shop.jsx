// src/pages/Shop.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // if you already have a cart context

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // optional; adapt if you use a different cart

  useEffect(() => {
    const q = collection(db, "products");
    const unsub = onSnapshot(q, (snap) => {
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="w-full h-44 overflow-hidden rounded mb-3">
                <img src={p.imageUrl || "/mnt/data/A_photograph_showcases_a_variety_of_potted_plants_.png"} alt={p.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.category}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-semibold text-green-700">₱{p.price}</p>
                <p className="text-sm text-gray-500">Stock: {p.stock}</p>
              </div>

              <div className="mt-4">
                <button className="w-full bg-green-600 text-white py-2 rounded" onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
