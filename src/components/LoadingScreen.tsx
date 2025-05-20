import { motion } from "framer-motion";
import logo from "../logo.png"; // Make sure this path is correct
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Reveal text only after the logo starts sliding left
    const timer = setTimeout(() => setShowText(true), 3700); // wait until logo slides left
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Text stays hidden behind initially */}
        <div
          className={`absolute transition-opacity duration-700 ease-in-out ${
            showText ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-700"
            style={{
              fontFamily: '"Kirang Haerang", cursive',
              whiteSpace: "nowrap",
            }}
          >
            Eyes Of T
          </h1>
        </div>

        {/* Logo with animation */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          initial={{ scale: 0, x: 0 }}
          animate={{
            scale: 1,
            x: [0, 100, -120], // slide right then left
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.4, 1],
            ease: "easeInOut",
          }}
          className="w-32 h-32 object-contain z-10"
        />
      </div>
    </div>
  );
}
