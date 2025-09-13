"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-700 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 opacity-10 animate-[pulse_15s_infinite_alternate]"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Futuristic Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full p-[2px] ">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Dev-Lab Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-textGlow">
            Dev-Lab
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 text-lg font-medium">
          <a href="#services" className="hover:text-cyan-400 transition">Services</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>

      <p className="text-gray-500 text-center mt-12 text-sm">
        &copy; {new Date().getFullYear()} Futuristic Studio. All rights reserved.
      </p>
    </footer>
  );
}
