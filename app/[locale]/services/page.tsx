'use client';

import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Clock3,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MagneticButton from '@/components/ui/MagneticButton';
import { Link } from '@/navigation';

const TOUR_URL = 'https://www.rvmedia.vn/MaiHouseSaigon/';
const workflowSteps = ['plan', 'shoot', 'build', 'deliver'] as const;
const profileOptions = ['setup', 'management'] as const;
const faqItems = ['preparation', 'shootDuration', 'revisions', 'ownership', 'embedding', 'timeline'] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <section className="relative px-6 pb-24 pt-44 md:pb-28 md:pt-52">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-32 h-[32rem] w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-[#1468ff]/10 blur-[130px]"
          />
          <motion.div initial="hidden" animate="visible" className="container relative mx-auto max-w-7xl">
            <motion.p
              variants={fadeUp}
              className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#65a0ff]"
            >
              {t('Hero.eyebrow')}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {t('Hero.title')}
              <span className="block text-[#65a0ff]">{t('Hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
            >
              {t('Hero.description')}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#1468ff] px-6 py-3.5 text-sm font-bold transition hover:bg-[#2f7cff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t('Hero.cta')}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-[#07090d] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('Workflow.eyebrow')}
                </p>
                <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                  {t('Workflow.title')}
                </h2>
              </div>
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#65a0ff]/25 bg-[#071a35]/70">
                <div className="border-r border-[#65a0ff]/20 px-5 py-4">
                  <p className="text-2xl font-black text-[#65a0ff]">1–2</p>
                  <p className="mt-0.5 text-xs text-white/55">{t('Workflow.shootMetric')}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-2xl font-black text-[#65a0ff]">10</p>
                  <p className="mt-0.5 text-xs text-white/55">{t('Workflow.deliveryMetric')}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b0f]">
              <div className="hidden grid-cols-[0.75fr_1.25fr_1fr] border-b border-white/10 bg-white/[0.035] px-8 py-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 md:grid">
                <span>{t('Workflow.columns.when')}</span>
                <span>{t('Workflow.columns.work')}</span>
                <span>{t('Workflow.columns.result')}</span>
              </div>

              <ol className="divide-y divide-white/10">
                {workflowSteps.map((step, index) => {
                  const isShoot = step === 'shoot';

                  return (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.07 }}
                      className={`relative grid gap-5 p-6 md:grid-cols-[0.75fr_1.25fr_1fr] md:items-center md:px-8 md:py-7 ${
                        isShoot ? 'bg-[#1468ff]/[0.08]' : ''
                      }`}
                    >
                      {isShoot && <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#1468ff]" />}

                      <div className="flex items-center gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#65a0ff]/30 bg-[#071a35] font-mono text-xs font-bold text-[#65a0ff]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/35 md:hidden">
                            {t('Workflow.columns.when')}
                          </span>
                          <p className="text-sm font-bold text-[#65a0ff]">{t(`Workflow.steps.${step}.when`)}</p>
                        </div>
                      </div>

                      <div>
                        <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/35 md:hidden">
                          {t('Workflow.columns.work')}
                        </span>
                        <p className="font-bold">{t(`Workflow.steps.${step}.work`)}</p>
                        {isShoot && (
                          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-white/50">
                            {t('Workflow.shootNote')}
                          </p>
                        )}
                      </div>

                      <div>
                        <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/35 md:hidden">
                          {t('Workflow.columns.result')}
                        </span>
                        <div className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60">
                          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#65a0ff]" />
                          {t(`Workflow.steps.${step}.result`)}
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-5 flex gap-3 text-xs leading-relaxed text-white/40">
              <Clock3 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#65a0ff]" />
              <p className="max-w-4xl">{t('Workflow.condition')}</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('BusinessProfile.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('BusinessProfile.title')}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                {t('BusinessProfile.description')}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {profileOptions.map((option, index) => (
                <motion.article
                  key={option}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-[#090b0f] p-7 md:p-9"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#65a0ff]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white/45">
                      {t(`BusinessProfile.options.${option}.label`)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{t(`BusinessProfile.options.${option}.title`)}</h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {([0, 1, 2] as const).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-sm leading-relaxed text-white/55"
                      >
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#65a0ff]" />
                        {t(`BusinessProfile.options.${option}.items.${item}`)}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <div className="mt-4 flex gap-3 rounded-2xl border border-[#65a0ff]/25 bg-[#071a35]/55 p-5 text-sm leading-relaxed text-white/65">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-[#65a0ff]" />
              {t('BusinessProfile.ownership')}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07090d] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('TourExample.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('TourExample.title')}</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-2xl md:aspect-[2/1]"
            >
              <iframe
                src={TOUR_URL}
                title={t('TourExample.iframeTitle')}
                loading="lazy"
                allow="fullscreen; autoplay; xr-spatial-tracking"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-[#65a0ff]/60 bg-[#071a35]/90 px-4 py-2.5 text-xs font-bold backdrop-blur-xl transition hover:border-white hover:bg-[#1468ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-6 md:right-6 md:px-5 md:py-3 md:text-sm"
              >
                {t('TourExample.openTour')}
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('FAQ.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('FAQ.title')}</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">{t('FAQ.description')}</p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((item) => (
                <details key={item} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold marker:hidden">
                    {t(`FAQ.items.${item}.question`)}
                    <span className="text-xl font-light text-[#65a0ff] transition-transform group-open:rotate-45 motion-reduce:transition-none">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-1 pt-4 text-sm leading-relaxed text-white/50">
                    {t(`FAQ.items.${item}.answer`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1468ff] px-6 py-24 text-center md:py-28">
          <div className="container relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="text-4xl font-black tracking-tighter md:text-7xl">{t('CTA.title')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{t('CTA.description')}</p>
            <div className="mt-9">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#071a35]"
                >
                  {t('CTA.button')}
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
