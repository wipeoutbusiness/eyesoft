import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react"; // Lucide icon

export function Home() {
  const slides = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative font-['Inter'] text-off-white">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Hero Slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === current ? 1 : 0,
              scale: i === current ? 1 : 1.1,
            }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-emerald-900/50 backdrop-blur-sm z-10" />
      </div>

      {/* Floating Logo */}
      <motion.div
        className="absolute top-8 left-8 z-20 text-beige"
        initial={{ y: -10 }}
        animate={{ y: [ -10, 10, -10 ] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Eye size={48} strokeWidth={1.5} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen text-center px-4">
        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-['Playfair_Display'] text-6xl sm:text-7xl font-bold text-off-white drop-shadow-lg"
          >
            Eyes of T
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl sm:text-2xl font-light text-beige leading-relaxed"
          >
            Capturing emotion, movement, and identity—one frame at a time.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #a7f3d0" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-beige text-forest font-semibold shadow-md"
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #a7f3d0" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-forest text-off-white font-semibold shadow-md"
              >
                Book a Session
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
