'use client';

import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Check,
  Clock3,
  ExternalLink,
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
  { key: 'tour', icon: MonitorUp },
  { key: 'publish', icon: MapPinned },
] as const;

const processSteps = ['plan', 'shoot', 'build', 'deliver'] as const;
const profileOptions = ['setup', 'management'] as const;
const faqItems = ['preparation', 'ownership', 'timeline'] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ExperiencePage() {
  const t = useTranslations('ExperiencePage');

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
              className="max-w-6xl text-5xl font-black leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {t('Hero.title')}
              <span className="block text-[#65a0ff]">{t('Hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
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

        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('Deliverables.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('Deliverables.title')}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {deliverables.map(({ key, icon: Icon }, index) => (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-[#090b0f] p-7 md:p-9"
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

        <section className="border-y border-white/10 bg-[#07090d] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('Process.eyebrow')}
                </p>
                <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                  {t('Process.title')}
                </h2>
              </div>
              <div className="flex w-fit items-center gap-3 rounded-full border border-[#65a0ff]/35 bg-[#071a35]/75 px-5 py-3 text-sm font-bold">
                <Clock3 aria-hidden="true" className="h-5 w-5 text-[#65a0ff]" />
                {t('Process.commitment')}
              </div>
            </div>

            <ol className="relative mt-12 grid gap-4 lg:grid-cols-4">
              <div
                aria-hidden="true"
                className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-[#65a0ff]/30 via-[#65a0ff] to-[#65a0ff]/30 lg:block"
              />
              {processSteps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-[#090b0f] p-6"
                >
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#65a0ff]/40 bg-[#071a35] font-mono text-sm font-bold text-[#65a0ff] shadow-[0_0_22px_rgba(20,104,255,0.25)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#65a0ff]">
                    {t(`Process.steps.${step}.timing`)}
                  </p>
                  <h3 className="text-lg font-bold">{t(`Process.steps.${step}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {t(`Process.steps.${step}.description`)}
                  </p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 flex max-w-4xl gap-3 rounded-2xl border border-[#65a0ff]/20 bg-[#071a35]/45 p-5">
              <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#65a0ff]" />
              <div>
                <p className="font-bold">{t('Process.shootNoteTitle')}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{t('Process.shootNote')}</p>
              </div>
            </div>
            <p className="mt-4 max-w-4xl text-xs leading-relaxed text-white/35">{t('Process.condition')}</p>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('BusinessProfile.eyebrow')}
                </p>
                <h2 className="text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                  {t('BusinessProfile.title')}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">
                  {t('BusinessProfile.description')}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {profileOptions.map((option, index) => (
                  <motion.article
                    key={option}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[2rem] border border-white/10 bg-[#090b0f] p-7"
                  >
                    <p className="mb-4 font-mono text-xs font-bold text-[#65a0ff]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-xl font-bold">{t(`BusinessProfile.options.${option}.title`)}</h3>
                    <ul className="mt-5 space-y-3">
                      {([0, 1, 2] as const).map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/55">
                          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#65a0ff]" />
                          {t(`BusinessProfile.options.${option}.items.${item}`)}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
                <div className="flex gap-3 rounded-2xl border border-[#65a0ff]/25 bg-[#071a35]/55 p-5 text-sm leading-relaxed text-white/65 sm:col-span-2">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-[#65a0ff]" />
                  {t('BusinessProfile.ownership')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07090d] px-6 py-20 md:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                {t('TourExample.eyebrow')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{t('TourExample.title')}</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55">
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
                className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-[#65a0ff]/60 bg-[#071a35]/90 px-4 py-2.5 text-xs font-bold backdrop-blur-xl transition hover:border-white hover:bg-[#1468ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-6 md:right-6 md:px-5 md:py-3 md:text-sm"
              >
                {t('TourExample.openTour')}
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
              <div>
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#65a0ff]">
                  {t('FAQ.eyebrow')}
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t('FAQ.title')}</h2>
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {faqItems.map((item) => (
                  <details key={item} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold marker:hidden">
                      {t(`FAQ.items.${item}.question`)}
                      <span className="text-xl font-light text-[#65a0ff] transition-transform group-open:rotate-45 motion-reduce:transition-none">
                        +
                      </span>
                    </summary>
                    <p className="max-w-3xl pb-1 pt-3 text-sm leading-relaxed text-white/50">
                      {t(`FAQ.items.${item}.answer`)}
                    </p>
                  </details>
                ))}
              </div>
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
