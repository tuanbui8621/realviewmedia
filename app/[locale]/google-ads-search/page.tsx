import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  Crosshair,
  Search,
  Sparkles,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "@/navigation";
import {
  buildPageMetadata,
  getCanonicalUrl,
  serializeJsonLd,
  SITE_URL,
  type Locale,
} from "@/lib/seo-metadata";

const benefitIcons = [Crosshair, CircleDollarSign, BarChart3] as const;
const benefitStyles = [
  {
    icon: "text-cyan-300",
    line: "from-cyan-300/80 to-cyan-300/10",
    glow: "bg-cyan-300/10",
  },
  {
    icon: "text-violet-300",
    line: "from-violet-300/80 to-violet-300/10",
    glow: "bg-violet-300/10",
  },
  {
    icon: "text-emerald-300",
    line: "from-emerald-300/80 to-emerald-300/10",
    glow: "bg-emerald-300/10",
  },
] as const;
const processColors = [
  "border-cyan-300/40 text-cyan-200",
  "border-blue-300/40 text-blue-200",
  "border-violet-300/40 text-violet-200",
  "border-emerald-300/40 text-emerald-200",
] as const;
const processKeys = ["understand", "build", "launch", "improve"] as const;
const includedGroupKeys = ["opportunity", "campaign", "measurement", "growth"] as const;
const includedKeys = [
  "planning",
  "keywords",
  "structure",
  "copywriting",
  "targeting",
  "negativeKeywords",
  "budget",
  "tracking",
  "searchTerms",
  "reporting",
] as const;
const clientKeys = [
  "hospitality",
  "restaurants",
  "wellness",
  "property",
  "education",
  "professional",
] as const;
const faqKeys = [
  "management",
  "spend",
  "launch",
  "existingAccount",
  "guarantees",
  "combined",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "googleAdsSearch");
}

