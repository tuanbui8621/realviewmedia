// i18n.ts (Root folder)
import { getRequestConfig } from 'next-intl/server';

export const locales = ['vi', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to 'vi' if locale is undefined
  if (!locale || !locales.includes(locale as any)) {
    locale = 'vi';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});