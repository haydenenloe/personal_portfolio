"use client";
// This is the hero component at src/components/Hero.tsx
import { motion } from "framer-motion";
import PhotoCarousel from "./PhotoCarousel";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-blue-500">Hayden Enloe</span>
        </h1>
        <PhotoCarousel />
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Technical Product Leader, Software Developer, and Data Engineering Specialist
        </p>
      </motion.div>
    </section>
  );
}
