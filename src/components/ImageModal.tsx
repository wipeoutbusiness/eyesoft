import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];
  const total = images.length;

  const getWrappedIndex = (index) => {
    return (index + total) % total;
  };

  const prevIndex = getWrappedIndex(currentIndex - 1);
  const nextIndex = getWrappedIndex(currentIndex + 1);

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
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-6xl mx-auto p-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full z-50"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Main Image */}
            <img
              src={src}
              alt="Full view"
              className="max-h-[80vh] w-full object-contain rounded-lg select-none pointer-events-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />

            {/* Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 p-3 rounded-full text-2xl"
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 p-3 rounded-full text-2xl"
            >
              ❯
            </button>

            {/* Custom Preview Carousel */}
            <div className="mt-6 flex justify-center items-center gap-4">
              {[prevIndex, currentIndex, nextIndex].map((index, i) => (
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`Preview ${index + 1}`}
                  onClick={() => {
                    if (i === 0) onPrev();
                    if (i === 2) onNext();
                  }}
                  className={`h-24 w-24 object-contain rounded-lg transition-all duration-300 cursor-pointer select-none pointer-events-auto shadow-lg ${
                    i === 1 ? "scale-110 brightness-125 z-10" : "opacity-50 scale-95"
                  }`}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-3 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-emerald-400" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;
