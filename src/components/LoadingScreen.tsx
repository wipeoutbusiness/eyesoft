import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [stage, setStage] = useState<"scale" | "right" | "left" | "reveal">("scale");

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage("scale"), 0),       // Immediately scale up
      setTimeout(() => setStage("right"), 3000),    // After 3s, move right
      setTimeout(() => setStage("left"), 5000),     // After 5s, move left
      setTimeout(() => setStage("reveal"), 7000),   // After 7s, reveal text
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
