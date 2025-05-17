import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "../components/ImageModal";

export function Athletics() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sportsImages = Array.from({ length: 23 }, (_, i) => `/sports${i + 1}.jpg`);

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
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {sportsImages.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Athletic photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Athletic full view"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
