'use client';

import { motion } from 'framer-motion';
import { Aperture, ArrowUpRight, BarChart3, Map, Search } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="relative overflow-hidden bg-[#f3f1ea] px-6 py-24 text-[#07111f] md:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-black/10" />
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl"
          >
            {t('sectionHeading')}
            <span className="block text-[#1468ff]">{t('sectionHighlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-xl text-base leading-relaxed text-black/60 lg:ml-auto lg:text-lg"
          >
            {t('sectionDesc')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="relative"
        >
          <article className="group grid border-b border-black/15 py-10 md:py-14 lg:grid-cols-[7rem_1.2fr_0.8fr_auto] lg:items-center lg:gap-10">
            <span className="mb-6 font-mono text-xs font-bold tracking-[0.2em] text-[#1468ff] lg:mb-0">01 / 02</span>
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                <Aperture className="h-5 w-5 text-[#1468ff]" aria-hidden="true" />
                {t('cinema.serviceName')}
              </div>
              <h3 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.045em] md:text-6xl">
                {t('cinema.hook')}
              </h3>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="max-w-md text-sm leading-relaxed text-black/60 md:text-base">{t('cinema.desc')}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-black/55">
                <span className="inline-flex items-center gap-2"><Map className="h-4 w-4 text-[#1468ff]" />{t('maps.hook')}</span>
                <span className="inline-flex items-center gap-2"><BarChart3 className="h-4 w-4 text-[#1468ff]" />{t('roi.hook')}</span>
              </div>
            </div>
            <Link
              href="/experience"
              aria-label={t('cinema.cta')}
              className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-black/20 transition-all hover:border-[#1468ff] hover:bg-[#1468ff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1468ff] lg:mt-0"
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>

          <article className="group grid py-10 md:py-14 lg:grid-cols-[7rem_1.2fr_0.8fr_auto] lg:items-center lg:gap-10">
            <span className="mb-6 font-mono text-xs font-bold tracking-[0.2em] text-[#1468ff] lg:mb-0">02 / 02</span>
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                <Search className="h-5 w-5 text-[#1468ff]" aria-hidden="true" />
                {t('ads.serviceName')}
              </div>
              <h3 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.045em] md:text-6xl">
                {t('ads.hook')}
              </h3>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="max-w-md text-sm leading-relaxed text-black/60 md:text-base">{t('ads.desc')}</p>
              <p className="mt-6 border-l-2 border-[#1468ff] pl-4 text-xs font-bold uppercase tracking-[0.14em] text-black/50">
                {t('connector')}
              </p>
            </div>
            <Link
              href="/google-ads-search"
              aria-label={t('ads.cta')}
              className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#1468ff] text-white transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1468ff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3f1ea] lg:mt-0"
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        </motion.div>

        <div className="flex flex-wrap gap-6 border-t border-black/15 pt-8 text-sm font-bold">
          <Link href="/portfolio" className="underline decoration-black/25 underline-offset-4 hover:decoration-[#1468ff]">
            {t('roi.cta')}
          </Link>
          <Link href="/google-ads-search" className="text-[#1468ff] underline decoration-[#1468ff]/25 underline-offset-4">
            {t('ads.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
