'use client';

import { useLocale } from 'next-intl';
// IMPORTANT: This must be the import from your root navigation.ts
import { usePathname, useRouter } from '../navigation'; 
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // This now returns path WITHOUT locale (e.g., '/about')

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      // Because 'pathname' is clean (e.g., '/about'), this will 
      // navigate correctly to '/en/about' or '/vi/about'
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
      <button 
        onClick={() => switchLanguage('vi')}
        disabled={isPending}
        className={`text-xs font-bold transition-all ${locale === 'vi' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        VN
      </button>
      <span className="text-white/20 text-xs">|</span>
      <button 
        onClick={() => switchLanguage('en')}
        disabled={isPending}
        className={`text-xs font-bold transition-all ${locale === 'en' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
      >
        EN
      </button>
    </div>
  );
}