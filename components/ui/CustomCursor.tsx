'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useSpring } from 'framer-motion';

const CURSOR_MEDIA_QUERY = '(min-width: 768px) and (any-pointer: fine)';
const DOT_TRANSITION = {
  type: 'tween' as const,
  ease: 'backOut' as const,
  duration: 0.1,
};
const RING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 150,
  damping: 15,
  mass: 0.5,
};

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);
  const dotX = useMotionValue(-4);
  const dotY = useMotionValue(-4);
  const ringTargetX = useMotionValue(-20);
  const ringTargetY = useMotionValue(-20);
  const ringX = useSpring(ringTargetX, RING_TRANSITION);
  const ringY = useSpring(ringTargetY, RING_TRANSITION);

  useEffect(() => {
    let pointerFrame: number | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const renderPointerPosition = () => {
      pointerFrame = null;
      animate(dotX, pointerX - 4, DOT_TRANSITION);
      animate(dotY, pointerY - 4, DOT_TRANSITION);
      ringTargetX.set(pointerX - 20);
      ringTargetY.set(pointerY - 20);
    };

    const updateMousePosition = (e: MouseEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (pointerFrame === null) {
        pointerFrame = window.requestAnimationFrame(renderPointerPosition);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      const nextIsHovering =
        target instanceof Element && target.closest('a, button') !== null;

      if (nextIsHovering !== isHoveringRef.current) {
        isHoveringRef.current = nextIsHovering;
        setIsHovering(nextIsHovering);
      }
    };

    const mediaQuery = window.matchMedia(CURSOR_MEDIA_QUERY);
    let listenersAttached = false;

    const addCursorListeners = () => {
      if (listenersAttached) return;

      window.addEventListener('mousemove', updateMousePosition, { passive: true });
      window.addEventListener('mouseover', handleMouseOver, { passive: true });
      listenersAttached = true;
    };

    const removeCursorListeners = () => {
      if (!listenersAttached) return;

      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      if (pointerFrame !== null) {
        window.cancelAnimationFrame(pointerFrame);
        pointerFrame = null;
      }
      listenersAttached = false;
    };

    const syncCursor = () => {
      setIsEnabled(mediaQuery.matches);

      if (mediaQuery.matches) {
        addCursorListeners();
      } else {
        removeCursorListeners();
        isHoveringRef.current = false;
        setIsHovering(false);
      }
    };

    syncCursor();
    mediaQuery.addEventListener('change', syncCursor);

    return () => {
      mediaQuery.removeEventListener('change', syncCursor);
      removeCursorListeners();
      dotX.stop();
      dotY.stop();
    };
  }, [dotX, dotY, ringTargetX, ringTargetY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* The tiny center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-rv-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ x: dotX, y: dotY }}
      />
      {/* The physics ring that expands on hover */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-rv-white/50 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent',
        }}
        transition={RING_TRANSITION}
      />
    </>
  );
}
