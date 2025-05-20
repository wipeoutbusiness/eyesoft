import { useEffect, useState } from "react";
import logo from "../logo.png"; // ✅ Your logo path
import "../index.css"; // Assuming Tailwind is here
import "./LoadingScreen.css"; // Custom styles for animation masking

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"scale" | "right" | "left" | "done">("scale");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("right"), 2000),
      setTimeout(() => setPhase("left"), 4000),
      setTimeout(() => setPhase("done"), 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-full max-w-[600px] h-[120px] overflow-hidden px-6">
        {/* The text sits behind the logo */}
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-slate-800 font-[Kirang_Haerang]">
          <span className="ml-[100px]">| Eyes Of T</span>
        </div>

        {/* Logo that slides and reveals text */}
        <img
          src="/logo.png"
          alt="Logo"
          className={`absolute z-10 top-1/2 -translate-y-1/2 h-[90px] transition-transform duration-[2000ms]
            ${phase === "scale" ? "scale-[1.5] left-1/2 -translate-x-1/2"
            : phase === "right" ? "scale-[1.5] left-[66%] -translate-x-1/2"
            : phase === "left" ? "scale-[1.5] left-[100px]"
            : ""}`}
          style={{ transitionTimingFunction: "ease-in-out" }}
        />
      </div>
    </div>
  );
}
