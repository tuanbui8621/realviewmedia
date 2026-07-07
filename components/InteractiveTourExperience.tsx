'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Navigation, CircleDot, X, Move } from 'lucide-react';

export default function InteractiveTourExperience() {
  const [isTourActive, setIsTourActive] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-[3rem] overflow-hidden border border-rv-white/10 shadow-2xl">
      
      {/* 1. The Content Layer (The Panorama) */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b')] bg-cover bg-center"
        animate={{ scale: isTourActive ? 1.2 : 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 2. The UI Overlay Layer */}
      <AnimatePresence>
        {!isTourActive ? (
          // MAP INTERFACE
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 p-6 flex flex-col justify-between z-10"
          >
            {/* Header */}
            <div className="flex gap-2">
              <div className="flex-1 bg-white/90 backdrop-blur-md h-12 rounded-full flex items-center px-4 shadow-lg text-black text-sm">
                <Search size={18} className="mr-2 text-gray-500" /> Search for the business...
              </div>
            </div>

            {/* The 360 Button (The "Wow" trigger) */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsTourActive(true)}
              className="self-center bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-full shadow-2xl flex items-center gap-2 text-white"
            >
              <CircleDot className="animate-pulse" />
              <span className="font-bold">Enter 360 Tour</span>
            </motion.button>

            {/* Bottom Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl text-black">
              <h3 className="font-bold text-lg">RealView Media HQ</h3>
              <p className="text-xs text-gray-600 mb-4">Ho Chi Minh City, VN</p>
              <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <Navigation size={16} /> Directions
              </button>
            </div>
          </motion.div>
        ) : (
          // TOUR INTERFACE (Appears after clicking)
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 p-6 flex items-start justify-end z-10"
          >
            <button 
              onClick={() => setIsTourActive(false)}
              className="bg-black/50 backdrop-blur-md p-3 rounded-full text-white border border-white/20 hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                <Move size={16} /> Drag to explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}