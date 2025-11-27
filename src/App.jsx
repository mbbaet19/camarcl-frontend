// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import { CartProvider } from "./context/CartContext";

// ProtectedRoute component
const ProtectedRoute = ({ user, requiredRole, children }) => {
  if (!user) return <Navigate to="/" replace />;
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/" replace />;
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Fetch session from backend on load
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("http://localhost:5500/dashboard", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    };
    fetchSession();
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar
          user={user}
          onSignIn={() => setShowSignIn(true)}
          onSignUp={() => setShowSignUp(true)}
          setUser={setUser}
        />

        {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} setUser={setUser} />}
        {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />

          {/* User protected */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute user={user} requiredRole="admin">
                <AdminProducts />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
