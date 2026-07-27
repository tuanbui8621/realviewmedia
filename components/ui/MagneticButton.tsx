'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MAGNETIC_SPRING = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export default function MagneticButton({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, MAGNETIC_SPRING);
  const y = useSpring(targetY, MAGNETIC_SPRING);

  const cacheBounds = () => {
    boundsRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = boundsRef.current;
    if (!bounds) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = bounds;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // The divisor controls the strength of the magnet (higher = weaker)
    targetX.set(middleX / 3);
    targetY.set(middleY / 3);
  };

  const reset = () => {
    boundsRef.current = null;
    targetX.set(0);
    targetY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={cacheBounds}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
