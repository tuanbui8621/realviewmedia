'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, Hand } from 'lucide-react';

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Parallax effect for the hero text
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main className="relative bg-rv-black min-h-screen text-rv-white selection:bg-rv-blue selection:text-white" ref={containerRef}>
      <Navbar />

      {/* Chapter 1: The Hook (Hero) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-rv-blue font-mono text-sm tracking-widest uppercase mb-6 block"
          >
            The Evolution of Spatial Media
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            Don't just show them. <br/>
            <span className="text-rv-white/40">Let them step inside.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-rv-white/60 font-light max-w-2xl mx-auto"
          >
            Static photography captures a moment. We build immersive digital twins of your real-world spaces that drive engagement, trust, and physical foot traffic.
          </motion.p>
        </motion.div>
      </section>

      {/* Chapter 2: The Narrative Scroll */}
      <section className="py-32 bg-[#0a0a0a] relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Story Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center mb-32"
          >
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-rv-white/30">
                01. <span className="text-rv-white">The Limitation of Flat Media.</span>
              </h2>
              <p className="text-rv-white/60 text-lg font-light leading-relaxed">
                In today's digital landscape, a standard photo gallery is no longer enough to build trust. Customers want to know exactly what they are walking into before they leave their house. When they can't explore your space, they move on to a competitor who lets them.
              </p>
            </div>
          </motion.div>

          {/* Story Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="flex-1 space-y-6 md:text-right">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-rv-white/30">
                02. <span className="text-rv-white">The Spatial Advantage.</span>
              </h2>
              <p className="text-rv-white/60 text-lg font-light leading-relaxed">
                By integrating a certified Google 360° Virtual Tour directly into your Maps and Search profile, we remove the friction of the unknown. Users can walk your halls, inspect your dining room, and fall in love with your atmosphere—on any device, anywhere in the world.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Chapter 3: The Interactive 360 Experience */}
      <section className="py-32 bg-rv-black border-y border-rv-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Experience It Yourself.</h2>
          <p className="text-rv-white/50 text-lg font-light max-w-2xl mx-auto flex items-center justify-center gap-3">
            <Hand className="w-5 h-5 text-rv-blue" />
            Click and drag left or right to explore the space.
          </p>
        </div>

        {/* 
          The Draggable Panorama Simulator 
          Uses a wide panoramic placeholder. You will swap this with a real equirectangular image later.
        */}
        <div className="w-full max-w-[95vw] mx-auto h-[60vh] md:h-[75vh] rounded-[2rem] overflow-hidden relative cursor-grab active:cursor-grabbing border border-rv-white/20">
          <motion.div
            drag="x"
            dragConstraints={{ left: -1500, right: 0 }}
            dragElastic={0.1}
            className="w-[250vw] h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=3540&auto=format&fit=crop)',
            }}
          />
          {/* Internal shadow to make it feel embedded */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(17,17,17,0.8)] rounded-[2rem]" />
        </div>
      </section>

      {/* Chapter 4: Value-Driven Call to Action (No Pricing) */}
      <section className="py-40 bg-[#050505] text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Every space has a story. <br/> Let's tell yours.
          </h2>
          <p className="text-rv-white/60 text-lg font-light mb-12">
            Whether you manage luxury hospitality, commercial real estate, or a boutique retail location, we engineer the visual assets that convert digital views into real-world bookings.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <MagneticButton>
              <Link href="/contact" className="flex items-center gap-3 bg-rv-blue text-rv-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#1557B0]">
                <span>Start the Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
            <Link href="/portfolio" className="text-rv-white/70 hover:text-rv-white transition-colors underline underline-offset-4 decoration-rv-white/30 hover:decoration-rv-white">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}