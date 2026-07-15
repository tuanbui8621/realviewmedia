'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, RotateCcw, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

// Featured Virtual Tours Data
const projects = [
  {
    id: 1,
    client: 'Mai House Saigon',
    category: 'Hospitality',
    type: 'Hosted 360° Tour',
    image: '/images/mai.jpg',
    link: 'https://www.rvmedia.vn/MaiHouseSaigon/',
  },
  {
    id: 2,
    client: 'Oakwood Residence',
    category: 'Luxury Real Estate',
    type: 'Hosted 360° Tour',
    image: '/images/oakwood.png',
    link: 'https://www.rvmedia.vn/OakwoodResidence/',
  },
  {
    id: 3,
    client: 'Richlane Residence',
    category: 'Real Estate',
    type: 'Hosted 360° Tour',
    image: '/images/richlane.png',
    link: 'https://www.rvmedia.vn/Richlane/',
  },
  {
    id: 4,
    client: 'Hong Home',
    category: 'Residential',
    type: 'Hosted 360° Tour',
    image: '/images/hong.jpg',
    link: 'https://www.rvmedia.vn/HongHome/',
  },
  {
    id: 5,
    client: 'Artistic',
    category: 'Creative Space',
    type: 'Google Street View',
    image: '/images/art.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909643646!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGJ0cXk4Umc.!2m2!1d10.80392931471131!2d106.7330403859467!3f244.87!4f-2.3900000000000006!5f0.4000000000000002',
  },
  {
    id: 6,
    client: 'Lambo Kids',
    category: 'Retail & Education',
    type: 'Google Street View',
    image: '/images/lambo.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909687492!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzNsc1M2RlE.!2m2!1d10.76827922724603!2d106.6965455166198!3f270.39!4f0.6899999999999977!5f0.4000000000000002',
  },
  {
    id: 7,
    client: 'La Villa',
    category: 'Hospitality & F&B',
    type: 'Google Street View',
    image: '/images/lavilla.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909705812!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGoydHE1eFFF!2m2!1d10.80353445089009!2d106.7325190036474!3f115.59!4f-7.069999999999993!5f0.4000000000000002',
  },
  {
    id: 8,
    client: 'Aqua Clinic',
    category: 'Healthcare & Spa',
    type: 'Google Street View',
    image: '/images/aqua.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909721105!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2otNlRoRkE.!2m2!1d10.80254648297075!2d106.7151091939389!3f174.87!4f-0.12999999999999545!5f0.4000000000000002',
  },
];

export default function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const t = useTranslations('PortfolioCarousel');

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
    <section className="py-32 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-white/50 text-lg font-light max-w-md">
              {t('subtitle')}
            </p>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30"
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
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl"
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110 ease-linear"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Top Header */}
                  <div className="flex justify-between items-start">
                    <span className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                      {project.category}
                    </span>
                    
                    {/* 360 Action Button */}
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <RotateCcw className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Bottom Text & CTA */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      {project.type}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">{project.client}</h3>
                    
                    <div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                      {t('launchTour')} <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}