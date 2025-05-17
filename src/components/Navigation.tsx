import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/pricing", label: "Pricing" },
    { path: "/reviews", label: "Reviews" },
    { path: "/booking", label: "Book Now" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-emerald-900/90 backdrop-blur-sm text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <img src="/watermark1.png" alt="Logo" className="w-8 h-8" />
            </motion.div>
            <span className="text-2xl font-bold">Eyes Of T</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
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

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col space-y-2 mt-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path) ? 'bg-emerald-700' : 'hover:bg-emerald-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
