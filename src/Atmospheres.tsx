import React, { ReactNode, useEffect, useRef } from 'react';
import { SnowAnimation, HeartAnimation } from './animations';

export type AtmospheresType = 'snow' | 'hearts' | 'spooky' | 'none';

interface Props {
  /** Children to render inside the atmospheres */
  children: ReactNode;
  /** Type of animation to use */
  animation?: AtmospheresType;
  /** Disable the animation */
  disabled?: boolean;
  /** Amount of animated objects, can not be higher then 100 */
  particleAmount?: number;
  /** Color of the animated objects */
  color?: string;
  /** Color of the outline of the animated objects */
  outlineColor?: string;
  /** Speed factor for the animation, can not be higher then 2 */
  speedFactor?: number;
}

export const Atmospheres = ({
  children,
  animation = 'none',
  disabled = false,
  particleAmount,
  color,
  outlineColor,
  speedFactor = 1,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    if (particleAmount && particleAmount > 50) {
      particleAmount = 50;
    }

    if (speedFactor && speedFactor > 2) {
      speedFactor = 2;
    }
  }, [particleAmount]);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={containerRef}>{children}</div>
      {!disabled && (
        <>
          {animation === 'snow' && (
            <SnowAnimation
              color={color}
              containerRef={containerRef}
              outlineColor={outlineColor}
              maxFlakes={particleAmount}
              speedFactor={speedFactor}
            />
          )}
          {animation === 'hearts' && (
            <HeartAnimation
              color={color}
              containerRef={containerRef}
              outlineColor={outlineColor}
              maxHearts={particleAmount}
              speedFactor={speedFactor}
            />
          )}
        </>
      )}
    </div>
  );
};
