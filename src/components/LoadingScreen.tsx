import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [stage, setStage] = useState<"scale" | "right" | "left" | "reveal">("scale");

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage("scale"), 0),       // Start immediately
      setTimeout(() => setStage("right"), 2000),    // Move right at 2s
      setTimeout(() => setStage("left"), 4000),     // Move left at 4s
      setTimeout(() => setStage("reveal"), 5000),   // Reveal text at 5s
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="loading-screen">
      <div className="content-wrapper">
        <div className={`logo-container ${stage}`}>
          <img src="/logo.png" alt="logo" className="logo-image" />
        </div>
        <div className={`text-container ${stage === "reveal" ? "reveal" : ""}`}>
          <span className="divider">|</span>
          <span className="loading-text">Eyes Of T</span>
        </div>
      </div>
    </div>
  );
}
