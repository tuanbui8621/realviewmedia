import type { MetadataRoute } from "next";

import {
  getCanonicalUrl,
  type Locale,
  type SeoPage,
} from "@/lib/seo-metadata";

const sitemapPages: ReadonlyArray<{
  locale: Locale;
  page: SeoPage;
}> = [
  { locale: "en", page: "home" },
  { locale: "en", page: "experience" },
  { locale: "en", page: "portfolio" },
  { locale: "en", page: "about" },
  { locale: "en", page: "contact" },
  { locale: "en", page: "privacy" },
  { locale: "en", page: "terms" },
  { locale: "vi", page: "home" },
  { locale: "vi", page: "experience" },
  { locale: "vi", page: "portfolio" },
  { locale: "vi", page: "about" },
  { locale: "vi", page: "contact" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map(({ locale, page }) => ({
    url: getCanonicalUrl(locale, page),
  }));
}
