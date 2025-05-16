import React, { useEffect, useRef } from 'react';

export interface SnowProps {
  containerRef: React.RefObject<HTMLElement>;
  color?: string;
  outlineColor?: string;
  maxFlakes?: number;
  speedFactor?: number;
}

export const SnowAnimation: React.FC<SnowProps> = ({
  containerRef,
  color = 'rgba(200,200,200,0.8)',
  outlineColor = 'rgba(0,0,0,0.1)',
  maxFlakes = 50,
  speedFactor = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();

    const snowflakes = Array.from({ length: maxFlakes }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * maxFlakes,
    }));

    let angle = 0;
    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowColor = 'rgba(0,0,0,0.2)';
      ctx.shadowBlur = 2;

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = outlineColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      angle += 0.01 * speedFactor;
      snowflakes.forEach((flake) => {
        flake.y += Math.cos(angle + flake.d) + 1 + (flake.r / 2) * speedFactor;
        flake.x += Math.sin(angle) * 2 * speedFactor;
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });

      frameId = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [containerRef, color, outlineColor, maxFlakes, speedFactor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};
