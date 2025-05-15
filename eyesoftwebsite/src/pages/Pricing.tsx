import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "1-hour session",
        "10 edited digital photos",
        "Online gallery",
        "Print release",
      ],
      color: "from-blue-400 to-purple-600",
      shadow: "shadow-blue-500/30",
    },
    {
      name: "Premium",
      price: "$499",
      features: [
        "2-hour session",
        "25 edited digital photos",
        "Online gallery",
        "Print release",
        "2 outfit changes",
        "Location consultation",
      ],
      color: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-500/30",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$799",
      features: [
        "3-hour session",
        "50 edited digital photos",
        "Online gallery",
        "Print release",
        "Unlimited outfit changes",
        "Location consultation",
        "Professional hair & makeup",
        "Custom photo album",
      ],
      color: "from-amber-400 to-orange-600",
      shadow: "shadow-amber-500/30",
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
            Investment
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl"
          >
            Choose the perfect package for your photography needs
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <Link
              to="/booking"
              key={pkg.name}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${pkg.color} text-white p-8 shadow-2xl ${pkg.shadow} cursor-pointer`}
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
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
