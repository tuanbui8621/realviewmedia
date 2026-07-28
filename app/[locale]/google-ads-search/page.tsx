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
const processKeys = ["understand", "build", "launch", "improve"] as const;
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

            <div className="max-w-5xl">
              <p className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                {t("hero.eyebrow")}
              </p>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                {t("hero.title")}
              </h1>
              <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-white/65 md:text-xl">
                {t("hero.description")}
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
              >
                {t("hero.cta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
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
            <div className="grid gap-6 md:grid-cols-3">
              {benefitIcons.map((Icon, index) => (
                <article
                  key={index}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon
                    aria-hidden="true"
                    className="mb-7 h-9 w-9 text-blue-400"
                  />
                  <h3 className="mb-3 text-xl font-bold">
                    {t(`benefits.items.${index}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t(`benefits.items.${index}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                {t("included.eyebrow")}
              </p>
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                {t("included.heading")}
              </h2>
              <p className="mt-6 leading-relaxed text-white/60">
                {t("included.description")}
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {includedKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/75"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  />
                  {t(`included.items.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08090c] px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-14 max-w-3xl text-4xl font-black tracking-tighter md:text-5xl">
              {t("process.heading")}
            </h2>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processKeys.map((key, index) => (
                <li
                  key={key}
                  className="relative rounded-[2rem] border border-white/10 bg-[#0d0e12] p-7"
                >
                  <span className="mb-8 block font-mono text-sm font-bold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-xl font-bold">
                    {t(`process.steps.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t(`process.steps.${key}.description`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
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
              <ul className="grid gap-3 sm:grid-cols-2">
                {clientKeys.map((key) => (
                  <li
                    key={key}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/75"
                  >
                    {t(`clients.items.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-blue-400/15 bg-[#08101c] px-6 py-24 md:py-32">
          <div className="container mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <BadgeCheck
                aria-hidden="true"
                className="mb-7 h-10 w-10 text-blue-400"
              />
              <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
                {t("certification.heading")}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {t("certification.description")}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/45">
                {t("certification.disclaimer")}
              </p>
              <a
                href="/certificates/google-ads-search-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-sm text-sm font-bold text-blue-300 underline decoration-blue-300/40 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("certification.certificateLink")}
              </a>
            </div>
            <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-white/10 bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:max-w-[320px]">
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
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[2.5rem] border border-blue-400/20 bg-blue-500/[0.06] p-8 md:p-10">
                <Search
                  aria-hidden="true"
                  className="mb-8 h-9 w-9 text-blue-400"
                />
                <h3 className="mb-4 text-2xl font-bold">
                  {t("combined.search.title")}
                </h3>
                <p className="text-white/60">
                  {t("combined.search.description")}
                </p>
              </article>
              <article className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <Sparkles
                  aria-hidden="true"
                  className="mb-8 h-9 w-9 text-white/75"
                />
                <h3 className="mb-4 text-2xl font-bold">
                  {t("combined.visual.title")}
                </h3>
                <p className="text-white/60">
                  {t("combined.visual.description")}
                </p>
              </article>
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
