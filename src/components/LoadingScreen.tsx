import React, { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [stage, setStage] = useState<"scale" | "right" | "left" | "reveal">("scale");

  useEffect(() => {
    // Step 1: Start by scaling the logo (already default style)
    const timeout1 = setTimeout(() => setStage("right"), 3000); // after 3s
    const timeout2 = setTimeout(() => setStage("left"), 5000);  // after 5s
    const timeout3 = setTimeout(() => setStage("reveal"), 6500); // after 6.5s

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
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
