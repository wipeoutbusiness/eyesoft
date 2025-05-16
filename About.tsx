import { motion } from "framer-motion";

export function About() {
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
            About Nature's Lens
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            Capturing life's precious moments through professional photography
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-12 items-start bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="w-1/3 relative">
            <motion.img 
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="/photographer.jpg" 
              alt="Photographer" 
              className="w-full rounded-lg shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-lg" />
          </div>
          <div className="w-2/3">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl font-bold text-emerald-900 mb-8"
            >
              Our Story
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              With over a decade of experience in professional photography, we've had the privilege of capturing countless
              special moments for our clients. Our passion for photography drives us to constantly innovate and create
              stunning visual narratives that tell your unique story.
            </motion.p>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              Whether it's capturing the raw energy of athletes in motion or creating intimate portrait sessions that
              reveal the true essence of our subjects, we bring technical expertise and artistic vision to every shoot.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
