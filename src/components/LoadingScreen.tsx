import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto"; // re-enable scroll
    }, 1500);

    document.body.style.overflow = "hidden"; // disable scroll while loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-white text-5xl font-bold"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: -80 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              className="flex items-center gap-4"
            >
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Eyes Of T
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
