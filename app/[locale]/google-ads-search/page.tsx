import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Crosshair,
  Search,
  Sparkles,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Footer from "@/components/Footer";
import { GoogleAdsJourney, InteractiveBenefits } from "@/components/GoogleAdsJourney";
import Navbar from "@/components/Navbar";
import { Link } from "@/navigation";
import {
  buildPageMetadata,
  getCanonicalUrl,
  serializeJsonLd,
  SITE_URL,
  type Locale,
} from "@/lib/seo-metadata";

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
    <div className="min-h-screen overflow-hidden bg-[#060b14] text-white">
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

        <section className="relative border-b border-white/10 px-6 pb-28 pt-44 md:pb-36 md:pt-52">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent,rgba(20,104,255,0.12))]"
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
                <p className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#65a0ff]">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl">
                  {t("hero.title")}
                </h1>
                <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/65 md:text-xl">
                  {t("hero.description")}
                </p>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1468ff] px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#060b14]"
                >
                  {t("hero.cta")}
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>

              <GoogleAdsJourney />
            </div>
          </div>
        </section>

        <section className="bg-[#f3f1ea] px-6 py-24 text-[#07111f] md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                {t("benefits.eyebrow")}
              </p>
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                {t("benefits.heading")}
              </h2>
            </div>
            <InteractiveBenefits />
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
            <div className="mt-12 overflow-hidden border border-white/15 bg-[#0a1220] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <article className="relative overflow-hidden border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div
                  aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(145deg,rgba(20,104,255,0.2),transparent_55%)]"
                />
                <div className="relative z-10">
                  <div className="relative flex h-44 items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute h-36 w-36 border border-[#1468ff]/40 shadow-[18px_18px_0_rgba(20,104,255,0.12)]"
                    />
                    <Search className="relative h-12 w-12 text-[#65a0ff]" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#65a0ff]">
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
                  return (
                    <article
                      key={key}
                      className="group relative grid grid-cols-[auto_1fr] gap-6 overflow-hidden p-7 md:p-8"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 top-0 w-0.5 bg-[#1468ff] opacity-60"
                      />
                      <span className="font-mono text-xs font-bold text-[#65a0ff]">
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
            <details className="group mt-6 border border-white/15 bg-white/[0.025]">
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

        <section className="bg-[#1468ff] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-14 max-w-3xl text-4xl font-black tracking-tighter md:text-5xl">
              {t("process.heading")}
            </h2>
            <ol className="relative border-y border-white/35 before:absolute before:bottom-10 before:left-[2.45rem] before:top-10 before:w-px before:bg-white/35 before:content-[''] lg:grid lg:grid-cols-4 lg:before:bottom-auto lg:before:left-8 lg:before:right-8 lg:before:top-[4.55rem] lg:before:h-px lg:before:w-auto">
              {processKeys.map((key, index) => (
                <li
                  key={key}
                  className="group relative grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 px-6 py-8 last:border-b-0 sm:px-8 lg:block lg:min-h-[18rem] lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
                >
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#1468ff] font-mono text-[0.65rem] font-bold text-white ring-8 ring-[#1468ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none lg:mb-12">
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

        <section className="bg-[#f3f1ea] px-6 py-24 text-[#07111f] md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="group grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Building2
                  aria-hidden="true"
                  className="mb-7 h-10 w-10 text-[#1468ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] motion-reduce:transform-none"
                />
                <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                  {t("clients.heading")}
                </h2>
                <p className="mt-6 max-w-xl leading-relaxed text-black/60">
                  {t("clients.description")}
                </p>
              </div>
              <ul className="grid border-t border-black/15 sm:grid-cols-2">
                {clientKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-4 border-b border-black/15 py-5 text-base font-bold tracking-tight text-black/75 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6 md:text-lg"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#1468ff]"
                    />
                    {t(`clients.items.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white px-6 py-24 text-[#081525] md:py-32">
          <div className="group container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <BadgeCheck
                aria-hidden="true"
                  className="mb-7 h-10 w-10 text-blue-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 motion-reduce:transform-none"
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
            <div className="mx-auto w-full max-w-[280px] border-l-4 border-[#1468ff] bg-[#f3f1ea] p-7 sm:max-w-[320px]">
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
            <div className="relative overflow-hidden border-y border-white/15 bg-[#0a1220] px-7 py-10 md:px-10 lg:px-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,104,255,0.18),transparent_55%)]"
              />
              <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="group">
                  <Search aria-hidden="true" className="mb-6 h-9 w-9 text-[#65a0ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 motion-reduce:transform-none" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#65a0ff]">
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
                <div className="group">
                  <Sparkles aria-hidden="true" className="mb-6 h-9 w-9 text-[#65a0ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12 group-hover:scale-110 motion-reduce:transform-none" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#65a0ff]">
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
                <div className="group">
                  <Crosshair aria-hidden="true" className="mb-6 h-9 w-9 text-[#65a0ff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:scale-110 motion-reduce:transform-none" />
                  <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#65a0ff]">
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

        <section className="bg-[#f3f1ea] px-6 py-24 text-[#07111f] md:py-32">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-12 text-4xl font-black tracking-tighter md:text-5xl">
              {t("faq.heading")}
            </h2>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {faqKeys.map((key) => (
                <details key={key} className="group py-6">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1468ff]">
                    {t(`faq.items.${key}.question`)}
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-black/60">
                    {t(`faq.items.${key}.answer`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#1468ff] px-6 py-28 text-center md:py-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(0,0,0,0.12))]"
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
