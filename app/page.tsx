"use cliet"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <PricingSection />
      <Projects />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
