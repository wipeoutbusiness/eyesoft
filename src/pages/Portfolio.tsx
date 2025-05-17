import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            Explore our collection of athletic and portrait photography
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <Link to="/portfolio/athletics" className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[url('/athletics.jpg')] bg-cover bg-center transform transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative h-[400px] p-12 flex flex-col justify-end text-white">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl font-bold mb-4"
              >
                Athletics
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl"
              >
                Capturing the power and grace of athletes in motion
              </motion.p>
            </div>
          </Link>
          <Link to="/portfolio/portraits" className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[url('/portraits.jpg')] bg-cover bg-center transform transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative h-[400px] p-12 flex flex-col justify-end text-white">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl font-bold mb-4"
              >
                Portraits
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl"
              >
                Professional portraits that capture your authentic self
              </motion.p>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
