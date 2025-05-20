import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [stage, setStage] = useState("scale");

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage("scale"), 0),       // Start scaling
      setTimeout(() => setStage("right"), 2000),    // Move right at 2s
      setTimeout(() => setStage("pause"), 4000),    // Pause at 4s
      setTimeout(() => setStage("left"), 6000),     // Slide left + reveal at 6s
      setTimeout(() => setStage("final"), 8000),    // Hold final state
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="loading-screen">
      <div className={`content-wrapper ${stage}`}>
        <div className={`logo-container ${stage}`}>
          <img src="/logo.png" alt="logo" className="logo-image" />
        </div>
        <div className={`text-container ${stage === "left" || stage === "final" ? "reveal" : ""}`}>
          <span className="divider">|</span>
          <span className="loading-text">Eyes Of T</span>
        </div>
      </div>
    </div>
  );
}
