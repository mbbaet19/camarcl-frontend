// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";


const Checkout = () => {
  const { cartItems, clearCart, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "orders"), {
        ...formData,
        items: cartItems,
        total: cartTotal,
        createdAt: serverTimestamp(),
      });
      clearCart();
      setSuccess(true);
    } catch (error) {
      console.error("Error saving order:", error);
    }
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-2xl font-bold text-green-600">Order Placed!</h2>
        <p className="text-gray-700 mt-2">Thank you for your purchase 🌿</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Checkout</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </form>

          {/* Cart Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="divide-y">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <span>{item.name}</span>
                    <span>₱{item.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 border-t pt-4 flex justify-between font-bold text-green-700">
              <span>Total:</span>
              <span>₱{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;