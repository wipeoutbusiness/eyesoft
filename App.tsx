import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Athletics } from "./pages/Athletics";
import { Portraits } from "./pages/Portraits";
import { Pricing } from "./pages/Pricing";
import { Reviews } from "./pages/Reviews";
import { Booking } from "./pages/Booking";
import { Toaster } from "sonner";
import { FundingGoal } from "./components/FundingGoal";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/athletics" element={<Athletics />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-emerald-50">
        <Navigation />
        <AnimatedRoutes />
        <FundingGoal />
        <Toaster />
      </div>
    </Router>
  );
}
