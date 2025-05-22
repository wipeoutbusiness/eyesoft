import { motion } from "framer-motion";
import { Camera, Sparkles, User } from "lucide-react";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-sage text-charcoal font-['Inter']"
    >
      {/* Hero Section */}
      <div className="py-24 text-center bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-['Playfair_Display'] font-bold mb-4"
          >
            About Eyes Of T / Thomas Garcia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl font-['Caveat'] text-forest italic"
          >
            Capturing the world through my eyes.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Polaroid Strip */}
      <div className="relative overflow-hidden h-72 bg-charcoal">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img
            src="/filmstrip-overlay.png"
            alt="Film Strip Overlay"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="flex animate-scroll-x whitespace-nowrap h-full z-0 px-4">
          {["/me1.jpg", "/me2.jpg", "/me3.jpg", "/me1.jpg"].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Thomas ${i + 1}`}
              whileHover={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full w-auto object-cover mx-3 rounded-lg border-4 border-sage shadow-md"
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-off-white rounded-2xl p-10 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6 text-forest">
            <User size={32} />
            <h2 className="text-3xl font-bold font-['Playfair_Display']">My Identity</h2>
          </div>
          <p className="text-lg text-charcoal leading-relaxed">
            I'm Thomas, a passionate photographer with nearly two years of experience...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-off-white rounded-2xl p-10 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6 text-forest">
            <Camera size={32} />
            <h2 className="text-3xl font-bold font-['Playfair_Display']">My Camera Journey</h2>
          </div>
          <p className="text-lg text-charcoal leading-relaxed">
            What started as a hobby became my passion—photographing action, light, and emotion...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-off-white rounded-2xl p-10 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6 text-forest">
            <Sparkles size={32} />
            <h2 className="text-3xl font-bold font-['Playfair_Display']">My Philosophy</h2>
          </div>
          <p className="text-lg text-charcoal leading-relaxed">
            Every photo tells a story. My goal is to honor those stories through authentic and powerful visuals.
          </p>
        </motion.div>
      </div>

      {/* Signature SVG Animation */}
      <div className="text-center py-12">
        <motion.svg
          width="260"
          height="80"
          viewBox="0 0 260 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <motion.path
            d="M10,50 Q30,10 50,50 T90,50 Q110,10 130,50 T170,50 Q190,10 210,50 T250,50"
            stroke="#14532d"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.svg>
        <p className="mt-4 font-['Caveat'] text-3xl text-forest italic">Thomas Garcia</p>
      </div>
    </motion.div>
  );
}
