'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Aperture, ArrowUpRight, MapPin, MousePointer2, Search } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const industries = ['hospitality', 'property', 'food', 'wellness', 'retail', 'education', 'industrial'] as const;

export default function Services() {
  const t = useTranslations('Services');
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden bg-[#050608] px-6 py-24 text-white md:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-20 h-[34rem] w-[54rem] max-w-full -translate-x-1/2 rounded-full bg-[#1468ff]/10 blur-[130px]" />

      <div className="container relative mx-auto max-w-7xl">
        <div className="border-b border-white/10 pb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] md:text-7xl"
          >
            {t('sectionHeading')}
            <span className="block text-[#65a0ff]">{t('sectionHighlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/60 lg:text-lg"
          >
            {t('sectionDesc')}
          </motion.p>
        </div>

        <ul className="flex flex-wrap gap-2 border-b border-white/10 py-7" aria-label={t('industriesLabel')}>
          {industries.map((industry) => (
            <li key={industry} className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/55 transition-colors hover:border-[#65a0ff]/60 hover:text-white">
              {t(`industries.${industry}`)}
            </li>
          ))}
        </ul>

        <div className="relative mt-14 overflow-hidden border-y border-white/15 bg-[#080c14]">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[8%] right-[8%] top-[5.15rem] hidden h-px origin-left bg-gradient-to-r from-[#65a0ff] via-[#1468ff] to-[#65a0ff] lg:block"
          />

          <ol className="grid lg:grid-cols-3">
            <motion.li
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#65a0ff]">01</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/30 bg-[#0a1220] text-[#65a0ff] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 motion-reduce:transform-none">
                  <Aperture aria-hidden="true" className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/35">{t('journey.capture.eyebrow')}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.035em]">{t('journey.capture.title')}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/55">{t('journey.capture.description')}</p>
            </motion.li>

            <li className="relative border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#65a0ff]">02</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/30 bg-[#0a1220] text-[#65a0ff]">
                  <MapPin aria-hidden="true" className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/35">{t('journey.discovery.eyebrow')}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.035em]">{t('journey.discovery.title')}</h3>

              <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                <div className="group/channel flex gap-4 py-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#65a0ff] transition-transform group-hover/channel:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold">{t('journey.discovery.maps.title')}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/45">{t('journey.discovery.maps.description')}</p>
                  </div>
                </div>
                <div className="group/channel flex gap-4 py-5">
                  <Search className="mt-0.5 h-5 w-5 shrink-0 text-[#65a0ff] transition-transform group-hover/channel:scale-110 group-hover/channel:rotate-[-8deg] motion-reduce:transform-none" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold">{t('journey.discovery.ads.title')}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/45">{t('journey.discovery.ads.description')}</p>
                    <Link href="/google-ads-search" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#65a0ff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      {t('journey.discovery.ads.cta')} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <motion.li
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative p-7 md:p-10 lg:p-12"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#65a0ff]">03</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/30 bg-[#0a1220] text-[#65a0ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none">
                  <MousePointer2 aria-hidden="true" className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/35">{t('journey.decision.eyebrow')}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.035em]">{t('journey.decision.title')}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/55">{t('journey.decision.description')}</p>
              <Link
                href="/experience"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#050608] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65a0ff] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080c14]"
              >
                {t('journey.decision.cta')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.li>
          </ol>
        </div>
      </div>
    </section>
  );
}
