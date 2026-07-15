'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function CtaSection() {
  const t = useTranslations('CTA');
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505] border-t border-white/10">
      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg mb-4"
        >
          {t('subtitle')}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-16 max-w-2xl"
        >
          {t('heading')} <br /> {t('headingHighlight')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-center justify-center md:justify-start"
        >
          {/* Primary Zalo CTA - Using Zalo Deep Link Scheme */}
          <MagneticButton>
            <a 
              href="zalo://conversation?phone=0966888782" 
              className="group flex items-center gap-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-colors duration-300" />
                <svg viewBox="0 0 100 100" className="w-[100px] h-[100px] relative z-10 drop-shadow-2xl">
                  <circle cx="50" cy="50" r="50" fill="#ffffff" />
                  <path fill="#0068FF" d="M76.7,35C72,27.1,61.8,21.8,50.1,21.8c-17.6,0-31.9,12.3-31.9,27.5c0,8.6,4.5,16.4,11.5,21.6 c-1.2,3.8-3.8,7.1-4,7.3c-0.2,0.3-0.2,0.7,0,1c0.2,0.3,0.5,0.4,0.9,0.3c6.8-3.1,10.7-7.4,12.7-9.8c3.5,1.2,7.2,1.8,11.1,1.8 c17.6,0,31.9-12.3,31.9-27.5C82.2,42.5,80.3,38.3,76.7,35z" />
                  <text x="50.5" y="55.5" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" textAnchor="middle" letterSpacing="-0.5">Zalo</text>
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors text-left">{t('zaloLabel')}<br/>{t('zaloLabelMobile')}</span>
            </a>
          </MagneticButton>

          {/* Secondary Messenger CTA */}
          <MagneticButton>
            <a 
              href="https://m.me/realviewmediavn" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#0084FF]/20 blur-xl rounded-full group-hover:bg-[#0084FF]/40 transition-colors duration-300" />
                <svg viewBox="0 0 36 36" className="w-[100px] h-[100px] relative z-10 drop-shadow-2xl">
                  <defs>
                    <linearGradient id="messenger-grad" x1="18" y1="36" x2="18" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#006AFF" offset="0%"/>
                      <stop stopColor="#9C27B0" offset="40%"/>
                      <stop stopColor="#FF6B93" offset="100%"/>
                    </linearGradient>
                  </defs>
                  <path d="M18 0C8.06 0 0 7.6 0 17c0 5.37 2.68 10.15 6.84 13.3V36l6.18-3.41c1.6.44 3.26.68 5 .68 9.94 0 18-7.6 18-17S27.94 0 18 0zm1.88 22.53l-4.79-5.11-9.35 5.11 10.28-10.9 4.88 5.11 9.27-5.12-10.29 10.91z" fill="url(#messenger-grad)"/>
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors text-left">{t('messengerLabel')}<br/>{t('messengerLabelMobile')}</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}