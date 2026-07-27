'use client';

import { useEffect, type ReactNode } from 'react';

type LenisInstance = import('@studio-freight/lenis').default;

const FINE_POINTER_QUERY = '(pointer: fine) and (hover: hover)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const finePointer = window.matchMedia(FINE_POINTER_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    let disposed = false;
    let lenis: LenisInstance | null = null;
    let animationFrameId: number | null = null;
    let loadPromise: Promise<void> | null = null;

    const shouldEnable = () => finePointer.matches && !reducedMotion.matches;

    const stopAnimationFrame = () => {
      if (animationFrameId === null) return;

      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    const runAnimationFrame = (time: number) => {
      animationFrameId = null;

      if (!lenis || document.hidden) return;

      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(runAnimationFrame);
    };

    const startAnimationFrame = () => {
      if (!lenis || document.hidden || animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(runAnimationFrame);
    };

    const disableLenis = () => {
      stopAnimationFrame();
      lenis?.destroy();
      lenis = null;
    };

    const enableLenis = () => {
      if (!shouldEnable() || lenis || loadPromise) return;

      loadPromise = import('@studio-freight/lenis')
        .then(({ default: Lenis }) => {
          if (disposed || !shouldEnable()) return;

          lenis = new Lenis({
            lerp: 0.05,
            duration: 1.5,
            smoothWheel: true,
          });
          startAnimationFrame();
        })
        .catch(() => {
          // Native scrolling remains available if the optional enhancement fails.
        })
        .finally(() => {
          loadPromise = null;
        });
    };

    const syncLenis = () => {
      if (shouldEnable()) {
        enableLenis();
      } else {
        disableLenis();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimationFrame();
      } else {
        startAnimationFrame();
      }
    };

    finePointer.addEventListener('change', syncLenis);
    reducedMotion.addEventListener('change', syncLenis);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    syncLenis();

    return () => {
      disposed = true;
      finePointer.removeEventListener('change', syncLenis);
      reducedMotion.removeEventListener('change', syncLenis);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      disableLenis();
    };
  }, []);

  return children;
}
