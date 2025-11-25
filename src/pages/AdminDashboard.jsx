import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      if (!auth.currentUser) {
        navigate("/signin");
        return;
      }

      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);

      if (!snap.exists() || snap.data().role !== "admin") {
        navigate("/profile"); // non-admin → profile
        return;
      }

      setAdminName(snap.data().name);
    };

    checkAdmin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        
        <h1 className="text-3xl font-bold mb-4">
          Admin Dashboard
        </h1>

        <p className="text-gray-700 mb-8">
          Welcome back, <span className="font-semibold">{adminName}</span> 👋  
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Products */}
          <div
            className="p-5 border rounded-xl shadow hover:shadow-lg transition cursor-pointer bg-blue-50"
            onClick={() => navigate("/admin/products")}
          >
            <h2 className="text-xl font-semibold">Manage Products</h2>
            <p className="text-gray-600 mt-2">
              Add, edit, or delete items in your store.
            </p>
          </div>

          {/* Orders */}
          <div
            className="p-5 border rounded-xl shadow hover:shadow-lg transition cursor-pointer bg-green-50"
            onClick={() => navigate("/admin/orders")}
          >
            <h2 className="text-xl font-semibold">Customer Orders</h2>
            <p className="text-gray-600 mt-2">
              View all customer orders and statuses.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
