import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['vi', 'en'],
  // Used when no locale matches
  defaultLocale: 'vi',
  localePrefix: 'always' 
});

export const config = {
  // Skip all internal paths (_next, api, etc.) and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};