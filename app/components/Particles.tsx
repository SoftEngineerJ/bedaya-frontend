"use client";

import { useEffect, useState } from "react";

const Particles = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const particlesContainer = document.querySelector(".particles");
    if (!particlesContainer) return;

    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particlesContainer.appendChild(particle);
    }

    // Cleanup function
    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = "";
      }
    };
  }, []);

  // Only render particles on client side to prevent hydration mismatch
  if (!isClient) {
    return <div className="particles" />;
  }

  return <div className="particles" />;
};

export default Particles;
