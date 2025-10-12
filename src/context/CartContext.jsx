// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Hook to use the cart
export const useCart = () => useContext(CartContext);

// Cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const cartCount = cart.length;

  return (
    /*<CartContext.Provider value={{ cart, addToCart, cartCount }}>*/
    <CartContext.Provider value={{ cart, setCart, addToCart, cartCount }}>

      {children}
    </CartContext.Provider>
  );
};
