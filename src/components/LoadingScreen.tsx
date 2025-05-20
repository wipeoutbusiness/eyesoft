// src/components/LoadingScreen.tsx
import { useEffect, useState } from "react";
import logo from "/logo.png"; // assuming this lives in /public/logo.png
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative flex items-center justify-center overflow-hidden">
            {/* Text behind logo */}
            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-neutral-700 absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1.5 }}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Eyes Of T
            </motion.h1>

            {/* Logo animation */}
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-32 md:w-48 z-10"
              initial={{ scale: 0, y: 0 }}
              animate={{
                scale: [0, 1.4, 1.2],
                x: [0, 50, -120],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.3, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
