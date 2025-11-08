"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Preload avatars for faster rendering
const testimonials = [
  {
    name: "Jessica .K",
    role: "Founder, LATech",
    country: "USA",
    text: "They shipped our MVP in record time. The quality and speed blew us away!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David .M",
    role: "CEO, InnovateX",
    country: "USA",
    text: "The landing page boosted signups by 3x. Futuristic design and flawless execution.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chinedu .O",
    role: "Product Manager, FinEdge",
    country: "Nigeria",
    text: "Working with them felt like having an in-house team. Seamless, fast, and world-class.",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Sophia Williams",
    role: "Startup Founder, HealthX",
    country: "USA",
    text: "They’re not just developers, they’re partners. My product went from idea to launch in weeks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

// Preload avatar images to avoid delays
testimonials.forEach((t) => {
  const img = new window.Image(); // <-- use browser Image
  img.src = t.avatar;
});

export default function AboutSection() {
  const testimonialVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } },
  };

  return (
    <section id="about" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Floating neon particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              willChange: "transform, opacity", // improve performance
            }}
          />
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={window.innerWidth < 768 ? (i % 2 === 0 ? "hiddenLeft" : "hiddenRight") : { opacity: 0, y: 50 }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-3xl p-6 bg-white/5 backdrop-blur-md border border-zinc-700 hover:border-cyan-400/60 shadow-lg cursor-pointer will-change-transform"
            >
              <p className="text-gray-300 mb-6 italic">“{t.text}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
                  loading="lazy" // lazy load avatars
                />
                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
            About Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We empower founders and startups to turn ambitious ideas into scalable, market-ready products. Leveraging deep expertise in design, engineering, and product strategy, we deliver rapid MVPs, high-converting landing pages, and long-term product solutions that drive growth and impact.
          </p>
          <p className="text-gray-400">
            Our mission: <span className="text-cyan-400">Build fast</span>, <span className="text-pink-400">scale smart</span>, and <span className="text-purple-400">deliver products people love</span>.
          </p>
        </div>

        {/* Rotating Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur-3xl opacity-30 absolute"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="relative"
          >
            <Image
              src="/logo.jpg"
              alt="About Us Illustration"
              width={300}
              height={300}
              className="relative rounded-full object-contain drop-shadow-[0_0_35px_rgba(236,72,153,0.6)]"
              priority // preload logo for instant render
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
