'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, RotateCcw, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { highQualityImageLoader } from '@/lib/image-loaders';

const industries = [
  'all',
  'hotels',
  'residential',
  'restaurants',
  'retailEducation',
  'creativeSpaces',
  'wellnessSpa',
] as const;

type Industry = Exclude<(typeof industries)[number], 'all'>;

// Featured Virtual Tours Data
const projects = [
  {
    id: 1,
    key: 'maiHouse' as const,
    image: '/images/mai.jpg',
    link: 'https://www.rvmedia.vn/MaiHouseSaigon/',
    standaloneTour: true,
    industry: 'hotels' as Industry,
  },
  {
    id: 2,
    key: 'oakwood' as const,
    image: '/images/oakwood.png',
    link: 'https://www.rvmedia.vn/OakwoodResidence/',
    standaloneTour: true,
    industry: 'residential' as Industry,
  },
  {
    id: 3,
    key: 'richlane' as const,
    image: '/images/Richlane.png',
    link: 'https://www.rvmedia.vn/Richlane/',
    standaloneTour: true,
    industry: 'residential' as Industry,
  },
  {
    id: 4,
    key: 'hongHome' as const,
    image: '/images/hong.jpg',
    link: 'https://www.rvmedia.vn/HongHome/',
    standaloneTour: true,
    industry: 'residential' as Industry,
  },
  {
    id: 5,
    key: 'artistic' as const,
    image: '/images/art.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909643646!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGJ0cXk4Umc.!2m2!1d10.80392931471131!2d106.7330403859467!3f244.87!4f-2.3900000000000006!5f0.4000000000000002',
    industry: 'creativeSpaces' as Industry,
  },
  {
    id: 6,
    key: 'lamboKids' as const,
    image: '/images/lambo.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909687492!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzNsc1M2RlE.!2m2!1d10.76827922724603!2d106.6965455166198!3f270.39!4f0.6899999999999977!5f0.4000000000000002',
    industry: 'retailEducation' as Industry,
  },
  {
    id: 7,
    key: 'laVilla' as const,
    image: '/images/lavilla.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909705812!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGoydHE1eFFF!2m2!1d10.80353445089009!2d106.7325190036474!3f115.59!4f-7.069999999999993!5f0.4000000000000002',
    industry: 'restaurants' as Industry,
  },
  {
    id: 8,
    key: 'aquaClinic' as const,
    image: '/images/aqua.jpg',
    link: 'https://www.google.com/maps/embed?pb=!4v1783909721105!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ2otNlRoRkE.!2m2!1d10.80254648297075!2d106.7151091939389!3f174.87!4f-0.12999999999999545!5f0.4000000000000002',
    industry: 'wellnessSpa' as Industry,
  },
];

