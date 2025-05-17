import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function Pricing() {
  // Athletics tiers
  const athleticsPackages = [
    {
      name: "Game Day",
      price: "$30",
      features: [
        "Full game coverage", 
        "10 edited action and game pictures"
      ],
      color: "from-blue-400 to-purple-600",
      shadow: "shadow-blue-500/30",
    },
    {
      name: "3 Day Coverage",
      price: "$100",
      features: [
       "3 game coverage", 
        "35-40 edited pictures", 
        "Simple 30 second mixtape w/ song choice"
      ],
      color: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-500/30",
      popular: true,
    },
    {
      name: "Season Coverage",
      price: "$300",
      features: [
       "Full season coverage",
        "100+ edited photos shots",
        "Season Highlight mixtape"
      ],
      color: "from-amber-400 to-orange-600",
      shadow: "shadow-amber-500/30",
    },
  ];

  // Portrait tiers (your original 3 tiers)
  const portraitPackages = [
    {
      name: "Basic",
      price: "$155",
      features: [
       "1-hour session", 
        "20 edited photos"
      ],
      color: "from-blue-400 to-purple-600",
      shadow: "shadow-blue-500/30",
    },
    {
      name: "Premium",
      price: "$225",
      features: [
       "2-hour session", 
        "25 edited photos", 
        "Location Consultation", 
        "2 outfit changes", 
        "10 photocards of your choice"
      ],
      color: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-500/30",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$300",
      features: [
        "3-hour session", 
        "35 edited photos", 
        "Location Consultation", 
        "2 outfit changes", 
        "5 8x10 photos", 
        "All image files"
      ],
      color: "from-amber-400 to-orange-600",
      shadow: "shadow-amber-500/30",
    },
  ];

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Helper to render package cards
  const renderPackages = (packages) =>
    packages.map((pkg, index) => (
      <Link to="/booking" key={pkg.name}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`w-full relative overflow-hidden rounded-2xl bg-gradient-to-br ${pkg.color} text-white p-8 shadow-2xl ${pkg.shadow} cursor-pointer`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-yellow-400 text-emerald-900 px-4 py-1 rounded-bl-lg font-medium">
              Most Popular
            </div>
          )}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          <h2 className="text-3xl font-bold mb-2">{pkg.name}</h2>
          <p className="text-5xl font-bold mb-8">{pkg.price}</p>
          <ul className="space-y-4">
            {pkg.features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-center text-lg"
                whileHover={{ x: 5 }}
              >
                <svg
                  className="w-6 h-6 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Link>
    ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            Travel fees **MAY** apply if location is 25+ minutes away. Accepted forms of payment are: Cash, Cashapp & Zelle.
          </motion.p>
        </div>
      </div>

      {/* Buttons to toggle categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row gap-6 justify-center">
        {["Athletics", "Portraits"].map((category) => (
          <motion.button
            key={category}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev === category ? null : category
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex-1 rounded-3xl py-16 bg-gradient-to-br ${
              category === "Athletics"
                ? "from-cyan-500 to-blue-700"
                : "from-pink-500 to-rose-700"
            } text-white font-extrabold text-4xl shadow-lg shadow-black/30
            cursor-pointer select-none
            `}
          >
            {/* Title at bottom right */}
            <span className="absolute bottom-4 right-6 text-lg font-semibold opacity-90">
              {category}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Show packages for selected category with animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatePresence mode="wait">
          {selectedCategory === "Athletics" && (
            <motion.div
              key="athletics"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {renderPackages(athleticsPackages)}
            </motion.div>
          )}
          {selectedCategory === "Portraits" && (
            <motion.div
              key="portraits"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {renderPackages(portraitPackages)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
