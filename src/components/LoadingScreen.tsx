import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Logo and Text Container */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ y: 100, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Logo */}
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain z-10"
                initial={{ x: 0 }}
                animate={{ x: -120 }}
                transition={{ delay: 2, duration: 1.2, ease: "easeInOut" }}
              />

              {/* Text behind logo */}
              <motion.h1
                className="absolute left-0 ml-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-gray-800 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
              >
                Eyes Of T
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
