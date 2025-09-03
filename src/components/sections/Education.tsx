"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section 
      id="education"
      className="relative py-20 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
      >
        My <span className="text-blue-400">Education</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8 px-6">
        {/* School */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-2">
            Higher Secondary Education
          </h3>
          <p className="text-gray-300 mb-2">Completed up to Grade 12</p>
        
        </motion.div>

        {/* Online Learning */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-2">
            Full Stack Development
          </h3>
          <p className="text-gray-300 mb-2">
            Learned through{" "}
            <span className="font-semibold text-white">Entri Online App</span>{" "}
            & Self Learning
          </p>
          <p className="text-gray-400 text-sm">
            Gained hands-on experience in frontend and backend technologies,
            working on real-world projects, and continuously improving skills
            through self-learning. (No formal certification, purely skill-based
            learning.)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
