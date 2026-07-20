'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  useEffect(() => {
    // Check scroll position immediately on load to prevent jumping
    setScrolled(window.scrollY > 50);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with translation keys
  const links = [
    { key: 'home', href: '/' },
    { key: 'experience', href: '/experience' },
    { key: 'portfolio', href: '/portfolio' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ];

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
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="RealView Media Logo"
              width={200}
              height={80}
              className="h-24 md:h-34 w-auto brightness-110"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
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
              className="md:hidden text-white"
              aria-label="Toggle Menu"
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
            <nav className="flex flex-col py-6">
              {links.map((link) => (
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