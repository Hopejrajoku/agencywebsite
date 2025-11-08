"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-700 relative overflow-hidden">
      {/* Subtle animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 opacity-10 animate-[pulse_15s_infinite_alternate] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden p-[2px] border border-cyan-400/40">
            <Image
              src="/logo.jpg"
              alt="Dev-Lab Logo"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-textGlow">
            Dev-Lab
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Services</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors duration-300">Pricing</a>
          <a href="projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-gray-500 text-center mt-12 text-sm">
        &copy; {new Date().getFullYear()} Futuristic Studio. All rights reserved.
      </p>
    </footer>
  );
}
