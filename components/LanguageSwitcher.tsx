'use client';

import NextLink from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { getPathname, locales, usePathname } from '@/navigation';

type Locale = (typeof locales)[number];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  const getLocaleHref = (newLocale: Locale) =>
    getPathname({ href: pathname, locale: newLocale });

  const preserveCurrentLocale = (
    event: MouseEvent<HTMLAnchorElement>,
    newLocale: Locale,
  ) => {
    if (
      newLocale === locale &&
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      event.preventDefault();
    }
  };

  return (
    <div
      role="group"
      aria-label={t('label')}
      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md"
    >
      <NextLink
        href={getLocaleHref('vi')}
        replace
        hrefLang="vi-VN"
        aria-label={t('vietnamese')}
        aria-current={locale === 'vi' ? 'page' : undefined}
        onClick={(event) => preserveCurrentLocale(event, 'vi')}
        className={`rounded-sm text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white ${locale === 'vi' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        {t('vietnameseShort')}
      </NextLink>
      <span aria-hidden="true" className="text-white/20 text-xs">|</span>
      <NextLink
        href={getLocaleHref('en')}
        replace
        hrefLang="en"
        aria-label={t('english')}
        aria-current={locale === 'en' ? 'page' : undefined}
        onClick={(event) => preserveCurrentLocale(event, 'en')}
        className={`rounded-sm text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white ${locale === 'en' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        {t('englishShort')}
      </NextLink>
    </div>
  );
}
