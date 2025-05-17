import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative max-w-6xl w-full p-4"
          >
            <img
              src={src}
              alt="Full view"
              className="w-full h-auto rounded-lg select-none pointer-events-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 p-2 rounded-full"
            >
              ❯
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;
