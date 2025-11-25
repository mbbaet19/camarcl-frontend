//import React, { useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig.js";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";


import { CartProvider } from "./context/CartContext";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [user, setUser] = useState(null);

   // Listen to login/logout state
      useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
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
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/checkout" element={<Checkout />} />
          
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
