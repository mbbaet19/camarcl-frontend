import { useCart } from "../context/CartContext";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Checkout() {
  const { cart, totalPrice } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "orders"), {
        name,
        address,
        cart,
        total: totalPrice,
        createdAt: new Date(),
      });
      setMessage("✅ Order placed successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to place order.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Checkout
      </h2>

      <form onSubmit={handleCheckout} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>

        <p className="text-lg font-semibold text-green-700">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Place Order
        </button>

        {message && (
          <p
            className={`text-center font-semibold mt-4 ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Checkout;
