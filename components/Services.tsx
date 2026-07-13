'use client';

import { motion } from 'framer-motion';
import { Aperture, Map, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Background glow for tech feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* The Hook (Header) */}
        <div className="max-w-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6"
          >
            Don't just show your space.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Prove it.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg font-medium leading-relaxed"
          >
            We create professional 360° virtual tours that help customers find your business, explore your space, and visit in person.
          </motion.p>
        </div>

        {/* The Interactive Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Cinematic Capture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 group relative p-8 rounded-[3rem] bg-[#0a0a0c] border border-white/10 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Aperture className="w-10 h-10 text-blue-400 mb-6 shrink-0" />
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">8K Cinematic Capture</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              No amateur gear. No distorted edges. We use architectural-grade camera rigs to capture your space in flawless high-definition. We ensure your business looks expansive, premium, and impossible for customers to ignore.
            </p>
            <Link href="/portfolio" className="mt-auto inline-flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all w-fit">
            </Link>
          </motion.div>

          {/* Box 2: Native Maps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-[3rem] bg-[#0a0a0c] border border-white/10 overflow-hidden flex flex-col"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Map className="w-10 h-10 text-orange-400 mb-6 shrink-0" />
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Street View Injection</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              We deploy your 360° tour directly into Google Maps—the exact navigation engine your customers are already using to find you.
            </p>
            <div className="mt-auto flex items-center gap-2 text-white/30 text-xs font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              API Ready
            </div>
          </motion.div>

          {/* Box 3: ROI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="md:col-span-3 group relative p-8 rounded-[3rem] bg-gradient-to-r from-[#0a0a0c] to-[#0d1424] border border-emerald-500/20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400">
                  <BarChart3 size={20} />
                </div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">The Bottom Line</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Measurable Conversion Spikes</h3>
              <p className="text-white/70 text-sm leading-relaxed md:text-base">
                Listings upgraded with a premium virtual tour are twice as likely to generate interest. We don't just get you views; we turn your digital traffic into actual revenue and real-world bookings.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
               <Link href="/portfolio" className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                 See Case Studies
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}