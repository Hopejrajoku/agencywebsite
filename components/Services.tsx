"use client";

import { Code, Rocket, Layers, Smartphone } from "lucide-react";

const services = [
  {
    title: "MVP Development",
    description: "Turn your idea into a functional prototype in just 15 days.",
    icon: Rocket,
  },
  {
    title: "Product Scaling",
    description: "From MVP to full-scale product, we ensure seamless growth.",
    icon: Layers,
  },
  {
    title: "Web & Mobile Apps",
    description: "Cross-platform, responsive, and built for performance.",
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    description: "Tailored solutions that align with your unique business needs.",
    icon: Code,
  },
];

export default function Services() {
  return (
    <section 
    id="services"
    style={{ fontFamily: "var(--sf-pro)" }}
    className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text">
          Our Services
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We craft solutions that move fast, scale seamlessly, and deliver real
          business value.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 
                         hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] transition-transform hover:-translate-y-2"
            >
              <service.icon className="w-12 h-12 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
