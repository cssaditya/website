import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ particleCount = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random delay for the animation
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      // Random duration for the animation
      const duration = Math.random() * 10 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Random opacity
      const opacity = Math.random() * 0.1 + 0.05;
      particle.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
      
      container.appendChild(particle);
    }

    return () => {
      // Cleanup particles on component unmount
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [particleCount]);

  return (
    <div ref={containerRef} className="particles-container" aria-hidden="true" />
  );
};

export default ParticleBackground;