"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  variant?: "highlight" | "normal";
}

const plans: Plan[] = [
  {
    title: "Landing / Design → Frontend",
    price: "₦450,000",
    description: "Market-ready landing pages that convert.",
    features: [
      "Market & competitor research",
      "Conversion-focused copywriting",
      "Full-page wireframes",
      "Responsive design (Webflow or Frontend)",
    ],
    ctaText: "Let’s Talk",
  },
  {
    title: "Minimum Viable Product Pack",
    price: "₦950,000",
    description: "Get your first product into the hands of users.",
    features: [
      "UX Discovery & Wireframing",
      "Custom UI & Product Design",
      "MVP-focused, lean development",
      "Scalable architecture",
      "Post-launch support (1 month)",
    ],
    ctaText: "Start Your Project",
    variant: "highlight",
  },
  {
    title: "Ongoing Product Partner",
    price: "Custom Pricing",
    description: "For scaling companies who need a dedicated product team.",
    features: [
      "Long-term design & engineering support",
      "Continuous iteration & feature expansion",
      "Roadmap execution & scaling strategy",
      "Enterprise-grade SLAs",
    ],
    ctaText: "Let’s Talk",
  },
];

export default function PricingSection() {
  const whatsappNumber = "2348059302294";

  const handleWhatsAppClick = (planTitle: string) => {
    const message = `Hi! I'm interested in the "${planTitle}" plan.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section id="pricing" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full blur-sm animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          Transparent, Futuristic Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          No hidden fees — products shipped fast and efficiently.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const isHighlight = plan.variant === "highlight";

            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                whileHover={{
                  scale: 1.08,
                  rotateX: 6,
                  rotateY: -6,
                  boxShadow: "0 0 70px rgba(236,72,153,0.9), 0 0 50px rgba(34,211,238,0.5)",
                }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md border overflow-hidden cursor-pointer transition-all
                  ${isHighlight
                    ? "bg-gradient-to-br from-purple-600/80 via-pink-500/80 to-red-500/80 border-pink-400 shadow-[0_0_60px_-5px_rgba(236,72,153,0.8)]"
                    : "bg-white/5 border-zinc-700 hover:border-cyan-400/60"
                  }
                `}
              >
                {isHighlight && (
                  <div className="absolute inset-0 rounded-3xl border-2 border-pink-400 animate-pulse opacity-50"></div>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <p className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                    {plan.price}
                  </p>

                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-200">
                        <span className="mt-1 text-cyan-400 animate-pulse">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <Button
                    onClick={() => handleWhatsAppClick(plan.title)}
                    className={`w-full py-3 font-semibold rounded-xl transition-all ${
                      isHighlight
                        ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-black hover:shadow-[0_0_50px_-5px_rgba(236,72,153,0.9)]"
                        : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
                    }`}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
