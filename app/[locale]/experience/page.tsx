'use client';

import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers3,
  MapPinned,
  MonitorUp,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MagneticButton from '@/components/ui/MagneticButton';
import { Link } from '@/navigation';

const TOUR_URL = 'https://www.rvmedia.vn/MaiHouseSaigon/';

const deliverables = [
  { key: 'capture', icon: Camera },
  { key: 'processing', icon: Layers3 },
  { key: 'tour', icon: MonitorUp },
  { key: 'maps', icon: MapPinned },
  { key: 'quality', icon: CheckCircle2 },
  { key: 'handover', icon: ShieldCheck },
] as const;

const processSteps = ['prepare', 'shoot', 'process', 'build', 'deliver'] as const;
const profileServices = ['audit', 'foundation', 'media', 'publishing', 'monitoring', 'ongoing'] as const;
const faqItems = ['preparation', 'shootDuration', 'revisions', 'ownership', 'embedding', 'timeline'] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ExperiencePage() {
  const t = useTranslations('ExperiencePage');

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <section className="relative px-6 pb-24 pt-44 md:pb-32 md:pt-52">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-32 h-[34rem] w-[54rem] max-w-full -translate-x-1/2 rounded-full bg-[#1468ff]/10 blur-[130px]"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            className="container relative mx-auto max-w-7xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#65a0ff]"
            >
              {t('Hero.eyebrow')}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-6xl text-5xl font-black leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {t('Hero.title')}
              <span className="block text-[#65a0ff]">{t('Hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
            >
              {t('Hero.description')}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#1468ff] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#2f7cff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t('Hero.cta')}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href="#process"
                className="text-sm font-bold text-white/65 underline decoration-white/20 underline-offset-8 transition-colors hover:text-white"
              >
                {t('Hero.secondaryCta')}
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('Deliverables.eyebrow')}
                </p>
                <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                  {t('Deliverables.title')}
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-white/55 lg:justify-self-end lg:text-lg">
                {t('Deliverables.description')}
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map(({ key, icon: Icon }, index) => (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="bg-[#080b11] p-7 md:p-9"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#65a0ff]/25 bg-[#0a1424] text-[#65a0ff]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{t(`Deliverables.items.${key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {t(`Deliverables.items.${key}.description`)}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 border-y border-white/10 bg-[#07090d] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('Process.eyebrow')}
                </p>
                <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                  {t('Process.title')}
                </h2>
              </div>
              <div className="flex w-fit items-center gap-3 rounded-full border border-[#65a0ff]/35 bg-[#071a35]/75 px-5 py-3 text-sm font-bold text-white">
                <CalendarDays aria-hidden="true" className="h-5 w-5 text-[#65a0ff]" />
                {t('Process.commitment')}
              </div>
            </div>

            <ol className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative border-b border-white/10 bg-[#080b11] p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#65a0ff]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/45">
                      {t(`Process.steps.${step}.timing`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{t(`Process.steps.${step}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {t(`Process.steps.${step}.description`)}
                  </p>
                </motion.li>
              ))}
            </ol>
            <p className="mt-5 max-w-4xl text-xs leading-relaxed text-white/40">
              {t('Process.condition')}
            </p>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('BusinessProfile.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                {t('BusinessProfile.title')}
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/55 lg:text-lg">
                {t('BusinessProfile.description')}
              </p>
              <div className="mt-8 rounded-2xl border border-[#65a0ff]/25 bg-[#071a35]/55 p-5 text-sm leading-relaxed text-white/65">
                <ShieldCheck aria-hidden="true" className="mb-3 h-6 w-6 text-[#65a0ff]" />
                {t('BusinessProfile.ownership')}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profileServices.map((service, index) => (
                <motion.article
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-[#090b0f] p-6"
                >
                  <Check aria-hidden="true" className="mb-5 h-5 w-5 text-[#65a0ff]" />
                  <h3 className="font-bold">{t(`BusinessProfile.items.${service}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {t(`BusinessProfile.items.${service}.description`)}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07090d] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('TourExample.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                {t('TourExample.title')}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/55 lg:text-lg">
                {t('TourExample.description')}
              </p>
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
                className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-[#65a0ff]/60 bg-[#071a35]/90 px-4 py-2.5 text-xs font-bold shadow-[0_0_18px_rgba(20,104,255,0.45)] backdrop-blur-xl transition hover:border-white hover:bg-[#1468ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-6 md:right-6 md:px-5 md:py-3 md:text-sm"
              >
                {t('TourExample.openTour')}
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('FAQ.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('FAQ.title')}</h2>
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
                  <p className="max-w-3xl pb-2 pt-4 text-sm leading-relaxed text-white/50">
                    {t(`FAQ.items.${item}.answer`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1468ff] px-6 py-24 text-center md:py-32">
          <div className="container relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="text-4xl font-black tracking-tighter md:text-7xl">{t('CTA.title')}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{t('CTA.description')}</p>
            <div className="mt-10">
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
