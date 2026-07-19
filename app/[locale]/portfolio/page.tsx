'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';
import Image from 'next/image';
import { ArrowRight, MapPin, X, Eye, MousePointer2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

// Fast local database for portfolio
const portfolioProjects = [
  {
    id: 'mai_house' as const,
    image: '/images/mai.jpg', 
    embedUrl: 'https://www.rvmedia.vn/MaiHouseSaigon/'
  },
  {
    id: 'oakwood' as const,
    image: '/images/oakwood.png', 
    embedUrl: 'https://www.rvmedia.vn/OakwoodResidence/'
  },
  {
    id: 'lavilla' as const,
    image: '/images/lavilla.jpg', 
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1783502755453!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGJ0cXk4Umc.!2m2!1d10.80392931471131!2d106.7330403859467!3f252.06813083339418!4f-3.775974010641903!5f0.4000000000000002' 
  },
  {
    id: 'aqua_clinic' as const,
    image: '/images/aqua.jpg', 
    // FIXED: Removed the accidental "style" text at the very end of the URL
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1783584586663!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzNsb1RuOWdF!2m2!1d10.7681740406786!2d106.6966090367288!3f1.2644489026167998!4f-0.36507161825656453!5f0.7820865974627469'
  }
];

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<typeof portfolioProjects[0] | null>(null);
  const t = useTranslations('PortfolioPage');
  const projectCopy = {
    mai_house: {
      title: t('Projects.mai_house.title'),
      category: t('Projects.mai_house.cat'),
      location: t('Projects.mai_house.location'),
      format: t('Projects.mai_house.format'),
      alt: t('Projects.mai_house.alt'),
    },
    oakwood: {
      title: t('Projects.oakwood.title'),
      category: t('Projects.oakwood.cat'),
      location: t('Projects.oakwood.location'),
      format: t('Projects.oakwood.format'),
      alt: t('Projects.oakwood.alt'),
    },
    lavilla: {
      title: t('Projects.lavilla.title'),
      category: t('Projects.lavilla.cat'),
      location: t('Projects.lavilla.location'),
      format: t('Projects.lavilla.format'),
      alt: t('Projects.lavilla.alt'),
    },
    aqua_clinic: {
      title: t('Projects.aqua_clinic.title'),
      category: t('Projects.aqua_clinic.cat'),
      location: t('Projects.aqua_clinic.location'),
      format: t('Projects.aqua_clinic.format'),
      alt: t('Projects.aqua_clinic.alt'),
    },
  };
  const activeCopy = activeProject ? projectCopy[activeProject.id] : null;

  return (
    <div className="relative bg-rv-black min-h-screen text-rv-white selection:bg-rv-blue/30">
      <Navbar />
      <main>

      {/* 1. Hero Section */}
      <section className="pt-48 pb-12 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          {t('Hero.title')}<br />
          <span className="text-rv-white/30">{t('Hero.titleHighlight')}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-2xl text-rv-white/60 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {t('Hero.subtitle')}
        </motion.p>
      </section>

      {/* 2. Fast-Loading Portfolio Grid (The Facade Pattern) */}
      <section className="py-20 px-6 relative z-10">
        <h2 className="sr-only">{t('Projects.heading')}</h2>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioProjects.map((project, i) => {
              const copy = projectCopy[project.id];

              return (
                <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer bg-[#111] border border-rv-white/10"
              >
                {/* Static Cover Image (Removed the 80% opacity so it is fully bright) */}
                <Image 
                  src={project.image}
                  alt={copy.alt}
                  fill
                  sizes="(min-width: 768px) 900px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Gradient Overlay (Lightened the middle so it doesn't darken the whole image) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity duration-500" />
                
                <button
                  type="button"
                  className="absolute inset-0 w-full p-8 flex flex-col justify-between text-left"
                  onClick={() => setActiveProject(project)}
                  aria-label={t('Accessibility.openProject', { title: copy.title })}
                >
                  <div className="flex justify-between items-start">

                    <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-rv-blue border border-white/10 uppercase tracking-widest">
                      {copy.category}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className="text-white w-5 h-5 -rotate-45" />
                    </div>
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2">{copy.title}</h3>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1"><MapPin width={14} height={14} /> {copy.location}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="flex items-center gap-1 text-rv-blue"><Eye width={14} height={14} /> {copy.format}</span>
                    </div>
                  </div>
                </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The Fullscreen Immersive Modal */}
      <AnimatePresence>
        {activeProject && activeCopy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={t('Accessibility.iframeTitle', { title: activeCopy.title })}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              aria-label={t('Accessibility.closeTour')}
              className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full h-full max-w-7xl relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a]">
              
              {/* Loading State Behind the Iframe */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50 z-0">
                <span className="animate-pulse flex items-center gap-2">
                  {t('Modal.loading')}
                </span>
              </div>

              {/* The Actual Google Embed */}
              <iframe 
                src={activeProject.embedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full relative z-10"
                title={t('Accessibility.iframeTitle', { title: activeCopy.title })}
              ></iframe>

              {/* Interaction Hint */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full pointer-events-none flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                   <MousePointer2 className="w-4 h-4 text-white animate-pulse" />
                </div>
                <p className="text-sm font-light text-white tracking-wide">
                   {t('Modal.hint', { title: activeCopy.title })}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Production Call to Action Block */}
      <section className="py-32 px-6 bg-rv-blue relative overflow-hidden text-center mt-20">
        <div className="relative z-10 container mx-auto max-w-2xl flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
          >
            {t('CTA.h2')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/90 text-xl font-medium mb-2">
              {t('CTA.p1')}
            </p>
            <p className="text-white/60 text-lg">
              {t.rich('CTA.p2', {
                experience: (chunks) => (
                  <Link href="/experience" className="underline decoration-white/30 underline-offset-4 hover:text-white transition-colors">
                    {chunks}
                  </Link>
                ),
                contact: (chunks) => (
                  <Link href="/contact" className="underline decoration-white/30 underline-offset-4 hover:text-white transition-colors">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
