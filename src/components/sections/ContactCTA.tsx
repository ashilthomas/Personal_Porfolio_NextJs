"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative py-20 text-center text-gray-100 overflow-hidden rounded-2xl my-16 max-w-5xl mx-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 rounded-2xl" />

      {/* Glowing blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-blue-400/30 blur-[100px] -z-10"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] rounded-full bg-purple-500/30 blur-[120px] -z-10"
      />

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-6"
      >
        Let’s <span className="text-blue-300">Work Together</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 text-lg max-w-2xl mx-auto text-gray-300"
      >
        Have an idea or project in mind? Let’s build something amazing that
        makes an impact.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contact"
          className="px-8 py-3 rounded-xl font-semibold shadow-lg bg-white text-blue-700 hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
