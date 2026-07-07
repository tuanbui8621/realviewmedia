'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, Box, Wand2, Zap } from 'lucide-react';

export default function VirtualStagingPage() {
  return (
    <main className="relative bg-rv-black min-h-screen text-rv-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          Virtual <br />
          <span className="text-rv-white/40">Possibilities.</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-rv-white/60 max-w-2xl mx-auto font-light">
          We don't just capture existing spaces—we visualize their full potential through digital staging and custom interactive environments.
        </p>
      </section>

      {/* The "Why" */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Wand2 className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Virtual Staging</h3>
            <p className="text-rv-white/60 text-sm">Turn empty rooms into fully furnished, inviting spaces without the cost or hassle of physical furniture.</p>
          </div>
          <div className="space-y-4">
            <Box className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Custom Interfaces</h3>
            <p className="text-rv-white/60 text-sm">Add custom hotspots, navigation menus, and branded overlays that go beyond the basic Google Maps experience.</p>
          </div>
          <div className="space-y-4">
            <Zap className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Rapid Visualization</h3>
            <p className="text-rv-white/60 text-sm">Help your clients see the future of a renovation before a single wall is moved.</p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter">Imagination, Digitized.</h2>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            The biggest hurdle in real estate and retail isn't the space itself—it's the client's inability to visualize what the space *could* be. By integrating virtual staging directly into our 360-degree tours, we remove that mental friction entirely.
          </p>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            We provide the "wow" factor that leads to higher engagement, longer session times, and faster decision-making. Your clients aren't just looking at a photo; they are stepping into a vision.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-rv-blue text-rv-white px-8 py-4 rounded-full font-bold hover:bg-[#1557B0] transition-colors">
            <span>Explore Custom Tours</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>

      <Footer />
    </main>
  );
}