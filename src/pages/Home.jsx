"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Intro from "../components/Intro";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/starbackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Education } from "../components/Education";
import { SkillsSection } from "../components/SkillsSection";
import Projects from "../components/Projects";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence>
        {showIntro && <Intro key="intro" onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>
      <motion.div
        className="relative"
        initial={false}
        animate={showIntro ? { opacity: 0.0, pointerEvents: "none" } : { opacity: 1, pointerEvents: "auto" }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden={showIntro}
      >
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
      </motion.div>
    </div>
  );
}
