"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  // Scope scroll only to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // animate while section is visible
  });

  // Smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.6,
  });

  // Parallax depths
  const yBackground = useTransform(smoothProgress, [0, 1], [0, 80]);
  const yMidground = useTransform(smoothProgress, [0, 1], [0, 140]);
  const yForeground = useTransform(smoothProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative  flex items-center justify-center px-6 py-20 overflow-hidden bg-[#0a0a0a] text-gray-100"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]"
      />

      {/* Glowing orbs */}
      <motion.div
        style={{ y: yMidground }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[160px] -z-20"
      />

      <motion.div
        style={{ y: yForeground }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[160px] -z-10"
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-8"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed"
        >
          I’m <span className="text-white font-semibold">Ashil</span>, a
          full-stack developer with a passion for{" "}
          <span className="text-blue-400">interactive design</span> and{" "}
          <span className="text-purple-400">cutting-edge technology</span>.  
          My mission is to craft{" "}
          <span className="text-gray-200">immersive experiences</span> that feel
          modern, fluid, and enjoyable.
        </motion.p>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Frontend",
              desc: "Crafting beautiful, responsive UIs with Next.js, React, and Tailwind CSS.",
            },
            {
              title: "Backend",
              desc: "Building scalable APIs and services using Node.js, TypeScript, and databases.",
            },
            {
              title: "Creative Tech",
              desc: "Exploring WebGL, animations, and interactive storytelling on the web.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-6 rounded-2xl bg-[#111827]/60 border border-gray-800 shadow-lg hover:shadow-blue-500/10 transition"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
