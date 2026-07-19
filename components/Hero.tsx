'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const { scrollY } = useScroll();
  const t = useTranslations('Hero');

  const scale = useTransform(scrollY, [0, 500], [1, 2.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-rv-black"
    >

      {/* Text Layer */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-12 text-center">
        <h1 id="hero-heading" className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white mb-6 break-words">
          {t('heading')}
        </h1>

        <p className="text-rv-white/60 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          {t('tagline')}
        </p>
      </div>

      {/* Phone */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-20"
      >
        <PhoneMockup />
      </motion.div>

      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-20 blur-sm"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
