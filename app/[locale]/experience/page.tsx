'use client';

import { motion, type Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import { Link } from '@/navigation';
import { ArrowRight, MapPin, Navigation, Images, Orbit, Menu, Mic, Bookmark, Share2, PhoneCall } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ExperiencePage() {
  const t = useTranslations('ExperiencePage');
  // Shared animation settings for consistent pacing
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
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
    <div className="relative bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white overflow-hidden">
      <Navbar />
      <main>

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
            {t('Hero.tagline')}
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            {t('Hero.h1_line1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/80">{t('Hero.h1_span')}</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 pt-12 text-xl md:text-3xl font-light text-white/60">
            <p>{t('Hero.status_search')}</p>
            <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
            <p>{t('Hero.status_compare')}</p>
            <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
            <p className="text-white font-medium">{t('Hero.status_hesitate')}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          CHAPTER 2: The Comparison (Visual Hook)
          ==================================================== */}
      <section className="py-24 bg-[#050505] relative z-10">
        <h2 className="sr-only">{t('Comparison.heading')}</h2>
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
              
              {/* Premium Icon Badge: Flat Images */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-110">
                <Images className="w-7 h-7 text-white/50" strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10 mb-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{t('Comparison.card1_title')}</h3>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  {t('Comparison.card1_desc')}
                </p>
              </div>

              {/* Vertical Mobile Phone Mockup (Authentic Google Maps - Static) */}
              <div className="mx-auto w-[230px] h-[430px] rounded-[2.5rem] border-[6px] border-[#1a1b1e] bg-[#f0f2f5] relative overflow-hidden shadow-2xl transition-all duration-500 shrink-0 opacity-90 group-hover:opacity-100 grayscale-[20%]">
                
                {/* Dynamic Island / Hardware Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1b1e] rounded-b-xl z-50"></div>

                {/* Vector Map Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-0 w-32 h-64 bg-[#aadaff] rounded-l-full blur-md opacity-60" /> {/* Fake River */}
                  <div className="absolute -top-10 bottom-0 left-1/2 w-3 bg-[#ffffff] shadow-sm transform -rotate-12" /> {/* Main Road */}
                  <div className="absolute top-1/2 left-0 right-0 h-3 bg-[#ffffff] shadow-sm transform rotate-6" /> {/* Cross Road */}
                </div>
                
                {/* Authentic Search Bar */}
                <div className="absolute top-8 left-3 right-3 bg-white rounded-full h-10 shadow-md flex items-center px-3 z-40 gap-2">
                  <Menu size={16} className="text-gray-600 shrink-0" />
                  <span className="flex-1 text-[11px] font-medium text-gray-800 truncate">{t('Comparison.card1_name')}</span>
                  <Mic size={14} className="text-gray-600 shrink-0" />
                </div>

                {/* Map Pin */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-[#EA4335] drop-shadow-md">
                  <MapPin size={32} fill="currentColor" strokeWidth={1} />
                </div>

                {/* Authentic Bottom Sheet */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[1.5rem] pt-2 pb-6 px-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                  {/* Pull Handle */}
                  <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  
                  <p className="text-gray-900 font-medium text-[15px] leading-tight truncate">{t('Comparison.card1_name')}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{t('Comparison.card1_category')}</p>
                  
                  {/* Reviews */}
                  <div className="flex items-center text-[11px] mt-1 mb-3">
                    <span className="text-gray-500">{t('Comparison.card1_summary')}</span>
                  </div>
                  
                  {/* Action Buttons Row */}
                  <div className="flex justify-between items-start gap-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-[#0b57d0] flex items-center justify-center text-white">
                        <Navigation size={16} fill="currentColor"/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.directions')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <Bookmark size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.save')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <PhoneCall size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.call')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <Share2 size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.share')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: The RealView Way (Google Maps Mobile UI Mockup) */}
            <motion.div variants={fadeUp} className="group p-8 md:p-10 rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-[#0a0a0c] to-[#0a1220] flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.05)]">
              {/* Glowing Orb Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
              
              {/* Premium Icon Badge: Orbit/360 */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px] shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-full h-full bg-[#0a0a0c] rounded-[15px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/20" />
                  <Orbit className="w-8 h-8 text-blue-400 relative z-10" />
                  {/* Subtle sweep animation on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </div>
              </div>

              <div className="relative z-10 mb-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{t('Comparison.card2_title')}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  {t('Comparison.card2_desc')}
                </p>
              </div>

              {/* Vertical Mobile Phone Mockup (Authentic Google Maps - 360 View) */}
              <div className="mx-auto w-[230px] h-[430px] rounded-[2.5rem] border-[6px] border-[#1a1b1e] bg-[#f0f2f5] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 shrink-0">
                
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1b1e] rounded-b-xl z-50"></div>

                {/* Vector Map Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-0 w-32 h-64 bg-[#aadaff] rounded-l-full blur-md opacity-60" />
                  {/* Street View Path (The Blue Line indicator) */}
                  <div className="absolute -top-10 bottom-0 left-1/2 w-3 bg-[#ffffff] shadow-sm transform -rotate-12">
                    <div className="absolute inset-0 mx-auto w-1.5 bg-[#1a73e8]/80 shadow-[0_0_5px_rgba(26,115,232,0.8)]" />
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 h-3 bg-[#ffffff] shadow-sm transform rotate-6" />
                </div>
                
                {/* Authentic Search Bar */}
                <div className="absolute top-8 left-3 right-3 bg-white rounded-full h-10 shadow-md flex items-center px-3 z-40 gap-2">
                  <Menu size={16} className="text-gray-600 shrink-0" />
                  <span className="flex-1 text-[11px] font-medium text-gray-800 truncate">{t('Comparison.card2_name')}</span>
                  <Mic size={14} className="text-gray-600 shrink-0" />
                </div>

                {/* Map Pin (Bouncing) */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-[#EA4335] drop-shadow-xl animate-bounce">
                  <MapPin size={32} fill="currentColor" strokeWidth={1} />
                </div>

                {/* HIGHLIGHT PULSE */}
                <div className="absolute top-[42%] left-[10%] w-16 h-16 z-30 pointer-events-none">
                  <span className="absolute inset-0 rounded-xl bg-blue-500 animate-ping opacity-60 duration-1000"></span>
                </div>

                {/* THE AUTHENTIC 360 THUMBNAIL ON MAP */}
                <div className="absolute top-[42%] left-[10%] w-16 h-16 rounded-xl border-2 border-white bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400')] bg-cover bg-center z-40 shadow-lg cursor-pointer group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                   {/* Google Maps 360 Circular Arrow Icon */}
                   <div className="bg-black/50 backdrop-blur-sm w-7 h-7 rounded-full flex items-center justify-center border border-white/30 shadow-md">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12c0-3.31 4.03-6 9-6s9 2.69 9 6-4.03 6-9 6c-1.55 0-3.02-.27-4.3-.75" />
                        <path d="M7 17l.7-3.3-3.3.7" />
                     </svg>
                   </div>
                </div>

                {/* Authentic Bottom Sheet */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[1.5rem] pt-2 pb-6 px-4 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  
                  <p className="text-gray-900 font-medium text-[15px] leading-tight truncate">{t('Comparison.card2_name')}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{t('Comparison.card2_category')}</p>
                  
                  {/* Reviews */}
                  <div className="flex items-center text-[11px] mt-1 mb-3">
                    <span className="text-gray-500">{t('Comparison.card2_summary')}</span>
                  </div>
                  
                  {/* Action Buttons Row */}
                  <div className="flex justify-between items-start gap-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full bg-[#0b57d0] flex items-center justify-center text-white">
                        <Navigation size={16} fill="currentColor"/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.directions')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <Bookmark size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.save')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <PhoneCall size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.call')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#0b57d0]">
                        <Share2 size={14}/>
                      </div>
                      <span className="text-[#0b57d0] text-[9px] font-medium">{t('Comparison.actions.share')}</span>
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
            {t('Interactive360.h2_line1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{t('Interactive360.h2_span')}</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl text-white/50 font-medium tracking-wide uppercase"
          >
            {t('Interactive360.hint')}
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
            title={t('Interactive360.iframe_title')}
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
            {t('Interactive360.p1')}
          </motion.h3>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-6">
            {t('Interactive360.p2')}
          </motion.p>
          <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-medium">
            {t('Interactive360.p3')}
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
            {t('CTA.h2')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('CTA.p1')}{' '}
            <Link href="/contact" className="underline decoration-white/30 underline-offset-4 hover:text-white transition-colors">
              {t('CTA.contact')}
            </Link>
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex justify-center items-center mt-12">
            <MagneticButton>
              <Link 
                href="/portfolio" 
                className="group flex items-center gap-3 text-xl font-bold text-white transition-all duration-300"
              >
                <span className="border-b-2 border-white/20 group-hover:border-white transition-colors pb-1">
                  {t('CTA.btn')}
                </span>
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
