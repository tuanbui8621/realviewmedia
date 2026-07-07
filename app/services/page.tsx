'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, Eye, MousePointerClick } from 'lucide-react';

export default function ExperiencePage() {  // Shared animation settings for consistent pacing
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as any // Add 'as any' here
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

  return (
    <main className="relative bg-rv-black min-h-screen text-rv-white selection:bg-rv-blue selection:text-white overflow-hidden">
      <Navbar />

      {/* ====================================================
          CHAPTER 1: The Hook (Hero)
          ==================================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-rv-black to-rv-black" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto space-y-6"
        >
          <motion.p variants={fadeUp} className="text-rv-blue font-mono text-sm tracking-[0.3em] uppercase mb-8">
            The Reality of Digital Choice
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Someone is deciding <br/>
            <span className="text-rv-white/40">whether to visit right now.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 pt-12 text-xl md:text-3xl font-light text-rv-white/60">
            <p>They search.</p>
            <div className="w-2 h-2 rounded-full bg-rv-white/20 hidden md:block" />
            <p>They compare.</p>
            <div className="w-2 h-2 rounded-full bg-rv-white/20 hidden md:block" />
            <p className="text-rv-white font-medium">They hesitate.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          CHAPTER 2: The Comparison (Visual Hook)
          ==================================================== */}
      <section className="py-24 bg-rv-black relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* The Old Way */}
            <motion.div variants={fadeUp} className="p-10 rounded-[2rem] border border-rv-white/5 bg-rv-white/[0.02] space-y-6">
              <div className="w-12 h-12 rounded-full bg-rv-white/5 flex items-center justify-center mb-8">
                <Eye className="w-5 h-5 text-rv-white/40" />
              </div>
              <h2 className="text-3xl font-bold text-rv-white/50">The Old Way</h2>
              <p className="text-rv-white/40 text-lg leading-relaxed">
                A static photo gallery. It captures a single angle, heavily edited, leaving customers wondering what the rest of the space actually looks like.
              </p>
              <div className="h-40 w-full rounded-xl bg-rv-white/5 border border-rv-white/5 flex items-center justify-center">
                <p className="text-rv-white/20 font-mono text-sm">Static Image Gallery</p>
              </div>
            </motion.div>

            {/* The RealView Way */}
            <motion.div variants={fadeUp} className="p-10 rounded-[2rem] border border-rv-blue/30 bg-gradient-to-b from-rv-blue/[0.08] to-transparent space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rv-blue/20 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-rv-blue/20 flex items-center justify-center mb-8">
                  <MousePointerClick className="w-5 h-5 text-rv-blue" />
                </div>
                <h2 className="text-3xl font-bold text-rv-white">The Spatial Advantage</h2>
                <p className="text-rv-white/80 text-lg leading-relaxed">
                  A certified Google 360° Digital Twin. You remove the friction of the unknown by letting customers explore the atmosphere before they leave their house.
                </p>
                <div className="h-40 w-full rounded-xl border border-rv-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-110" />
                  <p className="text-rv-white font-medium z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          CHAPTER 3: The Interactive 360 Experience (The Hero)
          ==================================================== */}
      <section className="py-32 bg-[#050505] border-y border-rv-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Photos show a place. <br/>
            <span className="text-rv-white/40">Experiences let them step inside.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl text-rv-white/50 font-light"
          >
            Go ahead. Look around.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="w-full max-w-[85vw] mx-auto aspect-video rounded-[2rem] overflow-hidden relative border border-rv-white/20 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
        >
          <iframe
            src="https://www.rvmedia.vn/MaiHouseSaigon/"
            className="w-full h-full border-0"
            allowFullScreen
            title="Mai House Saigon Virtual Tour"
          />
          {/* Internal gradient to make it feel embedded */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] rounded-[2rem]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center mt-32 px-6"
        >
          <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8">
            Notice what just happened?
          </motion.h3>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-rv-white/50 font-light leading-relaxed mb-6">
            You stopped scrolling. You spent time exploring this space.
          </motion.p>
          <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium">
            That's exactly what your customers do.
          </motion.p>
        </motion.div>
      </section>

      {/* ====================================================
          CHAPTER 4: Value-Driven Call to Action
          ==================================================== */}
      <section className="py-32 bg-rv-black text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Every space has a story. <br/> Let's tell yours.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-rv-white/50 text-xl font-light mb-12 max-w-2xl mx-auto">
            Whether you manage luxury hospitality, real estate, or retail, we engineer the visual assets that convert digital views into real-world visits.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <MagneticButton>
              <Link href="/contact" className="flex items-center gap-3 bg-rv-white text-rv-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                <span>Book Your Digital Twin</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
            <Link href="/portfolio" className="text-rv-white/60 hover:text-rv-white transition-colors underline underline-offset-4 decoration-rv-white/20 hover:decoration-rv-white text-lg">
              View Our Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}