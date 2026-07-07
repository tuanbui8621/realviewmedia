'use client';

import { motion } from 'framer-motion';
import { Maximize, Navigation, Crosshair, View } from 'lucide-react';

export default function Experience360() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-rv-white/5">
      {/* Subtle Tech Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-rv-blue font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
              <Crosshair className="w-4 h-4" /> Spatial Engine
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-rv-white">
              Interactive Spatial <br /> Mapping.
            </h2>
          </div>
          <p className="text-rv-white/50 text-lg max-w-md font-light pb-2">
            We don't just take photos. We digitize physical spaces into immersive, explorable 3D environments hosted on Google's global infrastructure.
          </p>
        </div>

        {/* Tech Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[400px_200px]">
          
          {/* Main 360 Viewer Simulator (Spans 2 rows & 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group border border-rv-white/10 bg-rv-charcoal/20 cursor-none"
          >
            {/* Simulated 360 View Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110 ease-linear opacity-60"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop)' }}
            />
            
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-rv-black/90 via-transparent to-transparent" />
            
            {/* Tech UI Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="bg-rv-black/50 backdrop-blur-md border border-rv-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-mono text-rv-white">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> LIVE PREVIEW
                </div>
                <button className="bg-rv-white/10 backdrop-blur-md border border-rv-white/20 p-3 rounded-full text-rv-white hover:bg-rv-white hover:text-rv-black transition-colors">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-center mb-4">
                <div className="bg-rv-black/60 backdrop-blur-md border border-rv-white/10 rounded-full px-6 py-3 flex items-center gap-4 hover:bg-rv-white/10 transition-colors pointer-events-none">
                  <Navigation className="w-5 h-5 text-rv-blue animate-bounce" />
                  <span className="text-sm font-medium tracking-wide">Simulate 360° Drag</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-rv-white/10 bg-gradient-to-br from-rv-charcoal/30 to-rv-black p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <View className="w-12 h-12 text-rv-white/5 absolute top-8 right-8" />
            <h3 className="text-5xl md:text-6xl font-mono font-bold text-rv-white mb-2">5M<span className="text-rv-blue">+</span></h3>
            <p className="text-rv-white/50 text-xs tracking-widest uppercase font-medium">Google Views Generated</p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-rv-white/10 bg-gradient-to-br from-rv-blue/10 to-rv-black p-8 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Tech Glow Effect */}
            <div className="w-32 h-32 bg-rv-blue/20 rounded-full blur-3xl absolute -bottom-10 -right-10" />
            
            <h3 className="text-5xl md:text-6xl font-mono font-bold text-rv-white mb-2">360<span className="text-rv-blue">°</span></h3>
            <p className="text-rv-white/50 text-xs tracking-widest uppercase font-medium relative z-10">Google Street View Trusted</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}