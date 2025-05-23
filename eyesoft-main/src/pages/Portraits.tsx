import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "../components/ImageModal";

export function Portraits() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const portraitImages = Array.from({ length: 15 }, (_, i) => `/portrait${i + 1}.jpg`);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : portraitImages.length - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev < portraitImages.length - 1 ? prev + 1 : 0));

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
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
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

      {currentIndex !== null && (
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
