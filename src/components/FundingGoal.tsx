import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function FundingGoal() {
  const goal = 2500;
  const current = 326;
  const percentage = (current / goal) * 100;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-emerald-100 text-emerald-900 z-50 shadow-md cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">
            We're <a href="https://example.com" className="underline hover:text-emerald-700" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">saving up for a new camera</a> – click to learn more!
          </span>
        </div>
        <div className="flex-shrink-0 text-sm font-bold">
          ${current} / ${goal}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white/90 px-4 pb-4 text-sm"
          >
            <p className="text-emerald-800 py-2">
              We're currently raising funds for a professional-grade camera to improve the quality of our work.
              This will help us produce sharper portraits, better videos, and more engaging content for all our clients and viewers.
            </p>
            <div className="h-2 w-full bg-emerald-200 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
