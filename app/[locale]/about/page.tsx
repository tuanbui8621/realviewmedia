'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Eye, Map, BarChart3, Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

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

  // Define the pillars using the translated keys
  const pillars = [
    { 
      icon: Eye, 
      title: t('Pillars.item1.title'), 
      desc: t('Pillars.item1.desc'),
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'group-hover:border-blue-500/30'
    },
    { 
      icon: Map, 
      title: t('Pillars.item2.title'), 
      desc: t('Pillars.item2.desc'),
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'group-hover:border-orange-500/30'
    },
    { 
      icon: BarChart3, 
      title: t('Pillars.item3.title'), 
      desc: t('Pillars.item3.desc'),
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'group-hover:border-emerald-500/30'
    }
  ];

  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white overflow-hidden">
      <Navbar />

      {/* CHAPTER 1: Hero */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.p variants={fadeUp} className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
              {t('Hero.tagline')}
            </motion.p>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              {t('Hero.headingLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {t('Hero.headingHighlight')}
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              {t('Hero.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 2: Story */}
      <section className="py-24 px-6 border-y border-white/10 bg-[#0a0a0c] relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter">
                {t('Story.headingLine1')} <br/>
                <span className="text-white/40">{t('Story.headingHighlight')}</span>
              </motion.h2>
              
              <motion.div variants={fadeUp} className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>{t('Story.paragraph1')}</p>
                <p>{t('Story.paragraph2')}</p>
                <p className="text-white font-medium border-l-2 border-blue-500 pl-4">
                  {t('Story.paragraph3')}
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3rem] bg-[#0a0a0c] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] group"
            >
              <motion.div 
                className="absolute inset-y-0 left-0 h-full w-[200%] bg-[url('/images/mai.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                animate={{ x: ["0%", "-50%", "0%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-10">
                <div>
                  <div className="w-12 h-12 bg-black/60 backdrop-blur-xl rounded-xl border border-white/20 flex items-center justify-center mb-4 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                    <Globe2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                    {t('Story.badge1')}<br/>{t('Story.badge2')}
                  </h3>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="relative flex h-3 w-3 mb-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">360°</span>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CHAPTER 3: Pillars */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 text-white">
              {t('Pillars.sectionTitle')}
            </h2>
            <p className="text-white/50 text-lg">
              {t('Pillars.sectionDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/5 ${pillar.border} transition-all duration-500 group flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}