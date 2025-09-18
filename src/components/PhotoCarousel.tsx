"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  "/images/photos/ProfilePic2022-30.jpg",
  "/images/photos/864AEE1A-3CC2-4AD4-BDC3-1B3211FA674A_1_105_c.jpeg",
  "/images/photos/94D22A97-0D2A-4487-AA8E-85DA83DD477F_4_5005_c.jpeg",
  "/images/photos/C1ABB7C9-FC2B-47BC-858E-A753EA108C84_4_5005_c.jpeg",
  "/images/photos/E7B3A253-3C41-48B4-8AC0-B19D59BEA555_4_5005_c.jpeg",
  "/images/photos/EA0625A6-5C10-48FA-A61F-924EE22CF712_1_105_c.jpeg",
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-96 md:w-96 md:h-[30rem] mx-auto mt-8 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {photos[currentIndex] && (
            <Image
              src={photos[currentIndex]}
              alt="Hayden Enloe"
              fill
              className="rounded-lg object-cover shadow-lg border-4 border-white dark:border-gray-800"
              priority
              onError={(e) => {
                console.error('Image failed to load:', photos[currentIndex]);
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}