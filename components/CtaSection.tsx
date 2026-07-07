'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-rv-black border-t border-rv-white/10">
      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rv-blue/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-rv-blue font-mono text-sm tracking-widest uppercase mb-6"
        >
          Let's Work Together
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-rv-white mb-12 max-w-4xl"
        >
          Ready to elevate <br /> your business?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MagneticButton>
            <Link href="/contact" className="group relative flex items-center justify-center gap-3 bg-rv-white text-rv-black px-10 py-6 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}