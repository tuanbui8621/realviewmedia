import "server-only";

import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

export const SITE_URL = "https://www.rvmedia.vn";

const SOCIAL_IMAGE_BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : SITE_URL;
const SOCIAL_IMAGE_URL = `${SOCIAL_IMAGE_BASE_URL}/images/media.png`;
const LOGO_URL = `${SITE_URL}/images/favicon.png`;

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

function resolveLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return locale;
}

export function getPublicPath(locale: Locale, page: SeoPage): string {
  const pathname = pagePaths[page];

  if (locale === routing.defaultLocale) {
    return pathname || "/";
  }

  return `/${locale}${pathname}`;
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
  const languageAlternates = {
    en: getCanonicalUrl("en", page),
    "vi-VN": getCanonicalUrl("vi", page),
    "x-default": getCanonicalUrl(routing.defaultLocale, page),
  };

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RealView Media",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      alternateLocale: [locale === "vi" ? "en_US" : "vi_VN"],
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1672,
          height: 941,
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
    width: 817,
    height: 817,
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
