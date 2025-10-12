// src/components/LoginModal.jsx
import React, { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("Customer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password || (isSignUp && !formData.name)) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");

    // Simulate success animation
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {success ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Success! 🎉
            </h2>
            <p className="text-gray-600">Welcome {role}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-center mb-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </h2>
            <p className="text-center text-gray-500 mb-5 text-sm">
              {isSignUp ? "Join us today!" : "Welcome back!"}
            </p>

            {/* Role */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              >
                <option>Customer</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Name */}
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
            >
              {isSignUp ? `Sign Up as ${role}` : `Sign In as ${role}`}
            </button>

            {/* Switch forms */}
            <div className="mt-4 text-center text-sm text-gray-600">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
