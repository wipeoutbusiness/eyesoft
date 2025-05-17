import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];
  const intervalRef = useRef(null);
  const previewContainerRef = useRef(null);

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
    intervalRef.current = setInterval(() => {
      onNext();
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [onNext]);

  const onPreviewClick = (index) => {
    clearInterval(intervalRef.current);
    onNext(index);
  };

  useEffect(() => {
    const container = previewContainerRef.current;
    const active = container?.children[currentIndex];
    if (active && container) {
      container.scrollTo({
        left: active.offsetLeft - container.offsetWidth / 2 + active.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  if (!src) return null;

  return (
    <AnimatePresence>
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
            className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg select-none pointer-events-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-3 rounded-full text-2xl"
          >
            ❮
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-3 rounded-full text-2xl"
          >
            ❯
          </button>
          <div className="mt-6 flex justify-center space-x-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === currentIndex ? "bg-emerald-500" : "bg-white/40"
                } transition-all`}
              />
            ))}
          </div>
          <div
            ref={previewContainerRef}
            className="mt-4 flex overflow-x-auto space-x-2 px-2 scrollbar-hide"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="w-16 h-16 flex items-center justify-center bg-black rounded-lg overflow-hidden"
                onClick={() => setTimeout(() => onPreviewClick(i), 150)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className={`max-w-full max-h-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex ? "ring-2 ring-emerald-500" : "opacity-50"
                  }`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageModal;
