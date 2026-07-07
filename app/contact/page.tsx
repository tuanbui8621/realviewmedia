'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative bg-rv-black min-h-screen text-rv-white">
      <Navbar />

      <section className="pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's connect.</h1>
              <p className="text-lg text-rv-white/60 font-light">
                Tell us about your space. Whether you're ready to start or just have a few questions, we're here to help.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-rv-white/5 border border-rv-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rv-blue transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-rv-white/5 border border-rv-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rv-blue transition-all"
                />
              </div>
              
              <select className="w-full bg-rv-white/5 border border-rv-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rv-blue transition-all text-rv-white/50">
                <option>Project Type</option>
                <option>360 Virtual Tour</option>
                <option>Commercial Photography</option>
                <option>Videography</option>
                <option>Other</option>
              </select>

              <textarea 
                rows={4}
                placeholder="Tell us about your project..." 
                className="w-full bg-rv-white/5 border border-rv-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rv-blue transition-all"
              />

              <MagneticButton className="w-full">
                <button type="submit" className="w-full flex items-center justify-center gap-3 bg-rv-blue text-rv-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#1557B0]">
                  <span>Send Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </MagneticButton>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}