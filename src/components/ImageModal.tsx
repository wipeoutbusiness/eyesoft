import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];
  const previewRef = useRef(null);

  if (!src) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Scroll preview strip to current image smoothly
  useEffect(() => {
    if (previewRef.current) {
      const previewContainer = previewRef.current;
      const activeThumbnail = previewContainer.querySelector(
        ".thumbnail-active"
      );
      if (activeThumbnail) {
        // Scroll so active thumbnail is centered or visible
        const containerRect = previewContainer.getBoundingClientRect();
        const thumbRect = activeThumbnail.getBoundingClientRect();
        const offset =
          thumbRect.left - containerRect.left - containerRect.width / 2 + thumbRect.width / 2;
        previewContainer.scrollBy({ left: offset, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4"
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
            className="relative max-w-[90vw] max-h-[80vh] w-full p-4 flex flex-col items-center"
          >
            <img
              src={src}
              alt="Full view"
              className="max-w-full max-h-[70vh] rounded-lg select-none pointer-events-none object-contain"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-4 rounded-full shadow-lg transition-colors text-3xl select-none"
              aria-label="Previous Image"
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white hover:bg-white/50 p-4 rounded-full shadow-lg transition-colors text-3xl select-none"
              aria-label="Next Image"
            >
              ❯
            </button>

            {/* Preview Strip */}
            <div
              ref={previewRef}
              className="mt-6 flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent w-full max-w-[90vw] px-2"
            >
              {images.map((imgSrc, i) => (
                <motion.img
                  key={i}
                  src={imgSrc}
                  alt={`Preview ${i + 1}`}
                  className={`h-20 w-auto rounded-lg cursor-pointer object-cover
                    ${
                      i === currentIndex
                        ? "ring-4 ring-emerald-500 ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (i !== currentIndex) {
                      if (i < currentIndex) onPrev();
                      else if (i > currentIndex) onNext();
                    }
                  }}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  layoutId={`preview-${i}`}
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
