"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SmartContactSection() {
  const whatsappLink = `https://wa.me/2348059302294?text=${encodeURIComponent(
    `Hi! My name is Anonymous. `
  )}`;

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Futuristic floating background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 opacity-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.2),transparent_60%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),transparent_60%)] animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
        {/* WhatsApp Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-6 sm:p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-zinc-700 rounded-3xl shadow-[0_0_50px_rgba(0,255,200,0.1)] hover:shadow-[0_0_60px_rgba(0,255,150,0.3)] transition-shadow w-full max-w-md"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg text-center md:text-left">
            Chat with Us on WhatsApp
          </h2>
          <p className="text-gray-300 mb-6 text-center md:text-left text-sm sm:text-base">
            Have questions or want to start your project? Reach us instantly on WhatsApp and get a fast response!
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg hover:shadow-[0_0_50px_-5px_rgba(0,255,0,0.8)] transition-all rounded-xl text-sm sm:text-base">
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp Icon"
                width={36}
                height={36}
                className="invert"
              />
              Send WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
