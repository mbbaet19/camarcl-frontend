import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const docRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(docRef);
        if (userSnap.exists()) {
          setFormData(userSnap.data());
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, formData);
    alert("Profile updated successfully!");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <label className="block mb-2">Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full rounded mb-4"
      />

      <label className="block mb-2">Email</label>
      <input
        name="email"
        value={formData.email}
        disabled
        className="border p-2 w-full rounded mb-4 bg-gray-200"
      />

      <label className="block mb-2">Role</label>
      <input
        name="role"
        value={formData.role}
        disabled
        className="border p-2 w-full rounded mb-4 bg-gray-200"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}
