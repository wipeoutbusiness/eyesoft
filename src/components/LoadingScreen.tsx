import { useEffect, useState } from "react";
import logo from "/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // 5s duration
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
          <div className="relative flex items-center overflow-hidden w-[350px] md:w-[500px] h-[100px]">
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="absolute w-20 md:w-28 z-10"
              initial={{ scale: 0, x: 0 }}
              animate={{
                scale: 1,
                x: [0, 80, -120],
              }}
              transition={{
                times: [0, 0.4, 1],
                duration: 4.5,
                ease: "easeInOut",
              }}
            />

            {/* Static text revealed behind logo */}
            <div
              className="text-3xl md:text-5xl font-bold text-neutral-700 pl-28"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Eyes Of T
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
