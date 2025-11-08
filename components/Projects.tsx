"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "PeacefulatHomeLLC",
    description:
      "A US-based caregiving business that connects families with qualified caregivers. Users book care services, manage schedules. Designed to validate demand and streamline eldercare services efficiently.",
    link: "https://www.peacefulathomellc.com/",
  },
  {
    title: "Ajoku",
    description:
      "Ajoku connects you with reliable work‑men for any home‑life chore you can imagine — from everyday errands to major fixes — helping you get things done fast, easily and affordably.",
    link: "https://www.ajoku.ng/",
  },
  {
    title: "LearnHCIS",
    description:
      "HCIS is a learning platform, and we built the admin UI to manage courses, users, and content efficiently, ensuring a seamless experience for instructors and administrators.",
    link: "https://github.com/tobinigeria/hcis",
  },
  {
    title: "Ilios",
    description:
      "Ilios is a medical procurement platform that enables users to source and order medical supplies nationwide. We developed a part of the frontend, creating a user-friendly interface for seamless ordering and tracking. (Not live yet)",
    link: "https://github.com/ilios91/ilios-fe",
  },
  {
    title: "SwtFyn",
    description:
      "SwtFyn is an AI-powered financial management platform that helps users track, analyze, and optimize their spending, providing smart insights for better financial decisions.",
    link: "https://swtfyn.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Here are some of the projects I’ve built — fast, scalable, and designed to make an impact.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-between rounded-3xl p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 cursor-pointer transition-all hover:shadow-[0_0_40px_#ec4899,0_0_30px_#22d3ee] hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                  title="Visit project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
