import "server-only";

import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

export const SITE_URL = "https://www.rvmedia.vn";

const SOCIAL_IMAGE_URL = `${SITE_URL}/images/media.png`;
const LOGO_URL = `${SITE_URL}/images/logo2.png`;

export const pagePaths = {
  home: "",
  experience: "/experience",
  portfolio: "/portfolio",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type SeoPage = keyof typeof pagePaths;
export type Locale = (typeof routing.locales)[number];

const commercialPages = new Set<SeoPage>([
  "home",
  "experience",
  "portfolio",
  "about",
  "contact",
]);

const legalPages = new Set<SeoPage>(["privacy", "terms"]);

function resolveLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return locale;
}

export function getPublicPath(locale: Locale, page: SeoPage): string {
  const pathname = pagePaths[page];

  if (locale === "vi") {
    return `/vi${pathname}`;
  }

  return pathname || "/";
}

export function getCanonicalUrl(locale: Locale, page: SeoPage): string {
  return new URL(getPublicPath(locale, page), SITE_URL).toString();
}

export async function buildPageMetadata(
  localeValue: string,
  page: SeoPage,
): Promise<Metadata> {
  const locale = resolveLocale(localeValue);
  const t = await getTranslations({
    locale,
    namespace: `Metadata.pages.${page}`,
  });

  const title = t("title");
  const description = t("description");
  const canonical = getCanonicalUrl(locale, page);
  const isCommercialPage = commercialPages.has(page);
  const shouldIndex = !(locale === "vi" && legalPages.has(page));
  const languageAlternates = isCommercialPage
    ? {
        en: getCanonicalUrl("en", page),
        "vi-VN": getCanonicalUrl("vi", page),
      }
    : undefined;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    robots: {
      index: shouldIndex,
      follow: true,
      googleBot: {
        index: shouldIndex,
        follow: true,
        ...(shouldIndex
          ? {
              "max-image-preview": "large" as const,
              "max-snippet": -1,
              "max-video-preview": -1,
            }
          : {}),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RealView Media",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      ...(isCommercialPage
        ? {
            alternateLocale: [locale === "vi" ? "en_US" : "vi_VN"],
          }
        : {}),
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1734,
          height: 907,
          alt: "RealView Media",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          alt: "RealView Media",
        },
      ],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "RealView Media",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 1340,
    height: 275,
  },
  email: "contact@rvmedia.vn",
  telephone: "+84966888782",
  areaServed: [
    {
      "@type": "City",
      name: "Ho Chi Minh City",
    },
    {
      "@type": "Country",
      name: "Vietnam",
    },
  ],
} as const;

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
