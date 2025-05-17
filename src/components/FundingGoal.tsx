import { motion } from "framer-motion";

export function FundingGoal() {
  const goal = 2500;
  const current = 326; // Example current amount
  const percentage = (current / goal) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-emerald-200"
    >
      <div className="flex items-center gap-3 mb-2">
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="font-bold text-emerald-900">Camera Fund</h3>
      </div>
      <p className="text-sm text-emerald-800 mb-2">Help us upgrade our equipment!</p>
      <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-between mt-1 text-sm">
        <span className="text-emerald-700">${current}</span>
        <span className="text-emerald-900 font-medium">Goal: ${goal}</span>
      </div>
    </motion.div>
  );
}
