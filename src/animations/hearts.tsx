import React, { useEffect, useRef } from 'react';

export interface HeartProps {
  /** Reference to the container element */
  containerRef: React.RefObject<HTMLElement>;
  /** Color of the heart fill */
  color?: string;
  /** outline color of the heart */
  outlineColor?: string;
  /** Maximum number of hearts to display */
  maxHearts?: number;
  /** Speed factor for the hearts */
  speedFactor?: number;
}

interface HeartParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  alpha: number;
  drift: number;
}

export const HeartAnimation: React.FC<HeartProps> = ({
  containerRef,
  color = 'rgba(255,100,150,0.8)',
  outlineColor = 'rgba(200,50,100,0.5)',
  maxHearts = 50,
  speedFactor = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawHeart = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    fill: string,
    stroke: string,
    alpha: number
  ) => {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.quadraticCurveTo(x, y, x + size / 4, y);
    ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
    ctx.quadraticCurveTo(
      x + size / 2,
      y + size / 2,
      x + size / 4,
      y + (size * 3) / 4
    );
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size / 4, y + (size * 3) / 4);
    ctx.quadraticCurveTo(
      x - size / 2,
      y + size / 2,
      x - size / 2,
      y + size / 4
    );
    ctx.quadraticCurveTo(x - size / 2, y, x - size / 4, y);
    ctx.quadraticCurveTo(x, y, x, y + size / 4);
    ctx.closePath();

    // Fill and stroke
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = stroke;
    ctx.stroke();
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const hearts: HeartParticle[] = Array.from({ length: maxHearts }).map(
      () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 20 + 10,
        speed: Math.random() + 0.5 * speedFactor,
        alpha: Math.random() * 0.5 + 0.5,
        drift: (Math.random() - 0.5) * 0.5,
      })
    );

    let frameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => {
        drawHeart(ctx, h.x, h.y, h.size, color, outlineColor, h.alpha);

        h.y -= h.speed;
        h.x += h.drift;
        h.alpha -= 0.002;

        if (h.alpha <= 0 || h.y < -h.size) {
          h.x = Math.random() * canvas.width;
          h.y = canvas.height + Math.random() * 50;
          h.size = Math.random() * 20 + 10;
          h.speed = Math.random() + 0.5 * speedFactor;
          h.alpha = Math.random() * 0.5 + 0.5;
          h.drift = (Math.random() - 0.5) * 0.5;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [containerRef, color, outlineColor, maxHearts, speedFactor]);

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
