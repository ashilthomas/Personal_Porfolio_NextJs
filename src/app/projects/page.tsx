"use client";

import { projects } from "@/data/Projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Define project type


export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition group"
            >
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Github size={18} /> Code
                  </a>
                )}

                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Github size={18} /> Frontend
                  </a>
                )}

                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Github size={18} /> Backend
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
