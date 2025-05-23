// src/pages/Home.tsx
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center text-center font-display">
      <motion.img
        src="/logo.png"
        alt="Eyes Of T Logo"
        className="w-32 h-32 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-5xl font-bold text-green-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Eyes Of T
      </motion.h1>
      <p className="mt-4 text-lg text-green-800 font-handwritten">See the world through my eyes.</p>
    </div>
  );
}
