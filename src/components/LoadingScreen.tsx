import { motion } from "framer-motion";
import logo from "../logo.png";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [startSlideLeft, setStartSlideLeft] = useState(false);

  useEffect(() => {
    const slideLeftTimer = setTimeout(() => setStartSlideLeft(true), 4000); // 2s wait + ~2s slide right
    return () => clearTimeout(slideLeftTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-3xl px-4">
        {/* Text is always there, hidden behind logo */}
        <div className="relative z-0 ml-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-slate-800"
            style={{
              fontFamily: '"Kirang Haerang", cursive',
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <span className="opacity-40 mr-2">|</span> Eyes Of T
          </h1>
        </div>

        {/* Animated Logo in front, acts like a curtain */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="absolute left-1/2 -translate-x-1/2 z-10 w-32 h-32 object-contain"
          initial={{ scale: 0 }}
          animate={
            startSlideLeft
              ? {
                  x: ["66%", "0%"], // Move back left to reveal text
                }
              : {
                  scale: 1.5,
                  x: ["0%", "66%"], // First grow + move right
                }
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
