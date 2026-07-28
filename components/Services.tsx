'use client';

import { motion } from 'framer-motion';
import { Aperture, Map, BarChart3, ArrowRight, Search } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  return (
    <section id="services" className="py-32 bg-[#050505] px-6 relative overflow-hidden">
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

        {/* One connected discovery-to-trust service canvas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080a0f] lg:grid lg:grid-cols-5 lg:rounded-[3rem]"
        >
          <article className="relative overflow-hidden p-7 md:p-10 lg:col-span-3 lg:min-h-[39rem] lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(34,211,238,0.2),transparent_34%),linear-gradient(145deg,rgba(15,62,79,0.5),transparent_58%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-cyan-300/15 shadow-[0_0_0_40px_rgba(34,211,238,0.025),0_0_0_80px_rgba(34,211,238,0.018)]"
            />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-200/80">
                <Aperture className="h-5 w-5" aria-hidden="true" />
                {t('cinema.serviceName')}
              </div>
              <h3 className="mt-8 max-w-2xl text-4xl font-black tracking-tighter text-white md:text-5xl">
                {t('cinema.hook')}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                {t('cinema.desc')}
              </p>

              <div className="mt-10 flex flex-col gap-5 border-y border-cyan-200/10 py-6 sm:flex-row sm:gap-10">
                <div className="flex items-start gap-3">
                  <Map className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-white">{t('maps.hook')}</p>
                    <p className="mt-1 text-xs text-white/45">{t('maps.signal')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-white">{t('roi.hook')}</p>
                    <p className="mt-1 text-xs text-white/45">{t('roi.signal')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-auto">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080a0f]"
                >
                  {t('cinema.cta')} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-sm text-sm font-bold text-cyan-200 underline decoration-cyan-200/30 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t('roi.cta')}
                </Link>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden border-t border-white/10 p-7 md:p-10 lg:col-span-2 lg:min-h-[39rem] lg:border-l lg:border-t-0 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(139,92,246,0.2),transparent_36%),linear-gradient(155deg,rgba(37,42,92,0.48),transparent_62%)]"
            />
            <div
              aria-hidden="true"
              className="absolute right-8 top-8 font-mono text-[8rem] font-black leading-none text-violet-300/[0.035]"
            >
              ?
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-violet-200/80">
                <Search className="h-5 w-5" aria-hidden="true" />
                {t('ads.serviceName')}
              </div>
              <h3 className="mt-8 text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-4xl">
                {t('ads.hook')}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-white/65">
                {t('ads.desc')}
              </p>
              <ul className="mt-9 space-y-4 border-l border-violet-300/20 pl-5 text-sm text-white/60">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.45rem] top-1.5 h-2 w-2 rounded-full bg-violet-300 ring-4 ring-violet-300/10"
                    />
                    {t(`ads.signals.${index}`)}
                  </li>
                ))}
              </ul>
              <Link
                href="/google-ads-search"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/35 bg-violet-300/10 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-violet-200/70 hover:bg-violet-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 lg:mt-auto"
              >
                {t('ads.cta')} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <div className="pointer-events-none absolute left-[60%] top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="rounded-full border border-white/15 bg-[#0b0d14] px-4 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/55 shadow-xl">
              {t('connector')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
