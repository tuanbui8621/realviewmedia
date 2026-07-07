'use client';

import { motion } from 'framer-motion';
import { Eye, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const Pannellum = dynamic(() => import('pannellum-react').then(mod => mod.Pannellum), { ssr: false });

export default function Experience360() {
  return (
    <section className="py-24 bg-rv-black px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-6">
        
        {/* LEFT SIDE: The 360 Panorama */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-2/3 aspect-[4/3] rounded-[2rem] overflow-hidden border border-rv-white/10 shadow-2xl"
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
            mouseZoom={false}
            autoRotate={-2}
          />
          {/* Overlay badges from your screenshot */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> LIVE PREVIEW
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs flex items-center gap-2">
             Simulate 360° Drag
          </div>
        </motion.div>

        {/* RIGHT SIDE: Proof Cards Stacked */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="flex-1 p-8 rounded-[2rem] bg-rv-white/[0.03] border border-rv-white/10 flex flex-col justify-center">
            <Eye className="w-8 h-8 text-rv-white/20 mb-6" />
            <p className="text-5xl font-bold tracking-tighter">5M+</p>
            <p className="text-rv-white/50 uppercase tracking-widest text-xs font-mono mt-2">GOOGLE VIEWS GENERATED</p>
          </div>
          
          <div className="flex-1 p-8 rounded-[2rem] bg-rv-blue/5 border border-rv-blue/20 flex flex-col justify-center">
            <Award className="w-8 h-8 text-rv-blue mb-6" />
            <p className="text-5xl font-bold tracking-tighter text-rv-blue">360°</p>
            <p className="text-rv-white/50 uppercase tracking-widest text-xs font-mono mt-2">GOOGLE STREET VIEW TRUSTED</p>
          </div>
        </div>

      </div>
    </section>
  );
}