import React, { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";
import logo from "../assets/logo.png"; // Make sure this path is correct

export default function LoadingScreen() {
  const [startSlide, setStartSlide] = useState(false);
  const [revealText, setRevealText] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Step 1: Start slide to right after 2s
    const timeout1 = setTimeout(() => {
      setStartSlide(true);
    }, 2000);

    // Step 2: Reveal text after slide right (total 4s)
    const timeout2 = setTimeout(() => {
      setRevealText(true);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="content-wrapper">
        <div
          className={`logo-container ${startSlide ? "slide-left" : ""}`}
          ref={logoRef}
        >
          <img src="/logo.png" alt="logo" className="logo-image" />
        </div>

        <div className={`text-container ${revealText ? "reveal" : ""}`}>
          <span className="divider">|</span>
          <span className="loading-text">Eyes Of T</span>
        </div>
      </div>
    </div>
  );
}
