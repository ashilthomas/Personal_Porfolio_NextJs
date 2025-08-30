"use client";

import { projects } from "@/data/Projects";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0a0a0a]" />

      {/* Glowing Blobs */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[160px] -z-10"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[160px] -z-10"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
      >
        Featured <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0px 12px 32px rgba(59,130,246,0.3)",
            }}
            className="p-6 rounded-2xl bg-[#111827]/70 border border-gray-700 shadow-lg backdrop-blur-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="inline-block mt-auto text-blue-400 font-semibold hover:underline"
              >
                View Project →
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <Link
          href="/projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          See All Projects
        </Link>
      </motion.div>
    </section>
  );
}
