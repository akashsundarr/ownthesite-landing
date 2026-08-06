"use client";

import React, { useState, useEffect } from "react";
import Logo from "./logo";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const timer1 = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    // Unmount completely after fade-out completes (500ms transition)
    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#ebf3ee] transition-all duration-500 ease-in-out ${
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div 
        className={`relative flex items-center justify-center transition-all duration-700 ease-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
      >
        <Logo className="text-[5rem] sm:text-[7rem] md:text-[9rem]" />
      </div>
    </div>
  );
}
