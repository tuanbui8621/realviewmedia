'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const OAKWOOD_TOUR_URL = 'https://www.rvmedia.vn/OakwoodResidence/';

export default function Experience360() {
  const t = useTranslations('Experience360');

  return (
    <section className="bg-[#050505] px-6 py-24 text-white md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 border-b border-white/10 pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-4xl font-bold leading-[0.92] tracking-tight sm:text-[2.75rem] md:text-5xl lg:text-6xl"
          >
            {t('sectionHeading')}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] shadow-2xl md:aspect-[2/1]"
        >
          <iframe
            src={OAKWOOD_TOUR_URL}
            title={t('iframeTitle')}
            loading="lazy"
            allow="fullscreen; autoplay; xr-spatial-tracking"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />

          <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-md md:left-6 md:top-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#65a0ff] opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1468ff]" />
            </span>
            {t('liveTour')}
          </div>

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
