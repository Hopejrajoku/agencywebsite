"use client";

import { Code, Rocket, Layers, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "MVP Development",
    description: "Turn your idea into a functional prototype in just 15 days.",
    icon: Rocket,
  },
  {
    title: "Product Scaling",
    description: "From MVP to full-scale product, we ensure seamless growth.",
    icon: Layers,
  },
  {
    title: "Web & Mobile Apps",
    description: "Cross-platform, responsive, and built for performance.",
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    description: "Tailored solutions that align with your unique business needs.",
    icon: Code,
  },
];

export default function Services() {
  // Variants for fast, staggered animations
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 },
    }),
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const subtitleVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="services"
      style={{ fontFamily: "var(--sf-pro)" }}
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* Floating subtle gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full animate-ping"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={headingVariant}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text"
        >
          Our Services
        </motion.h2>

        {/* Animated Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={subtitleVariant}
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        >
          We craft solutions that move fast, scale seamlessly, and deliver real business value.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                translateY: -8,
                boxShadow:
                  "0px 0px 40px rgba(236,72,153,0.3), 0px 0px 20px rgba(34,211,238,0.2)",
              }}
              className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/70 to-zinc-800/40 border border-zinc-700/40 backdrop-blur-xl relative overflow-hidden cursor-pointer transition-all"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity bg-gradient-to-r from-pink-500 to-cyan-400 blur-xl rounded-2xl"></div>

              {/* Icon */}
              <service.icon className="w-12 h-12 mb-4 text-pink-400 relative z-10" />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 relative z-10">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle sparkles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
