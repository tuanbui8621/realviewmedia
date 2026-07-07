'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();
  // As the user scrolls, the phone zooms and fades out
  const scale = useTransform(scrollY, [0, 500], [1, 2.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-rv-black">
      
      {/* Text Layer */}
      <div className="z-10 text-center px-6 mb-12">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Be the business they choose.
        </h1>
        <p className="text-rv-white/50 text-3xl font-light">
          Before they ever walk through your door.
        </p>
      </div>

      {/* The "Zooming" Device Container */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-20"
      >
        <PhoneMockup />
      </motion.div>

      {/* Background "360 Tour" placeholder that sits behind the zoom */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center opacity-20 blur-sm" />
    </section>
  );
}