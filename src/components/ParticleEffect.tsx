
import React, { useEffect, useRef } from 'react';

export const ParticleEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random starting position
      particle.style.left = Math.random() * 100 + '%';
      
      // Random color
      const colors = ['#00ffff', '#ff0080', '#8000ff', '#00ff41'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random animation duration
      const duration = Math.random() * 4 + 3;
      particle.style.animationDuration = duration + 's';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };

    // Create particles at intervals
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      // Clear all particles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};
