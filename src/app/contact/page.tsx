"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    setMessage("✅ Thanks for reaching out! I'll get back to you soon.");
    
  };

  return (
    
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg transition"
          >
            Send Message
          </motion.button>
        </form>
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-green-400 font-medium"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
