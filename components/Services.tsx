'use client';

import { motion } from 'framer-motion';
import { Aperture, Map, BarChart3, ArrowRight, Search } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      {/* Background glow for tech feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* The Hook (Header) */}
        <div className="max-w-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6"
          >
            {t('sectionHeading')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {t('sectionHighlight')}
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg font-medium leading-relaxed"
          >
            {t('sectionDesc')}
          </motion.p>
        </div>

        {/* Connected service system */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Primary service: 360° virtual tours */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0c] p-7 md:p-10 lg:col-span-3 lg:rounded-[3rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.12),transparent_36%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  <Aperture className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-blue-300/70">
                  {t('cinema.eyebrow')}
                </span>
              </div>
              <h3 className="max-w-2xl text-3xl font-black tracking-tighter text-white lg:text-4xl">
                {t('cinema.title')}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                {t('cinema.desc')}
              </p>
              <Link
                href="/experience"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0c]"
              >
                {t('cinema.cta')} <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 lg:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.025] p-5">
                  <Map className="mb-4 h-6 w-6 text-orange-300" aria-hidden="true" />
                  <h4 className="text-sm font-bold text-white">{t('maps.title')}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {t('maps.desc')}
                  </p>
                  <p className="mt-4 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-orange-300/70">
                    {t('maps.status')}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.025] p-5">
                  <BarChart3 className="mb-4 h-6 w-6 text-emerald-300" aria-hidden="true" />
                  <h4 className="text-sm font-bold text-white">{t('roi.title')}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {t('roi.desc')}
                  </p>
                  <Link
                    href="/portfolio"
                    className="mt-4 inline-flex rounded-sm text-xs font-bold text-emerald-300 underline decoration-emerald-300/30 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t('roi.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Connected service: Google Ads Search */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative flex overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-[#080d16] p-7 md:p-9 lg:col-span-2 lg:rounded-[3rem] lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.16),transparent_40%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex min-h-full flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-400/10 text-blue-300">
                <Search className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-8 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-blue-300/70">
                {t('ads.eyebrow')}
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tighter text-white lg:text-4xl">
                {t('ads.title')}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                {t('ads.desc')}
              </p>
              <Link
                href="/google-ads-search"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-blue-300/60 hover:bg-blue-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 md:mt-auto md:translate-y-0"
              >
                {t('ads.cta')} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
