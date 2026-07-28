'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, BarChart3, CircleDollarSign, Crosshair, MousePointer2, Phone, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

const benefitIcons = [Crosshair, CircleDollarSign, BarChart3] as const;

export function GoogleAdsJourney() {
  const t = useTranslations('GoogleAdsSearchPage.hero.visual');
  const [activeQuery, setActiveQuery] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div aria-label={t('label')} className="relative border border-white/15 border-l-4 border-l-[#1468ff] bg-[#0a1220] p-5 shadow-[24px_24px_0_rgba(20,104,255,0.12)] md:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((item) => <span key={item} className="h-2 w-2 rounded-full bg-white/15" />)}
        </div>
        <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#65a0ff]">{t('intent')}</span>
      </div>

      <div className="mt-5 flex gap-2" aria-label={t('examplesLabel')}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveQuery(index)}
            aria-pressed={activeQuery === index}
            className={`rounded-full border px-3 py-2 text-left text-[0.65rem] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              activeQuery === index
                ? 'border-[#65a0ff] bg-[#1468ff] text-white'
                : 'border-white/10 text-white/45 hover:border-white/30 hover:text-white'
            }`}
          >
            {t(`examples.${index}.label`)}
          </button>
        ))}
      </div>

      <motion.div
        key={`query-${activeQuery}`}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4"
      >
        <motion.div
          animate={reduceMotion ? undefined : { scale: [1, 1.16, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.4 }}
        >
          <Search className="h-5 w-5 text-[#65a0ff]" aria-hidden="true" />
        </motion.div>
        <span className="text-sm text-white/85">{t(`examples.${activeQuery}.query`)}</span>
      </motion.div>

      <motion.div
        key={`result-${activeQuery}`}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.12 }}
        className="relative mt-4 overflow-hidden bg-[#f3f1ea] p-6 text-[#0b1726]"
      >
        <p className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-emerald-700">{t('adLabel')}</p>
        <h2 className="mt-3 text-xl font-bold tracking-tight text-blue-800">{t(`examples.${activeQuery}.resultTitle`)}</h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">{t('resultDescription')}</p>
        <div className="mt-5 flex items-center gap-2 text-xs font-bold text-blue-700">
          {t('action')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
        <motion.div
          aria-hidden="true"
          className="absolute bottom-4 right-5 text-blue-700"
          animate={reduceMotion ? undefined : { x: [8, 0, 0], y: [8, 0, 0], scale: [1, 1, 0.92] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
        >
          <MousePointer2 className="h-6 w-6 fill-white" />
        </motion.div>
      </motion.div>

      <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center">
        {[Search, MousePointer2, Phone].map((Icon, index) => (
          <div key={index} className="contents">
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
              className="group border border-white/10 bg-white/[0.025] px-2 py-4"
            >
              <Icon className="mx-auto h-5 w-5 text-[#65a0ff] transition-transform group-hover:rotate-[-6deg]" aria-hidden="true" />
              <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-wider text-white/55">{t(`journey.${index}`)}</p>
            </motion.div>
            {index < 2 && <ArrowRight className="h-4 w-4 text-white/20" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InteractiveBenefits() {
  const t = useTranslations('GoogleAdsSearchPage.benefits');
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative grid border-y border-black/15 md:grid-cols-3">
      {benefitIcons.map((Icon, index) => (
        <motion.article
          key={index}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          className="group relative border-b border-black/15 px-0 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { rotate: index === 1 ? 12 : -10, scale: 1.12 }}
            className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#1468ff]/25 text-[#1468ff] transition-colors group-hover:bg-[#1468ff] group-hover:text-white"
          >
            <Icon aria-hidden="true" className="h-6 w-6" />
          </motion.div>
          <span className="font-mono text-[0.6rem] font-bold tracking-[0.2em] text-[#1468ff]">0{index + 1}</span>
          <h3 className="mb-3 mt-4 text-xl font-bold">{t(`items.${index}.title`)}</h3>
          <p className="text-sm leading-relaxed text-black/60">{t(`items.${index}.description`)}</p>
        </motion.article>
      ))}
    </div>
  );
}
