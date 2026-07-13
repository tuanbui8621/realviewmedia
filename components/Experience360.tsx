'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, CheckCircle2, Activity } from 'lucide-react';
import dynamic from 'next/dynamic';

const Pannellum = dynamic(() => import('pannellum-react').then(mod => mod.Pannellum), { ssr: false }) as any;

export default function Experience360() {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-6">
        
        {/* LEFT SIDE: The 360 Panorama */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-2/3 aspect-[16/11] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          <Pannellum
            width="100%"
            height="100%"
            image="/images/oakwood.png"
            pitch={0}
            yaw={0}
            hfov={100}
            autoLoad={true}
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            compass={false}
            mouseZoom={true}
            autoRotate={-2}
          />
          {/* Minimalist Live Indicator */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Preview
          </div>
        </motion.div>

        {/* RIGHT SIDE: Expert Analytics Dashboard */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          {/* Card 1: Verified Views Analytics */}
          <div className="flex-1 bg-[#0a0a0c] border border-white/10 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
            
            <div className="relative z-10 flex justify-between items-start w-full">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <Activity size={20} className="text-white/70" />
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <TrendingUp size={12} />
                <span>+14.2% MoM</span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <h2 className="text-5xl font-black text-white tracking-tighter drop-shadow-md">
                171K<span className="text-2xl text-white/50">+</span>
              </h2>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-1">Verified Maps Views</p>
            </div>

            {/* Micro-Visualization: SVG Trend Line */}
            <div className="relative z-10 mt-6 w-full h-12 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d="M0 25 L10 20 L20 22 L30 15 L40 18 L50 10 L60 12 L70 5 L80 8 L90 2 L100 0" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0 25 L10 20 L20 22 L30 15 L40 18 L50 10 L60 12 L70 5 L80 8 L90 2 L100 0 L100 25 L0 25 Z" fill="url(#blue-gradient)" stroke="none" />
                <defs>
                  <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Card 2: Enterprise ROI Flex */}
          <div className="flex-1 bg-gradient-to-br from-[#0a0a0c] to-[#0a1410] border border-emerald-500/30 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center group hover:border-emerald-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500 text-white p-2.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Client Conversion</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Measurable ROI</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-px bg-white/10 my-4"></div>

              <div className="w-full">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">2x Higher Interest</h2>
                <ul className="mt-4 space-y-2.5">
                  {['Twice as likely to generate interest', 'Higher booking potential'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/60">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}