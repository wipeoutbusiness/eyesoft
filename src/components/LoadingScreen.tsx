import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [stage, setStage] = useState("init");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("scale"), 0),         // start scaling
      setTimeout(() => setStage("right"), 3500),      // move right
      setTimeout(() => setStage("left"), 6500),       // move left + start reveal
      setTimeout(() => setStage("reveal"), 8500),     // curtain reveal completes
    ];
    return () => timers.forEach(clearTimeout);
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
