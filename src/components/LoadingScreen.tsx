import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../logo.png"; // Update if your logo path is different

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
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.5, x: -80 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="flex items-center space-x-6"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-800"
            >
              Eyes Of T
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
