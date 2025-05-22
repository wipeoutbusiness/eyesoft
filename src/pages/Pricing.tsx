import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, DollarSign, Clock } from "lucide-react";

export function Pricing() {
  const iconMap = [<Box size={20} />, <DollarSign size={20} />, <Clock size={20} />];

  const athleticsPackages = [
    {
      name: "Game Day",
      price: "$30",
      features: ["Full game coverage", "10 edited action and game pictures"],
      popular: false,
    },
    {
      name: "3 Day Coverage",
      price: "$100",
      features: ["3 game coverage", "35-40 edited pictures", "30-sec mixtape w/ song"],
      popular: true,
    },
    {
      name: "Season Coverage",
      price: "$300",
      features: ["Full season coverage", "100+ edited photos", "Highlight mixtape"],
      popular: false,
    },
  ];

  const portraitPackages = [
    {
      name: "Basic",
      price: "$155",
      features: ["1-hour session", "20 edited photos"],
      popular: false,
    },
    {
      name: "Premium",
      price: "$225",
      features: [
        "2-hour session",
        "25 edited photos",
        "Location Consultation",
        "2 outfit changes",
        "10 photocards",
      ],
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
        "5 8x10 prints",
        "All image files",
      ],
      popular: false,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderPackages = (packages) =>
    packages.map((pkg, index) => (
      <Link to="/booking" key={pkg.name}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{
            y: -8,
            boxShadow: "0px 0px 20px 2px rgba(20, 83, 45, 0.25)",
          }}
          className={`w-full relative overflow-hidden rounded-2xl bg-sage text-charcoal p-8 shadow-lg transition-all`}
        >
          {pkg.popular && (
            <div className="absolute top-0 right-0 bg-beige text-forest px-4 py-1 rounded-bl-lg font-semibold">
              ★ Most Popular
            </div>
          )}
          <h2 className="text-3xl font-playfair font-semibold mb-2">{pkg.name}</h2>
          <p className="text-5xl font-bold mb-6 text-forest">{pkg.price}</p>
          <ul className="space-y-4">
            {pkg.features.map((feature, i) => (
              <motion.li
                key={feature}
                className="flex items-center text-lg gap-2"
                whileHover={{ x: 6 }}
              >
                <span className="text-forest">{iconMap[i % iconMap.length]}</span>
                <span>{feature}</span>
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
      className="bg-beige text-charcoal font-inter"
    >
      {/* Header */}
      <div className="bg-forest text-off-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold mb-4"
          >
            Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl"
          >
            Travel fees may apply if the location is over 25 minutes away. Accepted: Cash, Cash App & Zelle.
          </motion.p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row gap-6 justify-center">
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
            className={`flex-1 text-2xl font-bold font-playfair rounded-full px-8 py-4 transition-all shadow-md bg-forest text-off-white`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Packages */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {selectedCategory === "Athletics" && (
            <motion.div
              key="athletics"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {renderPackages(portraitPackages)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
