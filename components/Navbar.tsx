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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // Use fixed heights (h-24 / h-20) instead of padding changes to stop the jump
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center ${
        scrolled
          ? 'h-20 bg-rv-black/80 backdrop-blur-md border-b border-rv-white/10'
          : 'h-24 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Logo - Added specific mobile sizing */}
        <Link href="/" className="flex items-center justify-start">
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
        <nav className="hidden md:flex gap-8 justify-center items-center">
          {['Experience', 'Portfolio', 'About', 'Contact'].map((item) => {
            const path = `/${item.toLowerCase() === 'experience' ? 'experience' : item.toLowerCase()}`;
            const isActive = pathname === path;
            return (
              <Link key={item} href={path} className={`text-sm font-medium transition-colors ${isActive ? 'text-rv-white' : 'text-rv-white/50 hover:text-rv-white'}`}>
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block" />
      </div>
    </motion.header>
  );
}