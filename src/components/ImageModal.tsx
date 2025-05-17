// components/ImageModal.tsx
import { motion, AnimatePresence } from "framer-motion";

export function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-4xl w-full p-4"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-lg select-none pointer-events-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
