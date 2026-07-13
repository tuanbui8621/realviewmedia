'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, ImageIcon, Maximize, MapPin, X, Navigation } from 'lucide-react';

export default function ExperiencePage() {
  // Shared animation settings for consistent pacing
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any
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
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white overflow-hidden">
      <Navbar />

      {/* ====================================================
          CHAPTER 1: The Hook (Hero)
          ==================================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-[#050505] to-[#050505]" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto space-y-6"
        >
          <motion.p variants={fadeUp} className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-8 font-bold">
            The Reality of Digital Choice
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            Someone is deciding <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/80">whether to visit right now.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 pt-12 text-xl md:text-3xl font-light text-white/60">
            <p>They search.</p>
            <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
            <p>They compare.</p>
            <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
            <p className="text-white font-medium">They hesitate.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          CHAPTER 2: The Comparison (Visual Hook)
          ==================================================== */}
      <section className="py-24 bg-[#050505] relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 items-stretch"
          >
            {/* CARD 1: The Old Way (Standard Maps Mockup) */}
            <motion.div variants={fadeUp} className="group p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#0a0a0c] flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110">
                <ImageIcon className="w-6 h-6 text-white/40" />
              </div>
              
              <div className="relative z-10 mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Just another pin on the map.</h2>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  Customers see a handful of photos, hesitate, and move on because they can't truly understand your space.
                </p>
              </div>

              {/* Vertical Mobile Phone Mockup (STATIC / NO 360) */}
              <div className="mx-auto w-[210px] h-[410px] rounded-[2rem] border-[4px] border-[#1a1b1e] bg-black relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 shrink-0 opacity-90 group-hover:opacity-100 grayscale-[20%]">
                
                {/* Dynamic Island / Hardware Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1b1e] rounded-b-xl z-50"></div>

                {/* Satellite Map Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                
                {/* Fake Search Bar */}
                <div className="absolute top-6 left-3 right-3 bg-white text-black text-[10px] font-medium px-3 py-2 rounded-full shadow-md flex justify-between items-center z-40">
                  <span className="truncate mr-2">Victory Hotel Saigon</span>
                  <X size={12} className="text-gray-400 shrink-0" />
                </div>

                {/* Map Pin (Centered, NO bounce animation to look static) */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-red-500 drop-shadow-lg">
                  <MapPin size={28} fill="currentColor" />
                </div>

                {/* NOTE: No 360 Thumbnail Here to show the contrast */}

                {/* Fake Bottom Sheet (Property Details) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-3.5 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
                  {/* Pull Handle */}
                  <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto mb-2.5"></div>
                  
                  <h4 className="text-black font-bold text-[13px] leading-tight truncate">Victory Hotel Saigon</h4>
                  <p className="text-gray-500 text-[9px] mt-0.5">Khách sạn Victory</p>
                  
                  {/* Reviews */}
                  <div className="flex items-center text-yellow-500 text-[10px] mt-1 mb-2.5">
                    <span className="text-gray-800 font-medium mr-1">4.1</span>
                    ★★★★☆ 
                    <span className="text-gray-500 ml-1 font-medium">(1,204)</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-1.5 mt-2">
                    <div className="flex-1 bg-[#0b57d0] text-white rounded-full py-1.5 flex items-center justify-center text-[10px] font-bold gap-1 shadow-md">
                      <Navigation size={10} fill="currentColor"/> Directions
                    </div>
                    <div className="flex-1 bg-blue-50 text-[#0b57d0] rounded-full py-1.5 flex items-center justify-center text-[10px] font-bold">
                      Start
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* CARD 2: The RealView Way (Google Maps Mobile UI Mockup) */}
            <motion.div variants={fadeUp} className="group p-8 md:p-10 rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-[#0a0a0c] to-[#0a1220] flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.05)]">
              {/* Glowing Orb Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Maximize className="w-6 h-6 text-blue-400" />
              </div>

              <div className="relative z-10 mb-10">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Step Inside Before They Arrive</h2>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  An interactive 360° tour lets customers explore every corner of your business directly from Google Maps, building trust before they even walk through your door.
                </p>
              </div>

              {/* Sleeker Vertical Mobile Phone Mockup */}
              <div className="mx-auto w-[210px] h-[410px] rounded-[2rem] border-[4px] border-[#1a1b1e] bg-black relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 shrink-0">
                
                {/* Dynamic Island / Hardware Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1b1e] rounded-b-xl z-50"></div>

                {/* Satellite Map Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
                
                {/* Fake Search Bar */}
                <div className="absolute top-6 left-3 right-3 bg-white text-black text-[10px] font-medium px-3 py-2 rounded-full shadow-lg flex justify-between items-center z-40">
                  <span className="truncate mr-2">Mai House Saigon Hotel</span>
                  <X size={12} className="text-gray-400 shrink-0" />
                </div>

                {/* Map Pin (Centered & Bouncing) */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-red-500 drop-shadow-2xl animate-bounce">
                  <MapPin size={28} fill="currentColor" />
                </div>

                {/* HIGHLIGHT PULSE (Placed behind the thumbnail) */}
                <div className="absolute top-[48%] left-3 w-14 h-14 z-30">
                  <span className="absolute inset-0 rounded-lg bg-blue-500 animate-ping opacity-60 duration-1000"></span>
                  <span className="absolute inset-0 rounded-lg bg-blue-400 opacity-40 blur-md"></span>
                </div>

                {/* THE AUTHENTIC 360 THUMBNAIL */}
                <div className="absolute top-[48%] left-3 w-14 h-14 rounded-lg border-[1.5px] border-white bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400')] bg-cover bg-center z-40 shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer group-hover:scale-105 transition-transform duration-300 flex items-end justify-start p-1">
                   {/* Custom 3D Orbit Icon Overlay */}
                   <div className="bg-black/70 backdrop-blur-md w-[22px] h-[22px] rounded-full flex items-center justify-center border border-white/20 shadow-lg relative z-10">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12c0-3.31 4.03-6 9-6s9 2.69 9 6-4.03 6-9 6c-1.55 0-3.02-.27-4.3-.75" />
                        <path d="M7 17l.7-3.3-3.3.7" />
                     </svg>
                   </div>
                </div>

                {/* Fake Bottom Sheet (Property Details) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-3.5 z-40 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Pull Handle */}
                  <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto mb-2.5"></div>
                  
                  <h4 className="text-black font-bold text-[13px] leading-tight truncate">Mai House Saigon Hotel</h4>
                  <p className="text-gray-500 text-[9px] mt-0.5">Khách sạn Mai House Saigon</p>
                  
                  {/* Reviews */}
                  <div className="flex items-center text-yellow-500 text-[10px] mt-1 mb-1.5">
                    <span className="text-gray-800 font-medium mr-1">4.8</span>
                    ★★★★★ 
                    <span className="text-gray-500 ml-1 font-medium">(3,359)</span>
                  </div>

                  {/* Deal Badge */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="bg-[#e6f4ea] text-[#137333] text-[8px] font-bold px-1.5 py-0.5 rounded">DEAL</span>
                    <span className="text-gray-600 text-[9px]">17% off</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-1.5">
                    <div className="flex-1 bg-[#0b57d0] text-white rounded-full py-1.5 flex items-center justify-center text-[10px] font-bold gap-1 shadow-md">
                      <Navigation size={10} fill="currentColor"/> Directions
                    </div>
                    <div className="flex-1 bg-blue-50 text-[#0b57d0] rounded-full py-1.5 flex items-center justify-center text-[10px] font-bold">
                      Start
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ====================================================
          CHAPTER 3: The Interactive 360 Experience (The Hero)
          ==================================================== */}
      <section className="py-32 bg-[#050505] border-y border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6"
          >
            Photos show a place. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Experiences let them step inside.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl text-white/50 font-medium tracking-wide uppercase"
          >
            Go ahead. Look around.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="w-full max-w-[85vw] mx-auto aspect-video rounded-[2rem] overflow-hidden relative border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
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
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-6">
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
      <section className="py-32 bg-[#050505] text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Every space has a story. <br/> Let's tell yours.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you manage luxury hospitality, real estate, or retail, we engineer the visual assets that convert digital views into real-world visits.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex justify-center items-center mt-12">
  <MagneticButton>
    <Link 
      href="/portfolio" 
      className="group flex items-center gap-3 text-xl font-bold text-white transition-all duration-300"
    >
      <span className="border-b-2 border-white/20 group-hover:border-white transition-colors pb-1">
        View Our Portfolio
      </span>
      <div className="bg-white/10 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
    </Link>
  </MagneticButton>
</motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}