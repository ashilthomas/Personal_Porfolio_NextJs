"use client";

import { projects } from "@/data/Projects";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]" />

      {/* Glowing Blobs */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[180px] -z-10"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[200px] -z-10"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
      >
        Featured <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.slice(0, 3).map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 transition group relative"
          >
            <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/10 border border-white/20 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  <Github size={18} /> Code
                </a>
              )}

              {project.frontend && (
                <a
                  href={project.frontend}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  <Github size={18} /> Frontend
                </a>
              )}

              {project.backend && (
                <a
                  href={project.backend}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  <Github size={18} /> Backend
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/projects"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          See All Projects
        </Link>
      </motion.div>
    </section>
  );
}
