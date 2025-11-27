import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUpModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // CREATE AUTH USER
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      // SAVE USER INFO IN FIRESTORE
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        role: form.role,
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
          Create an Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="block font-medium">Account Type</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin / Owner</option>
            </select>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
