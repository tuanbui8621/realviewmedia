'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const locale = useLocale();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-rv-black min-h-screen text-rv-white">
      <Navbar />
      <main>

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t('Hero.h1')}</h1>
              <p className="text-xl text-rv-white/60 font-light max-w-lg mx-auto">
                {t('Hero.p')}
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Instant Chat Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-start text-left">
                {/* Icon at top left */}
                <MessageCircle className="w-10 h-10 text-rv-blue mb-6" />
                
                <h2 className="text-2xl font-bold mb-6">{t('Methods.chat_title')}</h2>
                
                {/* Buttons at bottom */}
                <div className="flex flex-col gap-4 w-full mt-auto">
                  <a 
                    href="zalo://conversation?phone=0966888782" 
                    className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('Methods.zalo_btn')}
                  </a>
                  <a 
                    href="https://m.me/realviewmediavn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full bg-[#0084FF] text-white py-4 rounded-xl font-bold hover:bg-[#0073e6] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    {t('Methods.messenger_btn')}
                  </a>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col">
                <Mail className="w-10 h-10 text-rv-blue mb-6" />
                <h2 className="text-2xl font-bold mb-2">{t('Methods.direct_title')}</h2>
                <p className="text-white/60 mb-8">{t('Methods.direct_desc')}</p>
                
                <div className="flex flex-col gap-4 mt-auto">
                  <a href="mailto:contact@rvmedia.vn" className="flex items-center gap-3 text-white hover:text-rv-blue transition-colors font-medium">
                    <Mail className="w-5 h-5" />
                    contact@rvmedia.vn
                  </a>
                  <a href="tel:+84966888782" className="flex items-center gap-3 text-white hover:text-rv-blue transition-colors font-medium">
                    <Phone className="w-5 h-5" />
                    +84 966 888 782
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 text-rv-white/40">
              {locale === 'vi' ? <MapPin className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
              <span className="text-sm uppercase tracking-widest font-semibold">{t('Support')}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
