"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ Prevent Vercel crash (SSR)
  const isBrowser = typeof window !== "undefined";
  const screenHeight = isBrowser ? window.innerHeight : 1000;
  const screenWidth = isBrowser ? window.innerWidth : 1000;

  const rotateX = useTransform(mouseY, [0, screenHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, screenWidth], [-10, 10]);

  useEffect(() => {
    if (!isBrowser) return;

    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, isBrowser]);

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-black via-blue-900 to-black overflow-hidden flex items-center justify-center">
      {/* Multi-layer parallax blobs */}
      <motion.div
        style={{ x: rotateY, y: rotateX }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
      />
      <motion.div
        style={{ x: rotateY, y: rotateX }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-screen filter blur-2xl opacity-25 animate-blob animation-delay-2000"
      />
      <motion.div
        style={{ x: rotateY, y: rotateX }}
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-4000"
      />
      <motion.div
        style={{ x: rotateY, y: rotateX }}
        className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-yellow-400/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-6000"
      />

      {/* Hero content */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="z-10 text-center px-4 sm:px-6 md:px-0 max-w-3xl cursor-default"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 leading-tight"
          initial={{ opacity: 0, x: -120, rotate: -3, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 65,
            },
          }}
          viewport={{ once: true }}
        >
          Transforming Ideas into Products in 15 Days.
        </motion.h1>

        <motion.p
          className="mt-6 text-md sm:text-lg md:text-2xl text-gray-100 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -120, rotate: -3, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 65,
            },
          }}
          viewport={{ once: true }}
        >
          MVPs in days. Products that scale. Speed that lasts.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1,
              delay: 1.3,
              type: "spring",
              stiffness: 90,
            },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            rotateZ: 1,
            boxShadow:
              "0px 0px 60px rgba(236,72,153,0.9), 0px 0px 40px rgba(34,211,238,0.5)",
          }}
        >
          <a
            href="https://cal.com/hope-ajoku-uxl150/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-8 sm:px-10 py-4 font-bold shadow-2xl transition-all">
              Book a Call
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating sparkles & particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
