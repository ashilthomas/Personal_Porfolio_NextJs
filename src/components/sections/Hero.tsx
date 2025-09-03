"use client";

import React, { useRef, type JSX } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero(): JSX.Element {
  const containerRef = useRef<HTMLElement | null>(null);

  // -- Scroll progress for this hero (0 -> hero top at viewport top, 1 -> hero bottom at viewport top)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth the scroll progress so parallax is buttery
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 36, mass: 0.45 });

  // -- Pointer (mouse) values normalized to [-1, 1]
  const pointerX = useMotionValue(0); // -1 (left) -> 1 (right)
  const pointerY = useMotionValue(0); // -1 (top) -> 1 (bottom)

  // Smooth pointer with spring
  const pointerXSpring = useSpring(pointerX, { stiffness: 120, damping: 28 });
  const pointerYSpring = useSpring(pointerY, { stiffness: 120, damping: 28 });

  // -- Compose layer transforms by combining scroll + pointer
  // background (very subtle)
  const bgY = useTransform([smoothProgress, pointerYSpring], ([s, p]) => s * 30 + p * 6);
  const bgX = useTransform(pointerXSpring, (p) => p * 10);

  // mid layer (breathing blob)
  const midY = useTransform([smoothProgress, pointerYSpring], ([s, p]) => s * 60 + p * 14);
  const midX = useTransform(pointerXSpring, (p) => p * 18);

  // foreground (text & primary content moves most)
  const fgY = useTransform([smoothProgress, pointerYSpring], ([s, p]) => s * 140 + p * 28);
  const fgX = useTransform(pointerXSpring, (p) => p * 30);

  // subtle scale of hero with scroll (makes cinematic dissolve)
  const heroScale = useTransform(smoothProgress, [0, 0.7], [1, 0.94]);

  // pointer handler: normalize coords to [-1,1] relative to container center
  const handlePointerMove = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1..1
    pointerX.set(nx);
    pointerY.set(ny);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="hero"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex items-center justify-center text-center min-h-[100vh] px-6 overflow-hidden bg-[#050505] text-gray-100"
    >
      {/* BACKGROUND LAYER — wide gradient (slow) */}
      <motion.div
        style={{ y: bgY, x: bgX, scale: 1.03 }}
        className="pointer-events-none absolute inset-0 -z-30 bg-gradient-to-b from-[#050505] via-[#071025] to-[#050505] will-change-transform"
      />

      {/* LARGE BREATHING ORB (mid layer) */}
      <motion.div
        style={{ y: midY, x: midX }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[-320px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600/18 blur-[120px] -z-20 will-change-transform"
      />

      {/* PURPLE GLOW (closer mid layer) */}
      <motion.div
        style={{ y: midY, x: useTransform(pointerXSpring, (p) => p * -28) }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-300px] right-[-170px] w-[700px] h-[700px] rounded-full bg-purple-600/16 blur-[120px] -z-10 will-change-transform"
      />

      {/* Subtle vignette / noise overlay to add cinematic texture */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_20%)] mix-blend-overlay" />

      {/* FOREGROUND CONTENT (text, buttons) — this is moved more for parallax */}
      <motion.div
        style={{ y: fgY, x: fgX, scale: heroScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.05 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
         MERN <span className="text-blue-400">Stack</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Web Developer
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          I’m <span className="font-semibold text-white">Ashil Thomas</span> — a
          full-stack developer building immersive, high-performance sites with{" "}
          <span className="text-blue-400">Next.js/React.Js</span> and{" "}
          <span className="text-purple-400">Javascript</span>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:translate-y-[-2px] transition-all"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200 font-semibold hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
