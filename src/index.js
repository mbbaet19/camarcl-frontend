// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
   <CartProvider>
    <App />
  </CartProvider>
);
