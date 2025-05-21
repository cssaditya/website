import React, { useEffect, useRef } from 'react';

interface StarfieldBackgroundProps {
  starCount?: number;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ starCount = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.05 + 0.02,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // Animate (twinkle)
        star.alpha += (Math.random() - 0.5) * 0.02;
        star.alpha = Math.max(0.3, Math.min(1, star.alpha));
      }
      requestAnimationFrame(draw);
    }

    draw();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Optionally regenerate stars for new size
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'black',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default StarfieldBackground; 