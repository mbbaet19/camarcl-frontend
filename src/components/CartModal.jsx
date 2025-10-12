import React from "react";
import { X, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, setCart } = useCart();

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="w-full sm:w-96 bg-white h-full shadow-xl p-6 animate-slide-left relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold text-green-700">Your Cart</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-green-600" size={22} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">
            Your cart is empty 🌿
          </p>
        ) : (
          <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-green-600 text-sm font-semibold">
                      ₱{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t mt-4 pt-4">
            <p className="flex justify-between font-semibold text-gray-700">
              <span>Total:</span>
              <span>
                ₱
                {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </p>
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
