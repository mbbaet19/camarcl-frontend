import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = ({ onSignIn, onSignUp }) => {
  const [userData, setUserData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setUserData(snap.data());
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
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

        {/* NAVIGATION LINKS */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/products" className="hover:text-green-600">Shop</Link></li>
          <li><Link to="/about" className="hover:text-green-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>

          {/* Admin Dashboard link */}
          {/*userData?.role === "admin" && (
            <li>
              <Link to="/admin" className="hover:text-green-600 text-red-600 font-semibold">
                Admin Dashboard
              </Link>
            </li>
          )*/}
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
              <button onClick={onSignIn} className="hover:text-green-600">
                Sign In
              </button>
              <button onClick={onSignUp} className="hover:text-green-600">
                Register
              </button>
            </>
          ) : (
            // DROPDOWN MENU
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
