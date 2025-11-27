// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = ({ onSignIn, setUser }) => {
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();


  // Fetch current session on mount
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("http://localhost:5500/dashboard", {
          credentials: "include", // important for session cookie
        });
        if (res.ok) {
          const data = await res.json();
          setUserData(data.user);
          setUser?.(data.user); // update App state if setUser is passed
        } else {
          setUserData(null);
          setUser?.(null);
        }
      } catch (err) {
        console.error(err);
        setUserData(null);
        setUser?.(null);
      }
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5500/logout", {
        method: "POST",
        credentials: "include",
      });
      setUserData(null);
      setUser?.(null);
      window.location.href = "/"; // redirect to home after logout
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg text-gray-800">
            Camarcl Plants & Flowers
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/shop" className="hover:text-green-600">Shop</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search plants..."
              className="border border-gray-300 rounded-full pl-10 pr-3 py-1.5 text-sm"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-green-600">
            <ShoppingCart size={22} />
          </Link>

          {/* AUTH AREA */}
          {!userData ? (
            <>
              <button onClick={() => navigate("/register")}
                className="hover:text-green-600">
                Register
              </button>
              {/* Register now goes to Login page */}
              <button
                onClick={() => navigate("/login")}
                className="hover:text-green-600"
              >
                Login
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 font-medium text-green-700 hover:text-green-800"
              >
                {userData.name}
                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border p-2">
                  <Link
                    to="/profile"
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>

                  {userData.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 hover:bg-gray-100 text-red-600 font-semibold rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600 rounded-md"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
