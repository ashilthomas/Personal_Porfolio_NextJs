"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Define project type
type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string; // optional (for single repo projects)
  frontend?: string;
  backend?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Ai image generator",
    description:
      "AI-powered image generator using Clip Drop.",
    tech: ["React.js", "Razorpay", "Clip Drop","nodejs"],
    frontend: "https://github.com/ashilthomas/AiImagefy.git",
     backend: "https://github.com/ashilthomas/AiImagerfy_BE.git",
    demo: "https://aiimagefy.netlify.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce store with product filtering, cart, and Razorpay payments.",
    tech: ["React.js", "Node.js", "MongoDB"],
    frontend: "https://github.com/ashilthomas/FoodOrderWebsite_frontend.git",
    backend: " https://github.com/ashilthomas/FoodOrderWebsite_Backend.git",
    demo: "https://foodorderweb1.netlify.app/",
  },
 
  {
    title: "AI Chat Bot Application",
    description:
      "Real-time chat app with authentication and live messaging.",
    tech: ["React.js", "TypeScript", "MongoDB"],
  frontend: "https://github.com/ashilthomas/AiChatbot-FE.git",
    backend: " https://github.com/ashilthomas/AiChatbot-BE.git",
    demo: "https://aichatbotts.netlify.app/",
  },
  {
    title: "book store website",
    description:
      "Online book store with browsing, cart, and checkout features.",
    tech: ["React.js", "mongoDB", "node.js","Razorpay"],
  frontend: "https://github.com/ashilthomas/online-bookstore-frontend.git",
    backend: "https://github.com/ashilthomas/online-bookstore-backend.git",
    demo: "https://online-bookstore-web.netlify.app/",
  },
  {
    title: "Simple prodcut page",
    description:
      "sample project for filter and search functionality and cart, and checkout features.",
    tech: ["React.js","CSS","Api"],
  frontend: "https://github.com/ashilthomas/sample_Filter_Search_web.git",
    demo: "https://sample-filter-search-web.vercel.app/",
  },
  {
    title: "Basic Weather app",
    description:
      "A simple weather app that fetches and displays weather data from an external API.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/weatherapp-js.git",
    demo: " https://ashilthomas.github.io/weatherapp-js/",
  },
  {
    title: "Static web page",
    description:
      "A simple static web page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/static-website-furniture.git",
    demo: "https://ashilthomas.github.io/static-website-furniture/",
  },
  {
    title: "Static Netflix page",
    description:
      "A simple static Netflix page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/static_netflix_web.git",
    demo: "https://ashilthomas.github.io/static-website-furniture/",
  },
  {
    title: "Static autocomplete search page",
    description:
      "A simple static autocomplete search page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/simple_autocomplete_search_web.git",
    demo: "https://ashilthomas.github.io/simple_autocomplete_search_web/",
  },
  {
    title: "Simple image gallery page",
    description:
      "A simple static image gallery page using html and css.",
    tech: ["Javascript","CSS","Html"],
  frontend: "https://github.com/ashilthomas/simple_image_gallery_web.git",
    demo: " https://ashilthomas.github.io/simple_image_gallery_web/",
  },
  {
    title: "portfolio website",
    description:
      "A simple portfolio website using html and css.",
    tech: ["Javascript","CSS","Html","bootstrap"],
  frontend: "https://github.com/ashilthomas/Portfolio_web1.git",
    demo: "https://portfolio-web1-zeta.vercel.app/",
  },
  {
    title: "portfolio website 2",
    description:
      "A simple portfolio website using html bootstrap",
    tech: ["Javascript","Html","bootstrap"],
  frontend: "https://github.com/ashilthomas/Portfolio_web2.git",
    demo: "https://portfolio-web2-livid.vercel.app/",
  },
];


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
