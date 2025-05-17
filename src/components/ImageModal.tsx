import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function ImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
  const src = images[currentIndex];

  // Early return if src is undefined (invalid index)
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

export function Portraits() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const portraitImages = Array.from({ length: 15 }, (_, i) => `/portrait${i + 1}.jpg`);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : portraitImages.length - 1));
  const showNext = () => setCurrentIndex((prev) => (prev < portraitImages.length - 1 ? prev + 1 : 0));

  return (
    <div>
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Portrait Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl"
          >
            Capturing personalities and emotions through portraits
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {portraitImages.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt={`Portrait photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Only render modal if currentIndex is valid */}
      {currentIndex !== null && currentIndex >= 0 && currentIndex < portraitImages.length && (
        <ImageModal
          images={portraitImages}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

export function Athletics() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const sportsImages = Array.from({ length: 23 }, (_, i) => `/sports${i + 1}.jpg`);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sportsImages.length - 1));
  const showNext = () => setCurrentIndex((prev) => (prev < sportsImages.length - 1 ? prev + 1 : 0));

  return (
    <div>
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Athletic Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl"
          >
            Showcasing the power and dedication of athletes
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {sportsImages.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt={`Athletic photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Only render modal if currentIndex is valid */}
      {currentIndex !== null && currentIndex >= 0 && currentIndex < sportsImages.length && (
        <ImageModal
          images={sportsImages}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}
