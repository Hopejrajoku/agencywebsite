"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  /* ✅ 1. Scroll behavior: shrink navbar + darken background */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ✅ 2. Active section highlighting on scroll */
  useEffect(() => {
    const sections = ["services", "pricing", "about", "contact"];

    const handleActive = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  return (
    <motion.nav
      animate={{
        height: scrolled ? "70px" : "85px",
        backgroundColor: scrolled ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.30)",
        backdropFilter: "blur(14px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 shadow-lg border-b"
      style={{ fontFamily: "var(--sf-pro)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative w-14 h-14 rounded-full p-[2px] shadow-xl"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Dev-Lab Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-textGlow"
          >
            Dev-Lab
          </motion.div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-white font-medium">
          {["services", "pricing", "about", "contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`transition-colors relative ${
                activeSection === item ? "text-pink-400" : "hover:text-pink-400"
              }`}
              whileHover={{ y: -3 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* ✅ Active underline */}
              {activeSection === item && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-pink-400 rounded-full"
                />
              )}
            </motion.a>
          ))}

          <a
            href="https://cal.com/hope-ajoku-uxl150/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 text-white px-6 py-2 font-bold">
              Book a Call
            </Button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={toggleMenu}
            className="cursor-pointer text-white"
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-6 space-y-6 flex flex-col text-white font-medium text-center border-t border-white/10"
          >
            {["services", "pricing", "about", "contact"].map((item, i) => (
              <motion.a
                key={item}
                onClick={closeMenu}
                href={`#${item}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`transition-all text-xl tracking-wide ${
                  activeSection === item ? "text-pink-400" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}

            <motion.a
              onClick={closeMenu}
              href="https://cal.com/hope-ajoku-uxl150/consultation"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 text-white px-6 py-3 font-bold w-full text-lg">
                Book a Call
              </Button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
