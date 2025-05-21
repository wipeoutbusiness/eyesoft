import { motion } from "framer-motion";

export function Reviews() {
  const reviews = [
    {
      name: "Yisel",
      quote: "As Thomas took pictures of me over time, he not only improved his quality of my photos, but he improved in all aspects of his work. He helped me figure out poses that suit me and was very open to feedback, and not only does he adapt to me, he adapts to his other clients too.",
      rating: 5,
    },
    {
      name: "Destiney",
      quote: "These photos really highlighted the best features and had the quality that a normal photo would not. I love the color and theme that Thomas can bring out through his shots. Ten out of ten photography.",
      rating: 5,
    },
    {
      name: "Ambher",
      quote: "Very much loved them [pictures]. A great photographer, should very much get at him!",
      rating: 5,
    },
    {
      name: "Tania",
      quote: "Very good pictures as he was guiding me and my group to stand places to get certain angles on photos and no one has done this before.",
      rating: 5,
    },
    {
      name: "Bekah",
      quote: "Thomas takes great photos and puts in so much effort into editing!",
      rating: 5,
    },
    {
      name: "Issac",
      quote: "Pictures were fye and thomas was chill aswell.",
      rating: 5,
    },
    {
      name: "Erika",
      quote: "Super chill and very flexible, knows how to capture the right moment.",
      rating: 5,
    },
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
            See what people have to say about their experience!
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:grid sm:grid-cols-2 gap-8"
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
              <div className="mb-6 min-w-0">
                <h3 className="font-bold text-xl text-emerald-900 truncate">{review.name}</h3>
                <p className="text-emerald-600 truncate">{review.sport || review.occupation}</p>
                <div className="flex text-yellow-400 mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
