"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-gray-800 shadow-lg">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-2 md:hidden px-6 py-4 rounded-2xl bg-black/90 backdrop-blur-md border border-gray-800 shadow-lg text-gray-300 font-medium space-y-4">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
