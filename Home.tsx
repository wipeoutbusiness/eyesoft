import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/nature.jpg')] bg-cover bg-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[2px]"
        />
      </div>
      <div className="relative min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold text-white mb-8 drop-shadow-lg"
          >
            Capture Your Moments
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Professional photography services for athletes and individuals. Creating timeless memories through the lens.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/portfolio" className="group relative overflow-hidden bg-emerald-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 text-lg font-medium"
              >
                View Portfolio
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to="/pricing" className="group relative overflow-hidden bg-emerald-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 text-lg font-medium"
              >
                Pricing
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to="/reviews" className="group relative overflow-hidden bg-emerald-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 text-lg font-medium"
              >
                Reviews
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-900 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="group relative overflow-hidden bg-emerald-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 text-lg font-medium"
              >
                About Me
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-950 group-hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link to="/booking" className="group relative overflow-hidden bg-white text-emerald-900 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 text-lg font-medium"
              >
                Book Now
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
