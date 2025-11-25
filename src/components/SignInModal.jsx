import React, { useState } from "react";
import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Close modal
      onClose();

      // Redirect to profile
      window.location.href = "/profile";
    } catch (err) {
      console.error(err);
      setError(err.message.replace("Firebase:", ""));
    }
  };

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
        onClick={handleModalClick}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        <form onSubmit={handleSignIn}>
          <label className="text-sm block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="text-sm block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <button
          className="mt-4 w-full py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
