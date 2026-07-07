'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid, Camera, Box, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Google 360 Tours',
    description: 'Immersive digital twins integrated directly into Google Maps and Search.',
    icon: LayoutGrid,
    href: '/services/google-360',
  },
  {
    title: 'Commercial Photography',
    description: 'High-fidelity imagery that elevates your brand perception.',
    icon: Camera,
    href: '/services/commercial-photography',
  },
  {
    title: 'Virtual Staging',
    description: 'Transform empty spaces into inviting, furnished environments.',
    icon: Box,
    href: '/services/virtual-staging',
  },
  {
    title: 'Profile Optimization',
    description: 'Data-driven management to ensure you get found and chosen.',
    icon: BarChart3,
    href: '/services/profile-optimization',
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-[#050505] text-rv-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-rv-white/50 max-w-xl mx-auto text-lg font-light"
          >
            We bridge the gap between physical spaces and digital engagement with precision-engineered visual assets.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-rv-white/5 border border-rv-white/10 hover:border-rv-blue/50 transition-all duration-500 hover:-translate-y-2 hover:bg-rv-white/10 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-rv-blue/10 flex items-center justify-center mb-6 border border-rv-blue/20 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-5 h-5 text-rv-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-rv-white/50 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <Link href={service.href} className="inline-flex items-center gap-2 text-rv-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}