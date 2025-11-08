"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  { name: "Temi", role: "Lead Designer" },
  { name: "Threat", role: "Frontend Engineer" },
  { name: "Ghost", role: "Product Manager" },
  { name: "Emeka", role: "Backend Engineer" },
  { name: "Hope-Jr", role: "Founder" },
];

export default function MysteriousTeam() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Meet the Minds Behind the Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Visionaries operating in the shadows, bringing ideas to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.1, rotateZ: 2 }}
            className="relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-md border border-zinc-700 rounded-3xl hover:border-cyan-400/60 shadow-lg transition"
          >
            {/* Abstract icon with animated glow */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-cyan-400 opacity-70 z-10" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur opacity-30"
              />
            </div>

            {/* Name & Role */}
            <p className="text-xl font-semibold text-white mb-1">{member.name}</p>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
