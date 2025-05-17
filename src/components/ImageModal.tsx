import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    intervalRef.current = setInterval(() => onNext(), 3500);
    return () => clearInterval(intervalRef.current);
  }, [onNext]);

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

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-emerald-600 hover:bg-emerald-700 p-3 rounded-full shadow-lg"
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-emerald-600 hover:bg-emerald-700 p-3 rounded-full shadow-lg"
            >
              ❯
            </button>

            {/* Preview Carousel */}
            <div className="mt-4 overflow-hidden">
              <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-2">
                {images.map((previewSrc, idx) => (
                  <motion.img
                    key={idx}
                    src={previewSrc}
                    alt={`Preview ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded-md transition-all duration-300 ${
                      idx === currentIndex
                        ? "ring-2 ring-emerald-500"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    style={{ flex: "0 0 auto" }}
                    onClick={() => onPrev(idx - currentIndex < 0 ? images.length - 1 : idx)}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                ))}
              </div>
              {/* Dot Indicators */}
              <div className="flex justify-center gap-1 mt-2">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full ${
                      idx === currentIndex ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;
