"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-black via-blue-900 to-black overflow-hidden flex items-center justify-center">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-screen filter blur-2xl opacity-30 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />

      {/* Hero content */}
      <div className="z-10 text-center px-4 md:px-0 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Transforming Ideas into Products in 15 Days.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         MVPs in days. Products that scale. Speed that lasts.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://cal.com/hope-ajoku-uxl150/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 font-bold">
              Book a Call
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
