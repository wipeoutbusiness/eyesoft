import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-emerald-900/90 backdrop-blur-sm text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>
            <span className="text-2xl font-bold">Nature's Lens</span>
          </Link>
          <div className="flex space-x-4 items-center">
            {[
              { path: "/about", label: "About" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/pricing", label: "Pricing" },
              { path: "/reviews", label: "Reviews" },
              { path: "/booking", label: "Book Now" },
            ].map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path) ? 'bg-emerald-700' : 'hover:bg-emerald-800'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
