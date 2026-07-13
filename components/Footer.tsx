import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-rv-white/5 text-rv-white/60">
      <div className="container mx-auto px-6 md:px-12">
        {/* Changed to a 4-column grid where the Brand takes up 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          {/* Brand Column - Now spans 2 columns for a premium, spacious look */}
          <div className="md:col-span-2 pr-8">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-rv-white mb-6 inline-block">
              RealView<span className="text-rv-blue">.</span>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-sm mb-8">
              Boost your Google Business Profile with 360° virtual tours and premium visual content that help your business get discovered, earn trust, and drive more customers.
            </p>
            <div className="flex gap-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/realviewmedia_vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent"
              >
                {/* Instagram Gradient & Glow Layer */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_0_20px_rgba(220,39,67,0.5)]" />
                
                {/* Icon Layer */}
                <FaInstagram className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/realviewmediavn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-transparent"
              >
                {/* Facebook Color & Glow Layer */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1877F2] shadow-[0_0_20px_rgba(24,119,242,0.5)]" />
                
                {/* Icon Layer */}
                <FaFacebook className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h4 className="text-rv-white font-medium mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="hover:text-rv-white transition-colors">Home</Link></li>
              <li><Link href="/experience" className="hover:text-rv-white transition-colors">Experience</Link></li>
              <li><Link href="/portfolio" className="hover:text-rv-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-rv-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1">
            <h4 className="text-rv-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rv-blue shrink-0" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
              <li>
                <a href="tel:+84966888782" className="flex items-center gap-3 hover:text-rv-white transition-colors">
                  <Phone className="w-5 h-5 text-rv-blue shrink-0" />
                  <span>+84 96 688 87 82</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@rvmedia.vn" className="flex items-center gap-3 hover:text-rv-white transition-colors">
                  <Mail className="w-5 h-5 text-rv-blue shrink-0" />
                  <span>contact@rvmedia.vn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-rv-white/10 text-xs font-light">
          <p>&copy; {currentYear} RealView Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-rv-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rv-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}