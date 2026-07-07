'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';
import { ArrowRight, BarChart, UserCheck, Search } from 'lucide-react';

export default function ProfileOptimizationPage() {
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
          Local <br />
          <span className="text-rv-white/40">Dominance.</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-rv-white/60 max-w-2xl mx-auto font-light">
          A great virtual tour is only as good as the profile hosting it. We optimize your digital presence to ensure you get found, seen, and chosen.
        </p>
      </section>

      {/* The "Why" */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Search className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Search Ranking</h3>
            <p className="text-rv-white/60 text-sm">We structure your profile data to signal relevance to Google, helping you climb the local search results.</p>
          </div>
          <div className="space-y-4">
            <BarChart className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Data-Driven Growth</h3>
            <p className="text-rv-white/60 text-sm">We analyze search trends to capture the keywords that your actual customers are typing in.</p>
          </div>
          <div className="space-y-4">
            <UserCheck className="w-8 h-8 text-rv-blue" />
            <h3 className="text-xl font-bold">Trust Signals</h3>
            <p className="text-rv-white/60 text-sm">Consistent branding, updated hours, and integrated media build the trust required to win the click.</p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter">Turn Visibility into Revenue.</h2>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            You can have the most beautiful 360-degree tour in the world, but if your Google Business Profile is incomplete, outdated, or unoptimized, it’s a wasted investment. Most customers decide within seconds if a business is worth their time based on the "snapshot" they see on Google Maps.
          </p>
          <p className="text-rv-white/70 text-lg leading-relaxed">
            Our optimization process ensures that your media assets are working for you. We curate the narrative, align the metadata, and polish the details so that when a potential customer searches for your services, you aren't just an option—you're the authority.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <MagneticButton>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-rv-blue text-rv-white px-8 py-4 rounded-full font-bold hover:bg-[#1557B0] transition-colors">
            <span>Audit My Profile</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>

      <Footer />
    </main>
  );
}