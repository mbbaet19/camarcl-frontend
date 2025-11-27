import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/register`, {
        fullName,
        email,
        contactNumber,
        password,
        role,
      });

      if (res.data.success) {
        navigate("/login");
      } else {
        setError(res.data.message || "Registration failed.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side Image */}
      <div className="hidden md:flex md:w-1/2 bg-green-700 items-center justify-center">
        <img
          src="/display.jpg"
          alt="Register Illustration"
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>

      {/* Right side Form */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-8 md:p-12 bg-gray-50">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg
                        bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 mb-6 text-center">
            Create an Account
          </h2>

          {error && (
            <p className="text-red-500 mb-4 text-center font-medium">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="Juan Dela Cruz"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Contact Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="+63 912 345 6789"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 text-sm font-medium"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* User Role */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">User Role</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg 
                         font-semibold hover:bg-green-800 transition"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className="text-green-700 font-medium cursor-pointer ml-1"
              >
                Login
              </span>
            </p>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            © 2025 Camarcl Flowershop
          </p>
        </div>
      </div>
    </div>
  );
}
