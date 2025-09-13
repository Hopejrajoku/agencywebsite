"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-md shadow-lg"
    style={{ fontFamily: "var(--sf-pro)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Futuristic Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-14 h-14 rounded-full p-[2px]  shadow-xl">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Dev-Lab Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-textGlow">
            Dev-Lab
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-white font-medium">
          <a href="#services" className="hover:text-pink-500 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-pink-500 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
          <a
            href="https://cal.com/hope-ajoku-uxl150/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 font-bold">
              Book a Call
            </Button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <Menu className="w-7 h-7 text-white cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 flex flex-col text-white font-medium text-center">
          <a href="#services" className="hover:text-pink-500 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-pink-500 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
          <a
            href="https://cal.com/hope-ajoku-uxl150/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 font-bold w-full">
              Book a Call
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
