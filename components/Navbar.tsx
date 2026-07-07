'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  // Define the display name AND the exact URL path
  const navLinks = [
    { name: 'Experience', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-rv-black/80 backdrop-blur-md border-b border-rv-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Placement */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-rv-white">
          RealView<span className="text-rv-blue">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`text-base font-medium transition-colors ${
                  isActive ? 'text-rv-white' : 'text-rv-white/50 hover:text-rv-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link href="/contact" className="px-6 py-3 rounded-full bg-rv-white text-rv-black font-semibold text-base hover:scale-105 transition-transform duration-300 inline-block">
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.header>
  );
}