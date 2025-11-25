import React, { useState } from "react";
import { auth, db } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUpModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Save to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role,
        createdAt: new Date(),
      });

      onClose();
      window.location.href = "/profile"; // Redirect
    } catch (err) {
      setError(err.message.replace("Firebase:", ""));
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
        onClick={stopPropagation}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {error && (
          <p className="text-red-600 text-sm mb-2 text-center">{error}</p>
        )}

        <form onSubmit={handleSignUp}>
          <label className="text-sm block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            className="w-full p-2 border rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="text-sm block mb-1">Role</label>
          <select
            className="w-full p-2 border rounded mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin / Owner</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Create Account
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

export default SignUpModal;
