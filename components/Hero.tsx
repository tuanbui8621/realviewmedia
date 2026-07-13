'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 500], [1, 2.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-rv-black">

      {/* Text Layer */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white mb-6 break-words">
          Be the business they choose.
        </h1>

        <p className="text-rv-white/60 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          Before they ever walk through your door.
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
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      />
    </section>
  );
}