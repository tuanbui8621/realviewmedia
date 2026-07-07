'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, MapPin, Search, MousePointer2 } from 'lucide-react';

export default function Google360Page() {
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
          Google 360° <br />
          <span className="text-rv-white/40">Virtual Tours.</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-rv-white/60 max-w-2xl mx-auto font-light">
          We transform your physical location into a digital asset that lives directly on Google Maps and Search, attracting customers 24/7.
        </p>
      </section>

      {/* The "Why" */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <MapPin className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Maps Integration</h3>
            <p className="text-rv-white/60 text-sm">Your tour is natively integrated into Google Maps, the world's most used navigation engine.</p>
          </div>
          <div className="space-y-4">
            <Search className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Search Visibility</h3>
            <p className="text-rv-white/60 text-sm">Listings with 360° virtual tours receive significantly higher click-through rates from Google Search.</p>
          </div>
          <div className="space-y-4">
            <MousePointer2 className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Immersive Discovery</h3>
            <p className="text-rv-white/60 text-sm">Customers walk through your door digitally, removing the hesitation of visiting a new place.</p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter">From Static to Dynamic.</h2>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            Most businesses treat their Google My Business profile like a digital phone book. We treat it like a digital storefront. By capturing high-fidelity, stitched 360° panoramas, we allow your potential customers to inspect your cleanliness, your atmosphere, and your quality before they ever commit to a visit.
          </p>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            We don't just photograph a room; we engineer the route of the user, ensuring they see the most important parts of your business first.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-rv-blue text-rv-white px-8 py-4 rounded-full font-bold hover:bg-[#1557B0] transition-colors">
            <span>Ready to get mapped?</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>

      <Footer />
    </main>
  );
}