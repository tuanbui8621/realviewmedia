'use client';

import { useLocale, useTranslations } from 'next-intl';
import { locales, usePathname, useRouter } from '@/navigation';
import { useTransition } from 'react';

type Locale = (typeof locales)[number];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      role="group"
      aria-label={t('label')}
      aria-busy={isPending}
      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => switchLanguage('vi')}
        disabled={isPending}
        aria-label={t('vietnamese')}
        aria-pressed={locale === 'vi'}
        className={`rounded-sm text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white ${locale === 'vi' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        {t('vietnameseShort')}
      </button>
      <span aria-hidden="true" className="text-white/20 text-xs">|</span>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        disabled={isPending}
        aria-label={t('english')}
        aria-pressed={locale === 'en'}
        className={`rounded-sm text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white ${locale === 'en' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        {t('englishShort')}
      </button>
    </div>
  );
}
