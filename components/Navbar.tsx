'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check scroll position immediately on load to prevent jumping
    setScrolled(window.scrollY > 50);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        // Specific transitions prevent conflicts with Framer Motion
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
              src="/images/logowhite.png"
              alt="RealView Media Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto brightness-110"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-rv-white'
                    : 'text-rv-white/50 hover:text-rv-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Spacer */}
          <div className="hidden md:block" />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden justify-self-end text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
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
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-8 py-4 text-lg transition-colors ${
                    pathname === link.href
                      ? 'text-rv-white'
                      : 'text-rv-white/60 hover:text-rv-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}