import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Activity } from "lucide-react";

export function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-charcoal text-off-white font-inter"
    >
      {/* Hero Header */}
      <div className="py-24 text-center bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold mb-4"
          >
            My Portfolio
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

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          {/* Athletics */}
          <Link to="/portfolio/athletics" className="relative group rounded-2xl overflow-hidden shadow-xl">
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[url('/sport1.jpg')] bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-forest/60 to-transparent group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <div className="relative z-20 h-[400px] p-10 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-4 mb-4 text-sage"
              >
                <Activity size={32} />
                <h2 className="text-4xl font-playfair font-bold">Athletics</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg"
              >
                Capturing the grace, grit, and motion of athletes in action.
              </motion.p>
            </div>
          </Link>

          {/* Portraits */}
          <Link to="/portfolio/portraits" className="relative group rounded-2xl overflow-hidden shadow-xl">
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[url('/portrait1.jpg')] bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-forest/60 to-transparent group-hover:opacity-80 transition-opacity duration-300 z-10" />
            <div className="relative z-20 h-[400px] p-10 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-4 mb-4 text-sage"
              >
                <User size={32} />
                <h2 className="text-4xl font-playfair font-bold">Portraits</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg"
              >
                Honest, editorial, and expressive portraits with soul.
              </motion.p>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
