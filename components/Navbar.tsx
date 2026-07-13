'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', path: '/experience' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-rv-black/80 backdrop-blur-md border-b border-rv-white/10'
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Changed to grid-cols-3 to lock the nav in the center */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Logo (Col 1) */}
        <Link href="/" className="flex items-center justify-start">
          <Image 
            src="/images/logowhite.png" 
            alt="RealView Media Logo" 
            width={300} 
            height={100} 
            className="h-28 w-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] brightness-110 contrast-125" 
            priority 
          />
        </Link>

        {/* Desktop Navigation (Col 2 - Centered) */}
        <nav className="hidden md:flex gap-8 justify-center items-center">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-rv-white'
                    : 'text-rv-white/50 hover:text-rv-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Empty Spacer (Col 3) to maintain balance */}
        <div className="hidden md:block" />
        
      </div>
    </motion.header>
  );
}