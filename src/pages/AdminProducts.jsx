// src/pages/AdminProducts.jsx
import React, { useEffect, useState } from "react";
import { db, storage } from "../firebaseConfig.js"; // adjust path if different
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null); // product being edited
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    imageUrl: "",
  });
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const colRef = collection(db, "products");
    const unsub = onSnapshot(colRef, (snap) => {
      setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const resetForm = () => {
    setEditing(null);
    setForm({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      imageUrl: "",
    });
    setFile(null);
    setUploadProgress(0);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Upload file to Firebase Storage and return public URL
  const uploadFileAndGetUrl = async (fileToUpload) => {
    const storageRef = ref(storage, `products/${Date.now()}-${fileToUpload.name}`);
    const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(pct);
        },
        (error) => {
          console.error("Upload error", error);
          reject(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({ url, refPath: uploadTask.snapshot.ref.fullPath });
        }
      );
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = form.imageUrl;
      let storagePath = null;

      if (file) {
        const r = await uploadFileAndGetUrl(file);
        imageUrl = r.url;
        storagePath = r.refPath;
      }

      await addDoc(collection(db, "products"), {
        name: form.name,
        description: form.description,
        price: Number(form.price || 0),
        category: form.category || "uncategorized",
        stock: Number(form.stock || 0),
        imageUrl: imageUrl || "/mnt/data/A_photograph_showcases_a_variety_of_potted_plants_.png",
        storagePath: storagePath || null,
        createdAt: serverTimestamp(),
      });

      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error creating product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (p) => {
    setEditing(p.id);
    setForm({
      name: p.name || "",
      description: p.description || "",
      price: p.price?.toString() || "",
      category: p.category || "",
      stock: p.stock?.toString() || "",
      imageUrl: p.imageUrl || "",
    });
    setFile(null);
    setUploadProgress(0);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editing) return;
    setLoading(true);

    try {
      const prodRef = doc(db, "products", editing);
      let imageUrl = form.imageUrl;
      let storagePath = null;

      // If new file uploaded, upload, and consider deleting old storage object (if present)
      if (file) {
        // Optional: delete old image in storage if product has storagePath
        // fetch existing doc to get storagePath
        const snapshotRef = await prodRef.get?.() // not used; instead we'll update and not delete automatically
        const r = await uploadFileAndGetUrl(file);
        imageUrl = r.url;
        storagePath = r.refPath;
      }

      await updateDoc(prodRef, {
        name: form.name,
        description: form.description,
        price: Number(form.price || 0),
        category: form.category || "uncategorized",
        stock: Number(form.stock || 0),
        imageUrl,
        ...(storagePath ? { storagePath } : {}),
        updatedAt: serverTimestamp(),
      });

      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error updating product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (p) => {
    if (!window.confirm(`Delete product "${p.name}"?`)) return;
    try {
      // delete storage file if exists
      if (p.storagePath) {
        const fileRef = ref(storage, p.storagePath);
        await deleteObject(fileRef).catch((err) => {
          // ignore if missing
          console.warn("Could not delete storage file:", err);
        });
      }

      await deleteDoc(doc(db, "products", p.id));
    } catch (err) {
      console.error(err);
      alert("Error deleting product: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin — Manage Products</h1>

        {/* FORM */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <form onSubmit={editing ? handleUpdate : handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <input
                placeholder="Product name"
                className="w-full border rounded px-3 py-2 mb-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Short description"
                className="w-full border rounded px-3 py-2 mb-2"
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  placeholder="Category"
                  className="flex-1 border rounded px-3 py-2"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                />
                <input
                  placeholder="Price"
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-36 border rounded px-3 py-2"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
                <input
                  placeholder="Stock"
                  type="number"
                  min="0"
                  className="w-28 border rounded px-3 py-2"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border rounded p-4">
              <div className="w-full h-40 bg-gray-100 rounded overflow-hidden mb-3 flex items-center justify-center">
                <img
                  src={file ? URL.createObjectURL(file) : (form.imageUrl || "/mnt/data/A_photograph_showcases_a_variety_of_potted_plants_.png")}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <input type="file" accept="image/*" onChange={handleFileChange} />

              {uploadProgress > 0 && (
                <div className="w-full bg-gray-200 rounded mt-2">
                  <div className="bg-green-600 text-white text-xs text-center rounded" style={{ width: `${uploadProgress}%` }}>
                    {uploadProgress}%
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded"
              >
                {editing ? "Save Changes" : "Create Product"}
              </button>

              {editing && (
                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="mt-2 w-full bg-gray-200 text-gray-700 py-2 rounded"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="w-full h-48 overflow-hidden rounded mb-3">
                <img src={p.imageUrl || "/mnt/data/A_photograph_showcases_a_variety_of_potted_plants_.png"} alt={p.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.category}</p>
                <p className="mt-2 font-semibold text-green-700">₱{p.price}</p>
                <p className="mt-1 text-sm text-gray-500">Stock: {p.stock}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded" onClick={() => startEdit(p)}>
                  Edit
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded" onClick={() => handleDelete(p)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
