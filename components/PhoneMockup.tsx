'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Navigation, X, ChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PhoneMockup() {
  const [isTourActive, setIsTourActive] = useState(false);
  const t = useTranslations('PhoneMockup');
  const tourUrl = "https://oakwood-richlane-residence.pages.dev/";

  return (
    <motion.div 
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="relative w-[320px] h-[640px] bg-[#0a0a0c] rounded-[3.5rem] border-[8px] border-[#1a1a1c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10 will-change-transform"
    >
      {/* MODERN HARDWARE: Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-inner">
        <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/5 flex items-center justify-center">
          <div className="w-1 h-1 bg-blue-600/30 rounded-full" />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
      </div>

      {/* THE CONTENT LAYER */}
      <div className="absolute inset-0 bg-black z-0">
        {isTourActive ? (
          <motion.iframe 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            src={tourUrl} 
            className="w-full h-full border-0"
            title={t('iframeTitle')}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <Image 
              src="/images/oakwood.png" 
              alt={t('imageAlt')}
              fill 
              priority
              sizes="320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          </div>
        )}
      </div>

      {/* ULTRA-PREMIUM UI OVERLAY */}
      <AnimatePresence>
        {!isTourActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 flex flex-col justify-between"
          >
            {/* Top Navigation */}
            <div className="pt-12 px-4 flex items-center gap-2">
              <div aria-hidden="true" className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg">
                <ChevronLeft size={20} />
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg h-10 rounded-full flex items-center px-4 text-white/80 text-xs font-medium">
                <Search size={14} className="mr-2 text-white" /> {t('searchPlaceholder')}
              </div>
            </div>

            {/* Middle Action Button */}
            <div className="flex-1 flex items-center justify-center translate-y-12">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                <button 
                  onClick={() => setIsTourActive(true)}
                  className="relative bg-white/20 backdrop-blur-xl border border-white/40 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-3 text-white hover:bg-white/30 transition-all hover:scale-105 active:scale-95 group"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 24"
                    className="h-5 w-6 shrink-0 overflow-visible text-white"
                    fill="none"
                  >
                    <path
                      d="M4.5 13.5C5.7 18 10.2 21 16 21c5.3 0 9.5-2.5 11.1-6.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="m24.7 15.2 2.8-.9.7 2.9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text
                      x="16"
                      y="12.5"
                      fill="currentColor"
                      fontSize="8.5"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {t('icon360')}
                    </text>
                  </svg>
                  <span className="font-bold text-[13px] tracking-widest uppercase">{t('launchTour')}</span>
                </button>
              </div>
            </div>

            {/* Bottom iOS Style Card */}
            <div className="bg-white rounded-t-[2rem] p-6 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative transform translate-y-2">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full absolute top-3 left-1/2 -translate-x-1/2" />
              
              <p className="font-black text-2xl text-gray-900 mt-2 tracking-tight">{t('propertyName')}</p>
              
              <div className="flex items-center text-sm text-gray-500 mt-2 gap-1.5">
                <span>{t('summary')}</span>
              </div>
              
              <div className="flex gap-3 mt-6">
                <div className="flex-[2] bg-[#000] text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                  <Navigation size={16} /> {t('directions')}
                </div>
                <div className="flex-1 bg-gray-100 text-gray-900 py-3.5 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
                  {t('save')}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close Tour UI */}
      {isTourActive && (
        <button 
          onClick={() => setIsTourActive(false)}
          aria-label={t('closeTour')}
          className="absolute top-12 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/20 p-2.5 rounded-full text-white hover:bg-black/80 transition-colors shadow-xl"
        >
          <X size={16} />
        </button>
      )}
    </motion.div>
  );
}
