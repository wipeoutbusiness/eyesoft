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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col items-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-h-[80vh] overflow-hidden bg-black">
              <img
                src={src}
                alt="Full view"
                className="w-full h-full object-contain"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white hover:bg-emerald-700 p-3 rounded-full shadow-lg"
              >
                ❮
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white hover:bg-emerald-700 p-3 rounded-full shadow-lg"
              >
                ❯
              </button>
            </div>

            {/* Preview Carousel */}
            <div className="w-full py-4">
              <div className="flex justify-center gap-2 overflow-x-auto px-4">
                {images.map((previewSrc, idx) => (
                  <motion.img
                    key={idx}
                    src={previewSrc}
                    alt={`Preview ${idx + 1}`}
                    className={`w-16 h-16 object-contain rounded-lg transition-all duration-300 cursor-pointer bg-black ${
                      idx === currentIndex
                        ? "ring-2 ring-emerald-500"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => onNext(idx)}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-1 mt-3">
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
