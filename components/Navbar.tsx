'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLenis } from '@studio-freight/react-lenis';
import LanguageSwitcher from './LanguageSwitcher';

const NAVIGATION_LINKS = [
  { key: 'home', href: '/' },
  { key: 'experience', href: '/experience' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

const MOBILE_MENU_ID = 'mobile-navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    const target = event.currentTarget.target;
    const isModifiedActivation =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;
    const isExternal =
      new URL(event.currentTarget.href).origin !== window.location.origin;

    if (
      pathname !== '/' ||
      event.defaultPrevented ||
      isModifiedActivation ||
      (target !== '' && target !== '_self') ||
      isExternal
    ) {
      return;
    }

    event.preventDefault();

    if (window.scrollY <= 0) return;

    if (lenis) {
      lenis.scrollTo(0, { immediate: Boolean(shouldReduceMotion) });
      return;
    }

    if (shouldReduceMotion) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let animationFrameId: number | null = null;
    let lastScrolled = false;

    const updateScrolledState = () => {
      animationFrameId = null;
      const nextScrolled = window.scrollY > 50;

      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateScrolledState);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

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
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label={t('accessibility.home')}
            className="flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-rv-black"
          >
            <Image
              src="/images/logo5.png"
              alt=""
              width={172}
              height={64}
              sizes="(min-width: 768px) 129px, 172px"
              className="h-16 md:h-12 w-auto brightness-110"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label={t('accessibility.primaryNavigation')}
            className="hidden md:flex justify-center gap-8"
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={link.href === '/' ? handleHomeClick : undefined}
                aria-current={
                  pathname === link.href || pathname === `${link.href}/`
                    ? 'page'
                    : undefined
                }
                className={`rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-rv-black ${
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
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-rv-black md:hidden"
              aria-label={
                menuOpen
                  ? t('accessibility.closeMenu')
                  : t('accessibility.openMenu')
              }
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {menuOpen ? (
                <X aria-hidden="true" className="w-8 h-8" />
              ) : (
                <Menu aria-hidden="true" className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full z-40 bg-rv-black/95 backdrop-blur-xl border-b border-rv-white/10 md:hidden"
          >
            <nav
              aria-label={t('accessibility.mobileNavigation')}
              className="flex flex-col py-6"
            >
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={
                    link.href === '/'
                      ? handleHomeClick
                      : () => setMenuOpen(false)
                  }
                  aria-current={
                    pathname === link.href || pathname === `${link.href}/`
                      ? 'page'
                      : undefined
                  }
                  className={`px-8 py-4 text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rv-white ${
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
