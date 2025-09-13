"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function SmartContactSection() {
  const [form, setForm] = useState({ name: "", message: "" });

 

  const whatsappLink = `https://wa.me/2348059302294?text=${encodeURIComponent(
    `Hi! My name is ${form.name || "Anonymous"}. ${form.message || ""}`
  )}`;

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Animated futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 opacity-10 animate-[pulse_12s_infinite_alternate]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.2),transparent_60%)] animate-[pulse_15s_infinite_alternate_slow]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),transparent_60%)] animate-[pulse_18s_infinite_alternate_slow]"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Futuristic WhatsApp Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 bg-white/5 backdrop-blur-md border border-zinc-700 rounded-3xl shadow-lg"
        >
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
            Chat with Us on WhatsApp
          </h2>
          <div className="flex flex-col gap-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center justify-center gap-3 w-full py-3 bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg hover:shadow-[0_0_50px_-5px_rgba(0,255,0,0.8)] transition-all">
                <Image
                  src="/whatsapp-icon.png"
                  alt="WhatsApp Icon"
                  width={44}
                  height={44}
                  className="invert"
                />
                  Send WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Futuristic decorative panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 bg-white/5 backdrop-blur-md border border-zinc-700 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Need Immediate Help?
          </h3>
          <p className="text-gray-300 mb-6">
            Our team is ready to answer all your questions instantly via WhatsApp.
          </p>
          <div className="w-full h-64 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),transparent_70%)] rounded-2xl flex items-center justify-center">
            <p className="text-gray-500 italic">Your futuristic support hub</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
