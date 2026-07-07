import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-rv-white/5 text-rv-white/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-rv-white mb-6 inline-block">
              RealView<span className="text-rv-blue">.</span>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-xs mb-8">
              Premium visual marketing and Google Business 360 virtual tours designed to attract more customers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-rv-white/10 flex items-center justify-center hover:bg-rv-white hover:text-rv-black transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-rv-white/10 flex items-center justify-center hover:bg-rv-white hover:text-rv-black transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-rv-white/10 flex items-center justify-center hover:bg-rv-white hover:text-rv-black transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-rv-white font-medium mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="hover:text-rv-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-rv-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-rv-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-rv-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services (Corrected Links) */}
          <div>
            <h4 className="text-rv-white font-medium mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/services/google-360" className="hover:text-rv-white transition-colors">Google 360 Tours</Link></li>
              <li><Link href="/services/commercial-photography" className="hover:text-rv-white transition-colors">Commercial Photography</Link></li>
              <li><Link href="/services/Virtual-Staging" className="hover:text-rv-white transition-colors">virtual-staging</Link></li>
              <li><Link href="/services/profile-optimization" className="hover:text-rv-white transition-colors">Profile Optimization</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-rv-white font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rv-blue shrink-0" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rv-blue shrink-0" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rv-blue shrink-0" />
                <span>hello@realviewmedia.com</span>
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