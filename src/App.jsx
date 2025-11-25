//import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [user, setUser] = useState(null);

   // Listen to login/logout state
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

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />

        {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
        {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/admin/products"
            element={ user && user.role === "admin" ? <AdminProducts /> : <Navigate to="/" replace /> }
          />
          {/* 🔐 PROTECTED ROUTE */}
          <Route
            path="/profile"
            element={
              user ? <Profile /> : <Navigate to="/profile" replace />
            }
          />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
