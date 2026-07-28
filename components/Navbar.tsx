'use client';

import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
    };

    const initialFrame = window.requestAnimationFrame(updateScrolled);

    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', updateScrolled);
    };
  }, []);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setServicesOpen(false);
      setMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(closeTimer);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (
        servicesContainerRef.current &&
        !servicesContainerRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        servicesTriggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [servicesOpen]);

  // Navigation links with translation keys
  const links = [
    { key: 'home', href: '/' },
    { key: 'portfolio', href: '/portfolio' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ];
  const servicesActive =
    pathname === '/experience' || pathname === '/google-ads-search';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,height] duration-500 flex items-center ${
          scrolled
            ? 'h-20 bg-rv-black/80 backdrop-blur-md border-b border-rv-white/10'
            : 'h-24 bg-transparent'
        }`}
      >
        <div className="container mx-auto grid grid-cols-2 items-center px-6 md:grid-cols-[auto_1fr_auto] md:px-8 lg:px-12">

          {/* Logo */}
          <Link href="/" className="flex max-w-full shrink-0 items-center">
            <Image
              src="/images/logo1.png"
              alt="RealView Media Logo"
              width={904}
              height={762}
              sizes="(min-width: 768px) 85px, 76px"
              className="block h-16 max-h-16 w-auto max-w-full object-contain brightness-110 md:h-18 md:max-h-18"
              loading="eager"
              fetchPriority="low"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label={t('accessibility.primaryNavigation')}
            className="hidden items-center justify-center gap-3 md:flex lg:gap-6 xl:gap-8"
          >
            <Link
              href="/"
              className={`rounded-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white lg:text-sm ${
                pathname === '/'
                  ? 'text-rv-white'
                  : 'text-rv-white/50 hover:text-rv-white'
              }`}
            >
              {t('home')}
            </Link>

            <div
              ref={servicesContainerRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                ref={servicesTriggerRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-dropdown"
                onClick={() => setServicesOpen((open) => !open)}
                className={`flex items-center gap-1 rounded-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white lg:text-sm ${
                  servicesActive || servicesOpen
                    ? 'text-rv-white'
                    : 'text-rv-white/50 hover:text-rv-white'
                }`}
              >
                {t('services')}
                <span
                  aria-hidden="true"
                  className={`text-[0.65rem] transition-transform duration-200 motion-reduce:transition-none ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                id="desktop-services-dropdown"
                className={`absolute left-1/2 top-full w-[21rem] -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${
                  servicesOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-1 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08090c]/98 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <Link
                    href="/experience"
                    className="block rounded-xl px-4 py-4 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rv-white"
                  >
                    <span className="block text-sm font-bold text-white">
                      {t('serviceLinks.virtualTours')}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-white/45">
                      {t('serviceLinks.virtualToursDescription')}
                    </span>
                  </Link>
                  <div className="mx-3 h-px bg-white/10" />
                  <Link
                    href="/google-ads-search"
                    className="block rounded-xl px-4 py-4 transition-colors hover:bg-blue-400/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-300"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-white">
                      {t('serviceLinks.googleAds')}
                      <span className="rounded-full border border-blue-400/25 bg-blue-400/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-blue-300">
                        {t('serviceLinks.new')}
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-white/45">
                      {t('serviceLinks.googleAdsDescription')}
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {links.slice(1).map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`rounded-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white lg:text-sm ${
                  pathname === link.href || pathname === link.href + '/'
                    ? 'text-rv-white'
                    : 'text-rv-white/50 hover:text-rv-white'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right Side: Language Switcher + Hamburger */}
          <div className="flex items-center justify-end gap-4">
            <LanguageSwitcher />
            
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
            >
              {menuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full z-40 bg-rv-black/95 backdrop-blur-xl border-b border-rv-white/10 md:hidden"
          >
            <nav
              id="mobile-navigation"
              aria-label={t('accessibility.mobileNavigation')}
              className="flex flex-col py-6"
            >
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`px-8 py-4 text-lg transition-colors ${
                  pathname === '/'
                    ? 'text-rv-white'
                    : 'text-rv-white/60 hover:text-rv-white'
                }`}
              >
                {t('home')}
              </Link>

              <div className="border-y border-white/10 px-8 py-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  {t('services')}
                </p>
                <div className="flex flex-col">
                  <Link
                    href="/experience"
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-3 py-3 text-base transition-colors ${
                      pathname === '/experience'
                        ? 'bg-white/[0.06] text-white'
                        : 'text-white/65 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {t('serviceLinks.virtualTours')}
                  </Link>
                  <Link
                    href="/google-ads-search"
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-3 text-base transition-colors ${
                      pathname === '/google-ads-search'
                        ? 'bg-blue-400/[0.08] text-white'
                        : 'text-white/65 hover:bg-blue-400/[0.06] hover:text-white'
                    }`}
                  >
                    {t('serviceLinks.googleAds')}
                    <span className="rounded-full border border-blue-400/25 bg-blue-400/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-blue-300">
                      {t('serviceLinks.new')}
                    </span>
                  </Link>
                </div>
              </div>

              {links.slice(1).map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-8 py-4 text-lg transition-colors ${
                    pathname === link.href || pathname === link.href + '/'
                      ? 'text-rv-white'
                      : 'text-rv-white/60 hover:text-rv-white'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="px-8 py-4 border-t border-rv-white/10">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
