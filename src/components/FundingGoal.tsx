import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FundingGoal() {
  const goal = 2500;
  const current = 326;
  const percentage = (current / goal) * 100;

  const [expanded, setExpanded] = useState(false);
  const cameraLink = "https://www.amazon.com/Sony-Full-Frame-Mirrorless-Interchangeable-Renewed/dp/B09P21LZXL/ref=sr_1_5?crid=3DRDFYLVYM57M&dib=eyJ2IjoiMSJ9.QfNj4QE5bqfH2Yv250aaUsCte7puQI6Z1irsVCq8Pi5b8TWlWfhj9UnbOzNPDdCBGK_xV0mgWuSBvJVk8cSvnGY3178UAGfqwZAgE0GRNDZJJ9uY8TQkDyVAsjiGVeNuOrISbig3t1yRB-pSX10zj6cawNpDAo_BhsNGbQmyvkuUENwdAXe72Vw_3n8evz896aqg3z_x-TUPkj-ul9ie9m0Fslo5Sz_bcnLFEBKgRTA.iuTUUyryiRP_plQnkdnibpYLgLQGt1Tyo4LkXTFAykI&dib_tag=se&keywords=sony%2Ba7iv&qid=1747786102&sprefix=sony%2Ba7iv%2Caps%2C115&sr=8-5&th=1"; // <-- replace with your actual link

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200 border-b border-emerald-300 shadow-md px-6 py-4 w-full z-40"
    >
      <div
        className="cursor-pointer max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="text-emerald-900 font-semibold text-sm">
            I'm currently{" "}
            <a
              href={cameraLink}
              onClick={(e) => e.stopPropagation()}
              className="underline decoration-emerald-500 hover:text-emerald-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              saving up for a new camera
            </a>
            .
          </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:flex-none sm:w-48 h-2 bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="text-emerald-800 text-sm font-medium whitespace-nowrap">
            ${current} / ${goal}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm text-emerald-800 max-w-4xl mx-auto leading-relaxed"
          >
            Upgrading to a better camera will significantly improve the quality
            of my work and allow me to offer even more value to our clients. Every
            contribution helps bring that goal closer to reality.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
