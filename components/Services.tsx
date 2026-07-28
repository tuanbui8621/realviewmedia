'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Aperture, ArrowUpRight, MapPin, Search } from 'lucide-react';
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
        <div className="relative grid gap-12 border-b border-[#65a0ff]/35 pb-12 shadow-[0_16px_28px_-24px_rgba(101,160,255,0.65)] lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl text-4xl font-bold leading-[0.92] tracking-tight sm:text-[2.75rem] md:text-5xl lg:text-6xl"
            >
              {t('sectionHeading')}
              <span className="block text-[#65a0ff]">{t('sectionHighlight')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg"
            >
              <span className="block">{t('sectionDescLine1')}</span>
              <span className="block">{t('sectionDescLine2')}</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="lg:pl-10"
          >
            <p className="mb-5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#65a0ff]">
              {t('industriesEyebrow')}
            </p>
            <ul className="flex flex-wrap gap-2" aria-label={t('industriesLabel')}>
              {industries.map((industry) => (
                <li key={industry} className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/55 transition-colors hover:border-[#65a0ff]/60 hover:text-white">
                  {t(`industries.${industry}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="relative mt-14 overflow-hidden border-y border-[#65a0ff]/25 bg-[#080c14] shadow-[0_0_70px_-38px_rgba(101,160,255,0.7)]">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65a0ff] to-transparent" />
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[16.66%] right-[16.66%] top-[6.35rem] hidden h-px origin-left bg-gradient-to-r from-[#65a0ff]/30 via-[#65a0ff] to-[#65a0ff]/30 lg:block"
          />

          <ol className="grid lg:grid-cols-3">
            <motion.li
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-white/35">01</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/45 bg-[#0a1220] text-[#65a0ff] shadow-[0_0_24px_-10px_rgba(101,160,255,0.9)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                  <Search aria-hidden="true" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-8deg] motion-reduce:transform-none" />
                </div>
              </div>
              <p className="mt-10 font-mono text-[clamp(3.75rem,7vw,6.5rem)] font-black leading-none tracking-[-0.07em] text-white">
                {t('journey.capture.metric')}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#65a0ff]">{t('journey.capture.eyebrow')}</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.035em]">{t('journey.capture.title')}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{t('journey.capture.description')}</p>
              <Link href="/google-ads-search" className="mt-7 inline-flex items-center gap-1.5 text-xs font-bold text-[#65a0ff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {t('journey.capture.cta')} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.li>

            <motion.li
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative border-b border-white/10 bg-[#65a0ff]/[0.035] p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-white/35">02</span>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/45 bg-[#0a1220] text-[#65a0ff] shadow-[0_0_24px_-10px_rgba(101,160,255,0.9)]">
                  <span aria-hidden="true" className="absolute inset-1 rounded-full border border-[#65a0ff]/15 transition-transform duration-500 group-hover:scale-125 motion-reduce:transform-none" />
                  <Aperture aria-hidden="true" className="h-6 w-6 transition-transform duration-700 group-hover:rotate-90 motion-reduce:transform-none" />
                </div>
              </div>
              <p className="mt-10 font-mono text-[clamp(3.75rem,7vw,6.5rem)] font-black leading-none tracking-[-0.07em] text-[#65a0ff]">
                {t('journey.discovery.metric')}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#65a0ff]">{t('journey.discovery.eyebrow')}</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.035em]">{t('journey.discovery.title')}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{t('journey.discovery.description')}</p>
              <Link href="/experience" className="mt-7 inline-flex items-center gap-1.5 text-xs font-bold text-[#65a0ff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {t('journey.discovery.cta')} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.li>

            <motion.li
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group relative p-7 md:p-10 lg:p-12"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-white/35">03</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#65a0ff]/45 bg-[#0a1220] text-[#65a0ff] shadow-[0_0_24px_-10px_rgba(101,160,255,0.9)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none">
                  <MapPin aria-hidden="true" className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-10 font-mono text-[clamp(3.75rem,7vw,6.5rem)] font-black leading-none tracking-[-0.07em] text-white">
                {t('journey.decision.metric')}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#65a0ff]">{t('journey.decision.eyebrow')}</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.035em]">{t('journey.decision.title')}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">{t('journey.decision.description')}</p>
            </motion.li>
          </ol>

          <div className="border-t border-white/10 px-7 py-5 text-[0.68rem] leading-relaxed text-white/35 md:px-10 lg:px-12">
            <span>{t('source.label')} </span>
            <a
              href="https://www.google.com/streetview/hire/Power-of-maps-listings.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
            >
              {t('source.mapStudy')}
            </a>
            <span> · </span>
            <a
              href="https://www.thinkwithgoogle.com/_qs/documents/2938/how-advertisers-can-extend-their-relevance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/70"
            >
              {t('source.localSearchStudy')}
            </a>
            <span className="mt-1 block">{t('source.context')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
