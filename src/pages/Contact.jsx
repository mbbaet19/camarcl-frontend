// src/pages/Contact.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5500/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus("Message sent successfully! 🌿");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Please try again.");
      }

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg opacity-90">
          We’d love to hear from you! Whether it's about plants, flowers, or orders — send us a message anytime.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Left - Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Send Us a Message</h2>

          {status && (
            <p className="mb-4 text-center text-sm font-medium text-green-700">
              {status}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Contact Info & Map */}
        <div>
          <div className="bg-white p-8 rounded-xl shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <Phone className="text-green-700" /> +63 977 797 2078
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-green-700" /> clcamar74@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-green-700" /> Pakil, Laguna, Philippines
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-green-700">Follow Us</h3>
              <div className="flex gap-4 text-green-700">
                <a href="https://facebook.com/camarclplants" className="hover:text-green-900" target="_blank" rel="noopener noreferrer"><Facebook size={26} /></a>
                <a href="https://instagram.com/camarclplants" className="hover:text-green-900" target="_blank" rel="noopener noreferrer"><Instagram size={26} /></a>
              </div>
            </div>
          </div>

          {/* Map */}
          <iframe
            className="w-full h-64 rounded-xl shadow-md"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.9292687692783!2d121.478887!3d14.381814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e3486a1ad1e7%3A0x7ec41d1a90bbf630!2sPakil%2C%20Laguna!5e0!3m2!1sen!2sph!4v1700000000000"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
