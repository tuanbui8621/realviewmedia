import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';

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
              Premium visual marketing and Google Business 360 virtual tours engineered to turn local search traffic into physical foot traffic.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/realviewmedia_vn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rv-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white transition-all"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/realviewmediavn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-rv-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all"
              >
                <FaFacebook className="w-4 h-4" />
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
                <a href="mailto:hello@realviewmedia.com" className="flex items-center gap-3 hover:text-rv-white transition-colors">
                  <Mail className="w-5 h-5 text-rv-blue shrink-0" />
                  <span>contact@rvmedia.vn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-rv-white/10 text-xs font-light">
          <p>&copy; 2024 RealView Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-rv-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rv-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}