"use client";

import { motion } from "framer-motion";

const skills: string[] = [
  "JavaScript",
  "HTML",
  "CSS",
  "Express.js",
  "MongoDB",
  "NoSQL",
  "Next.js",
  "TypeScript",
  "React",
  "TailwindCSS",
  "Node.js",
  "Framer Motion",
  "Git",

  "Docker",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative  flex flex-col items-center justify-center px-6 py-20 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]" />

      {/* Glowing blobs */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[160px] -z-10"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-purple-600/25 blur-[160px] -z-10"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
      >
        My <span className="text-blue-400">Tech Stack</span>
      </motion.h2>

      {/* Skills grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 24px rgba(59,130,246,0.4)",
            }}
            className="flex items-center justify-center px-6 py-4 rounded-xl bg-[#111827]/70 border border-gray-700 shadow-md text-base font-medium text-gray-200 hover:text-white transition"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
