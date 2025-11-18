"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Intro from "../components/Intro"; // adjust path if needed
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/starbackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Education } from "../components/Education";
import { SkillsSection } from "../components/SkillsSection";
import Projects from "../components/Projects";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && <Intro key="intro" onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Page content (kept mounted so layout doesn't jump) */}
      {/* You can keep these behind the intro — Intro is fixed and will cover them */}
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Education />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>
      {/* Footer (if any) */}
    </div>
  );
};

export default Home;
