'use client';

import { motion } from 'framer-motion';

export default function FloatingContact() {
  // Animation settings for the pulsing effect
  const pulseEffect = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 0 rgba(255, 255, 255, 0.4)",
      "0 0 0 10px rgba(255, 255, 255, 0)",
      "0 0 0 0 rgba(255, 255, 255, 0)"
    ]
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-6">
      
      {/* Zalo Button */}
      <motion.a
        animate={pulseEffect}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        href="zalo://conversation?phone=0966888782"
        className="w-16 h-16 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center justify-center border border-gray-200 overflow-hidden hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="50" fill="#ffffff" />
          <path fill="#0068FF" d="M76.7,35C72,27.1,61.8,21.8,50.1,21.8c-17.6,0-31.9,12.3-31.9,27.5c0,8.6,4.5,16.4,11.5,21.6 c-1.2,3.8-3.8,7.1-4,7.3c-0.2,0.3-0.2,0.7,0,1c0.2,0.3,0.5,0.4,0.9,0.3c6.8-3.1,10.7-7.4,12.7-9.8c3.5,1.2,7.2,1.8,11.1,1.8 c17.6,0,31.9-12.3,31.9-27.5C82.2,42.5,80.3,38.3,76.7,35z" />
          <text x="50.5" y="55.5" fill="#ffffff" fontFamily="Arial" fontWeight="bold" fontSize="18" textAnchor="middle">Zalo</text>
        </svg>
      </motion.a>

      {/* Messenger Button */}
      <motion.a
        animate={pulseEffect}
        transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        href="https://m.me/realviewmediavn"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(0,132,255,0.4)] flex items-center justify-center overflow-hidden hover:scale-110 transition-transform"
        style={{
          background: 'linear-gradient(to top, #006AFF, #FF6B93)'
        }}
      >
        <svg viewBox="0 0 36 36" className="w-10 h-10">
          <path d="M18 0C8.06 0 0 7.6 0 17c0 5.37 2.68 10.15 6.84 13.3V36l6.18-3.41c1.6.44 3.26.68 5 .68 9.94 0 18-7.6 18-17S27.94 0 18 0zm1.88 22.53l-4.79-5.11-9.35 5.11 10.28-10.9 4.88 5.11 9.27-5.12-10.29 10.91z" fill="#ffffff"/>
        </svg>
      </motion.a>
    </div>
  );
}