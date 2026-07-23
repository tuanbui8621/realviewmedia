'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useTranslations } from 'next-intl';
import PhoneMockup from './PhoneMockup';

const ORBIT_COLOR = '#BFE8FF';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const orbitActivatedRef = useRef(false);
  const [orbitActivated, setOrbitActivated] = useState(false);
  const reduceMotion = useReducedMotion();
  const t = useTranslations('Hero');
  const phoneT = useTranslations('PhoneMockup');
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (!orbitActivatedRef.current && latest >= 0.14) {
      orbitActivatedRef.current = true;
      setOrbitActivated(true);
    }
  });

  const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.23], [1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.23], [0, -48]);
  const phoneScale = useTransform(
    smoothProgress,
    [0, 0.3, 1],
    [0.92, 1.02, 1.12],
  );
  const phoneY = useTransform(
    smoothProgress,
    [0, 0.42, 1],
    [150, 24, -10],
  );
  const phoneGlow = useTransform(
    smoothProgress,
    [0, 0.28, 0.55, 1],
    [0.2, 0.46, 0.76, 0.6],
  );
  const surfaceOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.46, 1],
    [0.18, 0.36, 0.72, 0.52],
  );
  const reflectionOpacity = useTransform(
    smoothProgress,
    [0.12, 0.36, 0.56, 1],
    [0, 0.18, 0.36, 0.24],
  );
  const ringScale = useTransform(
    smoothProgress,
    [0.12, 0.42, 1],
    [0.96, 1, 1],
  );
  const ringOpacity = useTransform(
    smoothProgress,
    [0.08, 0.14, 0.35, 1],
    [0, 0.58, 0.82, 0.88],
  );
  const orbitDraw = useTransform(smoothProgress, [0.14, 0.2, 0.52], [0, 0, 1]);
  const markerOpacity = useTransform(
    smoothProgress,
    [0.04, 0.1, 0.18],
    [0, 1, 1],
  );
  const markerY = useTransform(smoothProgress, [0.04, 0.14], [10, 0]);
  const panoramaX = useTransform(smoothProgress, [0, 1], ['-2.5%', '2.5%']);
  const panoramaY = useTransform(smoothProgress, [0, 1], ['-1%', '1.5%']);
  const panoramaScale = useTransform(smoothProgress, [0, 1], [1.08, 1.16]);
  const panoramaOpacity = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [0.78, 0.9, 0.84],
  );
  const depthY = useTransform(smoothProgress, [0, 1], [-10, 18]);
  const surfaceY = useTransform(smoothProgress, [0, 1], [8, -12]);
  const atmosphereOpacity = useTransform(
    smoothProgress,
    [0.36, 0.62, 1],
    [0, 0.32, 0.68],
  );

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative h-[140svh] bg-[#050608] motion-reduce:h-[100svh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Cinematic environment */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(191,232,255,0.12),transparent_30%),linear-gradient(180deg,#090b10_0%,#050608_58%,#020304_100%)]"
        />
        <motion.div
          aria-hidden="true"
          style={{
            x: reduceMotion ? 0 : panoramaX,
            y: reduceMotion ? 0 : panoramaY,
            scale: reduceMotion ? 1.08 : panoramaScale,
            opacity: reduceMotion ? 0.82 : panoramaOpacity,
          }}
          className="absolute -inset-[4%]"
        >
          <Image
            src="/images/hero-3d.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center contrast-110"
          />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.12)_0%,rgba(4,7,11,0.22)_45%,rgba(1,2,4,0.5)_100%)]"
        />
        <motion.div
          aria-hidden="true"
          style={{
            opacity: reduceMotion ? 0.35 : atmosphereOpacity,
            y: reduceMotion ? 0 : depthY,
          }}
          className="absolute inset-0"
        >
          <div className="absolute -left-[18%] top-[16%] h-[70%] w-[44%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(191,232,255,0.1),transparent_68%)] blur-3xl" />
          <div className="absolute -right-[18%] top-[10%] h-[76%] w-[46%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(191,232,255,0.1),transparent_68%)] blur-3xl" />
          <div className="absolute inset-x-[8%] top-[22%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.74)_100%)]"
        />
        <motion.div
          aria-hidden="true"
          style={{ x: '-50%', y: reduceMotion ? 0 : depthY }}
          className="absolute left-1/2 top-[62%] h-[34%] w-[125%] rounded-[50%] border-t border-[#BFE8FF]/20 bg-[radial-gradient(ellipse_at_top,rgba(191,232,255,0.11),rgba(5,8,12,0.12)_42%,transparent_72%)] shadow-[0_-24px_70px_rgba(191,232,255,0.08)]"
        />

        {/* Text layer */}
        <motion.div
          style={{
            opacity: reduceMotion ? 1 : textOpacity,
            y: reduceMotion ? 0 : textY,
          }}
          className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-6xl px-6 pt-28 text-center sm:pt-32 lg:pt-36"
        >
          <h1
            id="hero-heading"
            className="mb-6 break-words text-[2.5rem] font-bold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t('heading')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-rv-white/60 sm:text-xl md:text-2xl lg:text-3xl">
            {t('tagline')}
          </p>
        </motion.div>

        {/* Reflective surface */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: reduceMotion ? 0.32 : surfaceOpacity,
            y: reduceMotion ? 0 : surfaceY,
          }}
          className="absolute inset-x-0 top-[72%] z-10 h-[38%] bg-[linear-gradient(180deg,rgba(191,232,255,0.08),rgba(5,7,10,0.42)_16%,rgba(0,0,0,0.84)_100%)]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BFE8FF]/40 to-transparent" />
          <div className="absolute inset-x-[10%] top-0 h-20 bg-[#BFE8FF]/5 blur-2xl" />
        </motion.div>

        {/* Phone reflection */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: reduceMotion ? 0.12 : reflectionOpacity }}
          className="absolute left-1/2 top-[72%] z-20 h-40 w-44 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(191,232,255,0.18),transparent_76%)] blur-xl [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]"
        />

        {/* Existing phone, unchanged */}
        <div className="absolute left-1/2 top-[61%] z-40 -translate-x-1/2 -translate-y-1/2 sm:top-[60%] lg:top-[58%]">
          <motion.div
            style={{
              opacity: 1,
              scale: reduceMotion ? 0.94 : phoneScale,
              y: reduceMotion ? 0 : phoneY,
            }}
            className="will-change-transform"
          >
            <motion.div
              style={{ opacity: reduceMotion ? 0.35 : phoneGlow }}
              aria-hidden="true"
              className="absolute -inset-12 rounded-[5rem] bg-[#BFE8FF]/15 blur-3xl"
            />
            <div className="relative h-[640px] w-[320px] origin-center scale-[0.72] sm:scale-[0.82] lg:scale-100">
              {/* Back half of the orbit */}
              <div className="pointer-events-none absolute left-1/2 top-[91%] z-0 h-[160px] w-[430px] -translate-x-1/2 -translate-y-1/2 sm:top-[88%] sm:h-[210px] sm:w-[580px] lg:top-[86%] lg:h-[260px] lg:w-[720px]">
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 800 300"
                  fill="none"
                  style={{
                    opacity: reduceMotion ? 0.48 : ringOpacity,
                    scale: reduceMotion ? 1 : ringScale,
                  }}
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <filter id="orbit-glow" x="-20%" y="-60%" width="140%" height="220%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <mask id="orbit-back-mask">
                      <rect width="800" height="300" fill="black" />
                      <rect width="800" height="150" fill="white" />
                    </mask>
                    <path
                      id="orbit-motion-path-back"
                      d="M32 150a368 104 0 1 1 736 0a368 104 0 1 1-736 0"
                    />
                  </defs>
                  <motion.ellipse
                    cx="400"
                    cy="150"
                    rx="368"
                    ry="104"
                    stroke={ORBIT_COLOR}
                    strokeOpacity="0.42"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#orbit-glow)"
                    mask="url(#orbit-back-mask)"
                    style={{ pathLength: reduceMotion ? 1 : orbitDraw }}
                  />
                  <motion.ellipse
                    cx="400"
                    cy="150"
                    rx="368"
                    ry="104"
                    pathLength="1"
                    stroke={ORBIT_COLOR}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="1 1"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#orbit-glow)"
                    mask="url(#orbit-back-mask)"
                    initial={{ strokeDashoffset: 1 }}
                    animate={
                      orbitActivated && !reduceMotion
                        ? { strokeDashoffset: [1, 0] }
                        : { strokeDashoffset: 1 }
                    }
                    transition={
                      orbitActivated && !reduceMotion
                        ? {
                            duration: 4.8,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                          }
                        : { duration: 0 }
                    }
                  />
                  {orbitActivated && !reduceMotion && (
                    <g mask="url(#orbit-back-mask)">
                      <path
                        d="M-10-5 0 0-10 5"
                        fill="none"
                        stroke={ORBIT_COLOR}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#orbit-glow)"
                      >
                        <animateMotion dur="4.8s" repeatCount="indefinite" rotate="auto">
                          <mpath href="#orbit-motion-path-back" />
                        </animateMotion>
                      </path>
                    </g>
                  )}
                </motion.svg>
              </div>

              <div className="relative z-20">
                <PhoneMockup />
              </div>

              {/* Masked front edge of the same orbit */}
              <div className="pointer-events-none absolute left-1/2 top-[91%] z-30 h-[160px] w-[430px] -translate-x-1/2 -translate-y-1/2 sm:top-[88%] sm:h-[210px] sm:w-[580px] lg:top-[86%] lg:h-[260px] lg:w-[720px]">
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 800 300"
                  fill="none"
                  style={{
                    opacity: reduceMotion ? 0.3 : ringOpacity,
                    scale: reduceMotion ? 1 : ringScale,
                  }}
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    <filter id="orbit-front-glow" x="-20%" y="-60%" width="140%" height="220%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <mask id="orbit-front-mask">
                      <rect width="800" height="300" fill="black" />
                      <rect y="150" width="800" height="150" fill="white" />
                      <rect x="305" y="145" width="190" height="155" rx="24" fill="black" />
                    </mask>
                    <path
                      id="orbit-motion-path-front"
                      d="M32 150a368 104 0 1 1 736 0a368 104 0 1 1-736 0"
                    />
                  </defs>
                  <motion.ellipse
                    cx="400"
                    cy="150"
                    rx="368"
                    ry="104"
                    stroke={ORBIT_COLOR}
                    strokeOpacity="0.42"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#orbit-front-glow)"
                    mask="url(#orbit-front-mask)"
                    style={{ pathLength: reduceMotion ? 1 : orbitDraw }}
                  />
                  <motion.ellipse
                    cx="400"
                    cy="150"
                    rx="368"
                    ry="104"
                    pathLength="1"
                    stroke={ORBIT_COLOR}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="1 1"
                    vectorEffect="non-scaling-stroke"
                    filter="url(#orbit-front-glow)"
                    mask="url(#orbit-front-mask)"
                    initial={{ strokeDashoffset: 1 }}
                    animate={
                      orbitActivated && !reduceMotion
                        ? { strokeDashoffset: [1, 0] }
                        : { strokeDashoffset: 1 }
                    }
                    transition={
                      orbitActivated && !reduceMotion
                        ? {
                            duration: 4.8,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                          }
                        : { duration: 0 }
                    }
                  />
                  {orbitActivated && !reduceMotion && (
                    <g mask="url(#orbit-front-mask)">
                      <path
                        d="M-10-5 0 0-10 5"
                        fill="none"
                        stroke={ORBIT_COLOR}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#orbit-front-glow)"
                      >
                        <animateMotion dur="4.8s" repeatCount="indefinite" rotate="auto">
                          <mpath href="#orbit-motion-path-front" />
                        </animateMotion>
                      </path>
                    </g>
                  )}
                  <g transform="translate(400 254)">
                  <motion.g
                    filter="url(#orbit-front-glow)"
                    style={{
                      opacity: reduceMotion ? 0.85 : markerOpacity,
                      y: reduceMotion ? 0 : markerY,
                    }}
                  >
                    <rect
                      x="-43"
                      y="-17"
                      width="86"
                      height="34"
                      rx="17"
                      fill="#07101B"
                      fillOpacity="0.9"
                      stroke={ORBIT_COLOR}
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M-29 4C-24 12-10 15 0 15c12 0 24-4 29-12"
                      stroke={ORBIT_COLOR}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="m24 4 6-2 1 6"
                      stroke={ORBIT_COLOR}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                      y="1"
                      fill={ORBIT_COLOR}
                      fontSize="13"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {phoneT('icon360')}
                    </text>
                  </motion.g>
                  </g>
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-50 h-32 bg-gradient-to-b from-transparent to-rv-black"
        />
      </div>
    </section>
  );
}
