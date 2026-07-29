'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import DeferredIframe from './DeferredIframe';

const OAKWOOD_TOUR_URL = 'https://www.rvmedia.vn/OakwoodResidence/';

export default function Experience360() {
  const t = useTranslations('Experience360');

  return (
    <section className="bg-[#050505] px-6 pb-24 pt-12 text-white md:pb-32 md:pt-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-3xl font-bold leading-[0.98] tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="block">{t('sectionHeading')}</span>
            <span className="block text-[#65a0ff]">{t('sectionHeadingHighlight')}</span>
          </motion.h2>

          <div className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#65a0ff]/30 bg-[#071a35]/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_18px_rgba(20,104,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#65a0ff] opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1468ff]" />
            </span>
            {t('liveTour')}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] shadow-2xl md:aspect-[2/1]"
        >
          <DeferredIframe
            src={OAKWOOD_TOUR_URL}
            title={t('iframeTitle')}
            loading="lazy"
            allow="fullscreen; autoplay; xr-spatial-tracking"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />

          <a
            href={OAKWOOD_TOUR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-[#65a0ff]/60 bg-[#071a35]/90 px-4 py-2.5 text-xs font-bold text-white shadow-[0_0_18px_rgba(20,104,255,0.45)] backdrop-blur-xl transition duration-300 hover:border-white hover:bg-[#1468ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] md:bottom-6 md:right-6 md:px-5 md:py-3 md:text-sm motion-reduce:transition-colors"
          >
            {t('openFullTour')}
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
