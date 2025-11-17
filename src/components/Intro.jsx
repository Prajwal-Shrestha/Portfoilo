"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "PRAJWAL".split("");

  const container = {
    animate: {
      transition: { staggerChildren: 0.09, delayChildren: 0.4 },
    },
  };

  const letter = {
    initial: { y: 55, opacity: 0, rotateX: 75 },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-[999]"
      style={{
        background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 70%)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, y: -120 }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Glow */}
      <motion.div
        className="absolute rounded-full blur-[110px] w-[400px] h-[400px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.7), rgba(96,165,250,0.5), transparent 70%)",
        }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.55 }}
        exit={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Name */}
      <motion.h1
        className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight flex gap-1"
        style={{ fontFamily: "Inter, Poppins, sans-serif" }}
        variants={container}
        initial="initial"
        animate="animate"
      >
        {text.map((letterChar, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
              filter: "drop-shadow(0 4px 18px rgba(180,150,255,0.45))",
            }}
          >
            {letterChar}
          </motion.span>
        ))}
      </motion.h1>

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.7)",
            left: `${12 + i * 11}%`,
            top: `${28 + (i % 2) * 25}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [-18, 0, 18],
          }}
          transition={{
            duration: 2.1,
            delay: 0.5 + i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
