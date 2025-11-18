"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPos = window.scrollY + 200; // offset so the section becomes active a bit earlier

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(item.id);
          return;
        }
      }

      // fallback when scrolled to top or no match
      if (window.scrollY < 250) setActiveSection("hero");
    };

    window.addEventListener("scroll", handleActiveSection);
    window.addEventListener("resize", handleActiveSection);
    handleActiveSection();
    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed w-full z-50 transition-all duration-300 left-0 right-0",
        isScrolled
          ? "py-2 bg-background/70 backdrop-blur-xl shadow-sm border-b border-border/40"
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold text-primary flex items-center focus:outline-none"
          aria-label="Go to top"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-glow text-foreground">Prajwal</span>
            <span className="hidden sm:inline">Portfolio</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative group px-1 py-1 transition-colors duration-200 focus:outline-none",
                activeSection === item.id
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              )}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="select-none">{item.name}</span>

              {/* underline animation */}
              <span
                className={cn(
                  "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                )}
                aria-hidden
              />
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-2 text-foreground z-50 focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile menu overlay */}
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
          animate={isMenuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -10, pointerEvents: "none" }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
        >
          <div className="flex flex-col space-y-8 text-2xl text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollTo(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "transition-colors duration-200 focus:outline-none",
                  activeSection === item.id ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* small hint / close area */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute bottom-10 text-sm opacity-70 focus:outline-none"
          >
            Close
          </button>
        </motion.div>
      </div>
    </nav>
  );
}
