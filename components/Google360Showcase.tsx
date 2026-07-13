'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, MousePointer2, Star, Building, Utensils, Home } from 'lucide-react';

// This is our database of tours.
const tours = [
  {
    id: 'lavilla',
    name: 'La Villa French Restaurant',
    category: 'Fine Dining',
    icon: Utensils, // Changed the icon to match the restaurant
    subtitle: 'See inside • Google Street View',
    rating: 4.5,
    reviews: 428,
    // This is the correct La Villa embed link you provided
    src: 'https://www.google.com/maps/embed?pb=!4v1783502755453!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGJ0cXk4Umc.!2m2!1d10.80392931471131!2d106.7330403859467!3f252.06813083339418!4f-3.775974010641903!5f0.4000000000000002',
    metrics: { views: '1.8M+', clicks: '+40%', integration: '100%' }
  },
  {
    id: 'maihouse',
    name: 'Mai House Saigon',
    category: 'Luxury Hotel',
    icon: Building,
    subtitle: 'See inside • Google Street View',
    rating: 4.9,
    reviews: 856,
    // Note: You will need to grab the iframe embed link for Mai House just like you did for La Villa!
    // The shortlink (maps.app.goo.gl) will not render inside an iframe.
    src: 'https://www.google.com/maps/embed?pb=!4v1783503543602!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUTdqSEFFMmU0RTdZQUF2RGQ.!2m2!1d10.77946108673827!2d106.6922590313542!3f260.6253168948269!4f2.0918829855022523!5f0.4000000000000002',
    metrics: { views: '4.5M+', clicks: '+62%', integration: '100%' }
  },
  {
    id: 'oakwood',
    name: 'Oakwood Residence',
    category: 'Hospitality',
    icon: Home,
    subtitle: 'See inside • Google Street View',
    rating: 5.0,
    reviews: 241,
    // Note: Put your actual Oakwood embed link here!
    src: 'https://www.google.com/maps/embed?pb=!4v1783503748808!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFhfSkxnaEFF!2m2!1d10.73025251128092!2d106.704651766457!3f240.97247005595358!4f-0.25894710431579426!5f0.4000000000000002', 
    metrics: { views: '2.1M+', clicks: '+45%', integration: '100%' }
  }
];

export default function Google360Showcase() {
  const [activeTour, setActiveTour] = useState(tours[0]);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* THE SELECTOR MENU */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {tours.map((tour) => {
            const isActive = activeTour.id === tour.id;
            const Icon = tour.icon;
            return (
              <button
                key={tour.id}
                onClick={() => setActiveTour(tour)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  isActive 
                    ? 'bg-rv-white text-rv-black border-rv-white scale-105' 
                    : 'bg-transparent text-rv-white/60 border-rv-white/10 hover:border-rv-white/30 hover:text-rv-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-rv-blue' : 'text-rv-white/40'}`} />
                {tour.category}
              </button>
            );
          })}
        </div>

        {/* THE IMMERSIVE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-rv-white/10 group bg-[#111]"
        >
          {/* We use AnimatePresence to smoothly fade when switching tours */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTour.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <iframe 
                src={activeTour.src} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full grayscale-[20%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </AnimatePresence>

          {/* Floating Case Study Header Overlay (Updates Dynamically) */}
          <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-start gap-4 max-w-sm pointer-events-none">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">{activeTour.name}</h4>
              <p className="text-white/70 text-sm mt-1">{activeTour.subtitle}</p>
              <div className="mt-2 flex items-center gap-1 text-yellow-400 text-sm font-bold">
                {activeTour.rating.toFixed(1)}
                {[...Array(Math.floor(activeTour.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
                <span className="text-white/40 font-normal ml-1">({activeTour.reviews})</span>
              </div>
            </div>
          </div>
          
          {/* Interaction Prompt Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full pointer-events-none flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
               <MousePointer2 className="w-4 h-4 text-white animate-pulse" />
            </div>
            <p className="text-sm font-light text-white tracking-wide">
               Click and drag to explore the space
            </p>
          </div>
          
          <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[2rem] z-20" />
        </motion.div>

        {/* Case Study Metrics Bar (Updates Dynamically) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
           <motion.div 
             key={`views-${activeTour.id}`}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-rv-white/5 border border-rv-white/10 rounded-3xl p-8 flex flex-col justify-center text-center"
           >
             <div className="text-4xl font-bold text-rv-blue mb-2">{activeTour.metrics.views}</div>
             <div className="text-sm text-rv-white/50 tracking-wide uppercase">Local Organic Views</div>
           </motion.div>
           
           <motion.div 
             key={`clicks-${activeTour.id}`}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-rv-white/5 border border-rv-white/10 rounded-3xl p-8 flex flex-col justify-center text-center"
           >
             <div className="text-4xl font-bold text-rv-blue mb-2">{activeTour.metrics.clicks}</div>
             <div className="text-sm text-rv-white/50 tracking-wide uppercase">Increase in Maps Clicks</div>
           </motion.div>

           <motion.div 
             key={`integration-${activeTour.id}`}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-rv-white/5 border border-rv-white/10 rounded-3xl p-8 flex flex-col justify-center text-center"
           >
             <div className="text-4xl font-bold text-rv-blue mb-2">{activeTour.metrics.integration}</div>
             <div className="text-sm text-rv-white/50 tracking-wide uppercase">Google Profile Integration</div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}