export default function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const t = useTranslations('PortfolioCarousel');
  const [activeIndustry, setActiveIndustry] = useState<(typeof industries)[number]>('all');
  const filteredProjects = activeIndustry === 'all'
    ? projects
    : projects.filter((project) => project.industry === activeIndustry);
  const projectCopy = {
    maiHouse: {
      client: t('projects.maiHouse.client'),
      category: t('projects.maiHouse.category'),
      type: t('projects.maiHouse.type'),
      alt: t('projects.maiHouse.alt'),
    },
    oakwood: {
      client: t('projects.oakwood.client'),
      category: t('projects.oakwood.category'),
      type: t('projects.oakwood.type'),
      alt: t('projects.oakwood.alt'),
    },
    richlane: {
      client: t('projects.richlane.client'),
      category: t('projects.richlane.category'),
      type: t('projects.richlane.type'),
      alt: t('projects.richlane.alt'),
    },
    hongHome: {
      client: t('projects.hongHome.client'),
      category: t('projects.hongHome.category'),
      type: t('projects.hongHome.type'),
      alt: t('projects.hongHome.alt'),
    },
    artistic: {
      client: t('projects.artistic.client'),
      category: t('projects.artistic.category'),
      type: t('projects.artistic.type'),
      alt: t('projects.artistic.alt'),
    },
    lamboKids: {
      client: t('projects.lamboKids.client'),
      category: t('projects.lamboKids.category'),
      type: t('projects.lamboKids.type'),
      alt: t('projects.lamboKids.alt'),
    },
    laVilla: {
      client: t('projects.laVilla.client'),
      category: t('projects.laVilla.category'),
      type: t('projects.laVilla.type'),
      alt: t('projects.laVilla.alt'),
    },
    aquaClinic: {
      client: t('projects.aquaClinic.client'),
      category: t('projects.aquaClinic.category'),
      type: t('projects.aquaClinic.type'),
      alt: t('projects.aquaClinic.alt'),
    },
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
  }, [activeIndustry, emblaApi]);

  const subscribeToCarousel = useCallback((onStoreChange: () => void) => {
    if (!emblaApi) return () => undefined;

    emblaApi.on('select', onStoreChange);
    emblaApi.on('reInit', onStoreChange);

    return () => {
      emblaApi.off('select', onStoreChange);
      emblaApi.off('reInit', onStoreChange);
    };
  }, [emblaApi]);

  const getCarouselSnapshot = useCallback(() => {
    if (!emblaApi) return 1;

    return (
      emblaApi.selectedScrollSnap() * 4
      + Number(emblaApi.canScrollPrev()) * 2
      + Number(emblaApi.canScrollNext())
    );
  }, [emblaApi]);

  const carouselSnapshot = useSyncExternalStore(
    subscribeToCarousel,
    getCarouselSnapshot,
    () => 1,
  );
  const canScrollPrev = Boolean(carouselSnapshot & 2);
  const canScrollNext = Boolean(carouselSnapshot & 1);

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white md:py-32">
      <div className="container mx-auto mb-10 max-w-7xl">
        <div className="border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-white/50 text-lg font-light max-w-md">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div
          className="mt-6 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label={t('filterLabel')}
        >
          {industries.map((industry) => {
            const isActive = activeIndustry === industry;

            return (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveIndustry(industry)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                  isActive
                    ? 'border-[#65a0ff] bg-[#1468ff] text-white'
                    : 'border-white/10 text-white/55 hover:border-[#65a0ff]/60 hover:text-white'
                }`}
              >
                {t(`industries.${industry}`)}
              </button>
            );
          })}
        </div>
      </div>

      {/* The Carousel */}
      <div className="container relative mx-auto max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 cursor-grab active:cursor-grabbing">
          {filteredProjects.map((project, index) => {
            const copy = projectCopy[project.key];
            const ProjectLink = project.standaloneTour ? 'a' : Link;

            return (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-[0_0_76%] min-w-0 sm:flex-[0_0_58%] md:flex-[0_0_40%] lg:flex-[0_0_30%]"
            >
              <ProjectLink
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('openProject', { client: copy.client })}
                className="block relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl"
              >
                {/* Image Background */}
                <div className="absolute inset-0 transition-transform duration-[10s] group-hover:scale-110 ease-linear">
                  <Image
                    src={project.image}
                    alt={copy.alt}
                    fill
                    sizes="960px"
                    quality={90}
                    loader={highQualityImageLoader}
                    loading="lazy"
                    draggable={false}
                    className="pointer-events-none select-none object-cover object-center"
                  />
                </div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  {/* Top Header */}
                  <div className="flex justify-between items-start">
                    <span className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                      {copy.category}
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
                      {copy.type}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">{copy.client}</h3>
                    
                    <div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                      {t('launchTour')} <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </ProjectLink>
              </motion.div>
            );
          })}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label={t('previousProject')}
          className="group absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#65a0ff]/80 bg-[#071a35]/90 text-white shadow-[0_0_18px_rgba(20,104,255,0.7),inset_0_0_14px_rgba(101,160,255,0.18)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-white hover:bg-[#1468ff] hover:shadow-[0_0_30px_rgba(101,160,255,0.95),inset_0_0_18px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] disabled:cursor-default disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-[#65a0ff]/80 disabled:hover:bg-[#071a35]/90 md:-left-6 md:h-14 md:w-14 motion-reduce:transition-colors"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-[#65a0ff]/70 [animation:ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] group-hover:[animation-duration:1.6s] group-disabled:opacity-0 motion-reduce:animate-none"
          />
          <ArrowLeft className="relative h-5 w-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label={t('nextProject')}
          className="group absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#65a0ff]/80 bg-[#071a35]/90 text-white shadow-[0_0_18px_rgba(20,104,255,0.7),inset_0_0_14px_rgba(101,160,255,0.18)] backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-white hover:bg-[#1468ff] hover:shadow-[0_0_30px_rgba(101,160,255,0.95),inset_0_0_18px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] disabled:cursor-default disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-[#65a0ff]/80 disabled:hover:bg-[#071a35]/90 md:-right-6 md:h-14 md:w-14 motion-reduce:transition-colors"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-[#65a0ff]/70 [animation:ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] group-hover:[animation-duration:1.6s] group-disabled:opacity-0 motion-reduce:animate-none"
          />
          <ArrowRight className="relative h-5 w-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]" />
        </button>
      </div>
    </section>
  );
}
