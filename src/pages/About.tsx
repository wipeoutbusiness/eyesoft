import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            About Eyes Of T / Thomas Garcia
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            Capturing the world through my eyes.
          </motion.p>
        </div>
      </div>

      {/* Auto-Scrolling Image Strip */}
      <div className="relative overflow-hidden h-72 bg-black">
        {/* Film strip overlay (you need to add your vector overlay as SVG or PNG) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src="/filmstrip-overlay.png" // Place your vector overlay file here
            alt="Film Strip Overlay"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image scroll row */}
        <div className="flex animate-scroll-x whitespace-nowrap h-full z-0">
          {/* Duplicate images to make loop effect smooth */}
          {["/me1.jpg", "/me2.jpg", "/me3.jpg", "/me1.jpg", "/me2.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Thomas"
              className="h-full w-auto object-cover mx-2 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* About Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl font-bold text-emerald-900 mb-8"
          >
            My Story
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            With almost 2 years of experience in photography...
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Whether it's capturing the raw energy...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
