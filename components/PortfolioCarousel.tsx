'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder data - replace with your actual projects
const projects = [
  {
    id: 1,
    client: 'The Grand Hotel',
    category: 'Hospitality',
    type: '360° Tour & Photography',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    client: 'Lumina Restaurant',
    category: 'F&B',
    type: 'Cinematic Promo Video',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: 3,
    client: 'Equinox Fitness',
    category: 'Commercial Gym',
    type: 'Brand Photography',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    client: 'Vertex Showroom',
    category: 'Retail',
    type: 'Google Street View',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
  },
];

export default function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 bg-rv-black overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-rv-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-rv-white mb-4">
              Featured Work.
            </h2>
            <p className="text-rv-white/50 text-lg font-light max-w-md">
              A curated selection of spaces we have brought to life.
            </p>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-14 h-14 rounded-full border border-rv-white/20 flex items-center justify-center text-rv-white hover:bg-rv-white hover:text-rv-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-rv-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-14 h-14 rounded-full border border-rv-white/20 flex items-center justify-center text-rv-white hover:bg-rv-white hover:text-rv-black transition-colors disabled:opacity-30"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* The Carousel */}
      <div className="pl-6 md:pl-12 lg:pl-[calc(50vw-40rem)]" ref={emblaRef}>
        <div className="flex gap-6 cursor-grab active:cursor-grabbing">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden group">
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110 ease-linear"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-rv-black/90 via-rv-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top Tags */}
                  <div className="flex justify-between items-start">
                    <span className="bg-rv-black/40 backdrop-blur-md border border-rv-white/10 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-rv-white">
                      {project.category}
                    </span>
                    
                    {/* Fake play button for video projects */}
                    {project.type.includes('Video') && (
                      <div className="w-10 h-10 rounded-full bg-rv-white/10 backdrop-blur-md flex items-center justify-center border border-rv-white/20">
                        <Play className="w-4 h-4 text-rv-white fill-rv-white ml-1" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Text */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-rv-blue text-sm font-mono mb-2 uppercase tracking-widest">{project.type}</p>
                    <h3 className="text-3xl font-bold text-rv-white">{project.client}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}