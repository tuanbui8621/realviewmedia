import { Link } from '@/navigation';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-rv-white/5 text-rv-white/60">
      <div className="container mx-auto px-6 md:px-12">
        {/* Changed to a 4-column grid where the Brand takes up 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          {/* Brand Column - Now spans 2 columns for a premium, spacious look */}
          <div className="md:col-span-2 pr-8">
            <Link
  href="/"
  aria-label={t('accessibility.home')}
  className="-mb-8 inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
>
  <Image
  src="/images/logo2.png"
  alt="RealView Media"
  width={300}
  height={85}
  sizes="160px"
  className="block h-auto w-50 -translate-y-10"
/>
</Link>
            <p className="-mt-10 text-sm font-light leading-relaxed max-w-sm mb-8">
              {t('tagline')}
            </p>
            <div
              role="group"
              aria-label={t('accessibility.socialMedia')}
              className="flex gap-6"
            >
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/realviewmedia_vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('accessibility.instagram')}
                className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                {/* Instagram Gradient & Glow Layer */}
                <div aria-hidden="true" className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_0_20px_rgba(220,39,67,0.5)]" />
                
                {/* Icon Layer */}
                <FaInstagram aria-hidden="true" className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/realviewmediavn/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('accessibility.facebook')}
                className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                {/* Facebook Color & Glow Layer */}
                <div aria-hidden="true" className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1877F2] shadow-[0_0_20px_rgba(24,119,242,0.5)]" />
                
                {/* Icon Layer */}
                <FaFacebook aria-hidden="true" className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <nav aria-labelledby="footer-navigation-heading" className="md:col-span-1">
            <h2 id="footer-navigation-heading" className="text-rv-white font-medium mb-6">{t('sections.nav')}</h2>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('nav.home')}</Link></li>
              <li><Link href="/experience" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('nav.experience')}</Link></li>
              <li><Link href="/portfolio" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('nav.portfolio')}</Link></li>
              <li><Link href="/about" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('nav.about')}</Link></li>
            </ul>
          </nav>

          {/* Contact Column */}
          <section aria-labelledby="footer-contact-heading" className="md:col-span-1">
            <h2 id="footer-contact-heading" className="text-rv-white font-medium mb-6">{t('sections.contact')}</h2>
            <address className="not-italic">
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="w-5 h-5 text-rv-blue shrink-0" />
                  <span>{t('contact.location')}</span>
                </li>
                <li>
                  <a href="tel:+84966888782" className="flex items-center gap-3 rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">
                    <Phone aria-hidden="true" className="w-5 h-5 text-rv-blue shrink-0" />
                    <span>{t('contact.phone')}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@rvmedia.vn" className="flex items-center gap-3 rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">
                    <Mail aria-hidden="true" className="w-5 h-5 text-rv-blue shrink-0" />
                    <span>{t('contact.email')}</span>
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-rv-white/10 text-xs font-light">
          <p>{t('copyright', { year: currentYear })}</p>
          <nav aria-label={t('accessibility.legal')} className="flex gap-6">
            <Link href="/privacy" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('legal.privacy')}</Link>
            <Link href="/terms" className="rounded-sm hover:text-rv-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rv-white">{t('legal.terms')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
