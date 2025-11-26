import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import AddProduct from "./pages/AddProduct";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import { CartProvider } from "./context/CartContext";

// 🔐 ProtectedRoute component
const ProtectedRoute = ({ user, requiredRole, children }) => {
  if (!user) return <Navigate to="/" replace />; // not logged in
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/" replace />; // role mismatch
  return children;
};

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

  // Example: login state listener (commented out since firebase imports are commented)
  /*
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const snap = await getDoc(doc(db, "users", currentUser.uid));
        setUser({
          uid: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          role: snap.data().role,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);
  */

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />

        {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
        {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* User Protected Route */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Protected Routes */}
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

          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
