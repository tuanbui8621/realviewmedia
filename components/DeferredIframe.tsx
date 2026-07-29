'use client';

import {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from 'react';

type DeferredIframeProps = Omit<ComponentPropsWithoutRef<'iframe'>, 'src'> & {
  src: string;
  rootMargin?: string;
};

export default function DeferredIframe({
  src,
  rootMargin = '400px 0px',
  className,
  ...props
}: DeferredIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    if (!('IntersectionObserver' in window)) {
      const fallbackFrame = requestAnimationFrame(() => {
        setShouldLoad(true);
      });

      return () => cancelAnimationFrame(fallbackFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad && (
        <iframe
          src={src}
          className="block h-full w-full border-0"
          {...props}
        />
      )}
    </div>
  );
}
