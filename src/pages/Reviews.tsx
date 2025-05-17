import { motion } from "framer-motion";

export function Reviews() {
  const reviews = [
    /* your reviews array unchanged */
  ];

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
            Client Reviews
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            See what our clients have to say about their experience
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl w-full overflow-hidden"
            >
              <div className="flex items-center mb-6 min-w-0">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={review.image} 
                  alt={review.name} 
                  className="w-20 h-20 rounded-full mr-4 object-cover shadow-lg flex-shrink-0" 
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-xl text-emerald-900 truncate">{review.name}</h3>
                  <p className="text-emerald-600 truncate">{review.sport || review.occupation}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic break-words">{review.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
