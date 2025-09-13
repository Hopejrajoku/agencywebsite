"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Shadow", role: "Lead Designer" },
  { name: "Cipher", role: "Frontend Engineer" },
  { name: "Ghost", role: "Product Manager" },
  { name: "Nova", role: "Backend Engineer" },
  { name: "Specter", role: "Founder & CEO" },
];

export default function MysteriousTeam() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Meet the Minds Behind the Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Visionaries operating in the shadows, bringing ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-5 items-center">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-md border border-zinc-700 rounded-3xl hover:border-cyan-400/60 shadow-lg transition"
          >
            {/* Abstract silhouette icon */}
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-cyan-400 opacity-60" />
              <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur opacity-30"></div>
            </div>

            {/* Mysterious name */}
            <p className="text-xl font-semibold text-white mb-1">{member.name}</p>

            {/* Role */}
            <p className="text-gray-400 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
