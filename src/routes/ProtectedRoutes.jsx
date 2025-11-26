// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("userToken"); // or your auth state
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