export default async function GoogleAdsSearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const t = await getTranslations({
    locale,
    namespace: "GoogleAdsSearchPage",
  });
  const canonical = getCanonicalUrl(typedLocale, "googleAdsSearch");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("breadcrumbs.home"),
        item: new URL("/", SITE_URL).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("breadcrumbs.current"),
        item: canonical,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: t("schema.name"),
    description: t("schema.description"),
    url: canonical,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    serviceType: "Google Ads Search campaign management",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(breadcrumbJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
        />

        <section className="relative px-6 pb-28 pt-44 md:pb-36 md:pt-52">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[54rem] max-w-full -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
          />
          <div className="container relative z-10 mx-auto max-w-6xl">
            <nav
              aria-label={t("breadcrumbs.label")}
              className="mb-12 flex items-center gap-2 text-sm text-white/45"
            >
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("breadcrumbs.home")}
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t("breadcrumbs.current")}</span>
            </nav>

            <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tighter sm:text-6xl md:text-7xl">
                  {t("hero.title")}
                </h1>
                <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/65 md:text-xl">
                  {t("hero.description")}
                </p>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
                >
                  {t("hero.cta")}
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>

              <div
                aria-label={t("hero.visual.label")}
                className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e15] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]"
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/15" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                    </div>
                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-cyan-200/60">
                      {t("hero.visual.intent")}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4">
                    <Search className="h-5 w-5 shrink-0 text-white/40" aria-hidden="true" />
                    <span className="text-sm text-white/80">
                      {t("hero.visual.query")}
                    </span>
                  </div>
                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#f5fbff] p-6 text-[#0b1726]">
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl"
                    />
                    <p className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-emerald-700">
                      {t("hero.visual.adLabel")}
                    </p>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-blue-800">
                      {t("hero.visual.resultTitle")}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {t("hero.visual.resultDescription")}
                    </p>
                    <div className="mt-5 inline-flex rounded-full bg-blue-700 px-4 py-2 text-xs font-bold text-white">
                      {t("hero.visual.action")}
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10">
                    {[0, 1, 2].map((index) => (
                      <div key={index} className="bg-[#0b0e15] px-3 py-4 text-center">
                        <p className="font-mono text-[0.55rem] uppercase tracking-wider text-white/35">
                          {t(`hero.visual.signals.${index}.label`)}
                        </p>
                        <p className="mt-2 text-xs font-bold text-white/75">
                          {t(`hero.visual.signals.${index}.value`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08090c] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                {t("benefits.eyebrow")}
              </p>
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                {t("benefits.heading")}
              </h2>
            </div>
            <div className="relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] md:grid-cols-3">
              {benefitIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden border-b border-white/10 p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl ${benefitStyles[index].glow}`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${benefitStyles[index].line}`}
                  />
                  <Icon
                    aria-hidden="true"
                    className={`mb-7 h-9 w-9 ${benefitStyles[index].icon}`}
                  />
                  <h3 className="mb-3 text-xl font-bold">
                    {t(`benefits.items.${index}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t(`benefits.items.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                {t("included.eyebrow")}
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-tighter md:text-5xl">
                {t("included.heading")}
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                {t("included.description")}
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080a0f] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <article className="relative overflow-hidden border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%)]"
                />
                <div className="relative z-10">
                  <div className="relative flex h-44 items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute h-36 w-36 rounded-full border border-cyan-300/20 shadow-[0_0_0_28px_rgba(34,211,238,0.035),0_0_0_56px_rgba(34,211,238,0.02)]"
                    />
                    <Search className="relative h-12 w-12 text-cyan-300" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-300">
                    01
                  </span>
                  <h3 className="mt-5 text-3xl font-black tracking-tighter">
                    {t("included.groups.opportunity.title")}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-white/55">
                    {t("included.groups.opportunity.description")}
                  </p>
                </div>
              </article>
              <div className="divide-y divide-white/10">
                {includedGroupKeys.slice(1).map((key, index) => {
                  const accents = [
                    {
                      number: "text-blue-300",
                      bar: "bg-blue-300",
                    },
                    {
                      number: "text-violet-300",
                      bar: "bg-violet-300",
                    },
                    {
                      number: "text-emerald-300",
                      bar: "bg-emerald-300",
                    },
                  ] as const;
                  const accent = accents[index];

                  return (
                    <article
                      key={key}
                      className="group relative grid grid-cols-[auto_1fr] gap-6 overflow-hidden p-7 md:p-8"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-0 top-0 w-0.5 opacity-50 ${accent.bar}`}
                      />
                      <span className={`font-mono text-xs font-bold ${accent.number}`}>
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">
                          {t(`included.groups.${key}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/50">
                          {t(`included.groups.${key}.description`)}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <details className="group mt-6 rounded-2xl border border-white/10 bg-white/[0.025]">
              <summary className="cursor-pointer list-none px-6 py-5 text-sm font-bold text-white/75 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">
                {t("included.detailsLabel")}
              </summary>
              <ul className="grid gap-x-8 gap-y-4 border-t border-white/10 px-6 py-6 sm:grid-cols-2">
                {includedKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                    />
                    {t(`included.items.${key}`)}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08090c] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-14 max-w-3xl text-4xl font-black tracking-tighter md:text-5xl">
              {t("process.heading")}
            </h2>
            <ol className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d0e12] before:absolute before:bottom-10 before:left-[2.45rem] before:top-10 before:w-px before:bg-gradient-to-b before:from-blue-400/60 before:via-blue-400/25 before:to-white/10 before:content-[''] lg:grid lg:grid-cols-4 lg:before:bottom-auto lg:before:left-8 lg:before:right-8 lg:before:top-[4.55rem] lg:before:h-px lg:before:w-auto lg:before:bg-gradient-to-r">
              {processKeys.map((key, index) => (
                <li
                  key={key}
                  className="relative grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 px-6 py-8 last:border-b-0 sm:px-8 lg:block lg:min-h-[18rem] lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
                >
                  <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-[#0d0e12] font-mono text-[0.65rem] font-bold ring-8 ring-[#0d0e12] lg:mb-12 ${processColors[index]}`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold">
                      {t(`process.steps.${key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {t(`process.steps.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Building2
                  aria-hidden="true"
                  className="mb-7 h-10 w-10 text-blue-400"
                />
                <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                  {t("clients.heading")}
                </h2>
                <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                  {t("clients.description")}
                </p>
              </div>
              <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-5 border-y border-white/10 py-8">
                {clientKeys.map((key, index) => (
                  <li
                    key={key}
                    className={`flex items-center gap-3 font-bold tracking-tight text-white/75 ${
                      index % 3 === 0
                        ? "text-xl md:text-2xl"
                        : index % 3 === 1
                          ? "text-base md:text-lg"
                          : "text-sm md:text-base"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        index % 3 === 0
                          ? "bg-cyan-300"
                          : index % 3 === 1
                            ? "bg-violet-300"
                            : "bg-emerald-300"
                      }`}
                    />
                    {t(`clients.items.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-blue-100 bg-[#edf6ff] px-6 py-24 text-[#081525] md:py-32">
          <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <BadgeCheck
                aria-hidden="true"
                  className="mb-7 h-10 w-10 text-blue-700"
              />
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                {t("certification.heading")}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                {t("certification.description")}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                {t("certification.disclaimer")}
              </p>
              <a
                href="/certificates/google-ads-search-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-sm text-sm font-bold text-blue-700 underline decoration-blue-700/30 underline-offset-4 transition-colors hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              >
                {t("certification.certificateLink")}
              </a>
            </div>
            <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-blue-200 bg-white p-7 shadow-[0_20px_70px_rgba(30,64,175,0.12)] sm:max-w-[320px]">
              <Image
                src="/images/google-ads-search-certified.png"
                alt="Google Ads Search certification credential"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 272px, (min-width: 640px) 272px, 232px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 max-w-4xl">
              <Sparkles
                aria-hidden="true"
                className="mb-7 h-10 w-10 text-blue-400"
              />
              <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
                {t("combined.heading")}
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/60">
                {t("combined.description")}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080a0f] px-7 py-10 md:px-10 lg:px-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(110deg,rgba(34,211,238,0.08),transparent_35%,rgba(139,92,246,0.08)_65%,rgba(52,211,153,0.08))]"
              />
              <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div>
                  <Search aria-hidden="true" className="mb-6 h-9 w-9 text-cyan-300" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cyan-200/60">
                    01
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {t("combined.search.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {t("combined.search.description")}
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="h-6 w-6 rotate-90 text-white/20 lg:rotate-0"
                />
                <div>
                  <Sparkles aria-hidden="true" className="mb-6 h-9 w-9 text-violet-300" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-violet-200/60">
                    02
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {t("combined.visual.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {t("combined.visual.description")}
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="h-6 w-6 rotate-90 text-white/20 lg:rotate-0"
                />
                <div>
                  <Crosshair aria-hidden="true" className="mb-6 h-9 w-9 text-emerald-300" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-emerald-200/60">
                    03
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    {t("combined.action.title")}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {t("combined.action.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08090c] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-12 text-4xl font-black tracking-tighter md:text-5xl">
              {t("faq.heading")}
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqKeys.map((key) => (
                <details key={key} className="group py-6">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    {t(`faq.items.${key}.question`)}
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-white/60">
                    {t(`faq.items.${key}.answer`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28 text-center md:py-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]"
          />
          <div className="container relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
              {t("finalCta.heading")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {t("finalCta.description")}
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
            >
              {t("finalCta.button")}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
