"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          MyPortfolio
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Socials */}
        <div className="flex gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
