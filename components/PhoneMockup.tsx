'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Navigation, Star, ArrowRight, X, Compass, ChevronLeft, Share, MoreVertical } from 'lucide-react';

export default function PhoneMockup() {
  const [isTourActive, setIsTourActive] = useState(false);
  const tourUrl = "https://oakwood-richlane-residence.pages.dev/";

  return (
    <motion.div 
      initial={{ y: 100, rotate: -10 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[280px] h-[550px] bg-white rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden mx-auto"
    >
      {/* 1. THE CONTENT LAYER */}
      <div className="absolute inset-0 bg-gray-100 z-0">
        {isTourActive ? (
          <iframe 
            src={tourUrl} 
            className="w-full h-full border-0"
            title="360 Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b')] bg-cover bg-center" />
        )}
      </div>

      {/* 2. GOOGLE MAPS UI OVERLAY */}
      <AnimatePresence>
        {!isTourActive && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex flex-col justify-between"
          >
            {/* Top Search Bar */}
            <div className="p-4 flex items-center gap-2">
              <div className="bg-white p-2 rounded-full shadow-md"><ChevronLeft size={20} className="text-gray-700" /></div>
              <div className="flex-1 bg-white shadow-md h-10 rounded-full flex items-center px-4 text-gray-500 text-xs">
                <Search size={14} className="mr-2" /> Oakwood Residence...
              </div>
              <div className="bg-white p-2 rounded-full shadow-md"><Share size={16} /></div>
              <div className="bg-white p-2 rounded-full shadow-md"><MoreVertical size={16} /></div>
            </div>

            {/* Middle 360 Badge */}
            <motion.button 
              onClick={() => setIsTourActive(true)}
              className="self-center bg-white/90 backdrop-blur border border-gray-200 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-black mb-10"
            >
              <Compass className="text-blue-600" size={16} />
              <span className="font-bold text-[10px] uppercase">360° Tour</span>
            </motion.button>

            {/* Bottom Business Card */}
            <div className="bg-white rounded-t-3xl p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.15)]">
              <h3 className="font-bold text-lg text-black">Oakwood Residence</h3>
              <div className="flex items-center text-xs text-gray-600 mt-1 gap-1">
                <span className="font-bold text-yellow-600">4.5</span>
                <Star size={12} className="fill-yellow-500 text-yellow-500" />
                <span>(741) • 5-star hotel</span>
              </div>
              
              {/* Google Maps Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-[#1a73e8] text-white py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-1">
                  <Navigation size={14} /> Directions
                </button>
                <button className="flex-1 bg-[#d2e3fc] text-[#1967d2] py-2.5 rounded-full font-bold text-xs">
                  Start
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close Tour UI */}
      {isTourActive && (
        <button 
          onClick={() => setIsTourActive(false)}
          className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white"
        >
          <X size={16} />
        </button>
      )}

      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-20" />
    </motion.div>
  );
}