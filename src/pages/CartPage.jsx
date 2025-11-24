// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>₱{item.price} x {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-4 text-lg font-semibold">
            <span>Total:</span>
            <span>₱{total.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={clearCart}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
            import { Link } from "react-router-dom";

            // Inside the component’s return:
            <Link
              to="/checkout"
              className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
            >
              Proceed to Checkout
            </Link>

          </div>
        </>
      )}
    </div>
  );
}
