'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="relative bg-rv-black min-h-screen text-rv-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
              We bridge the gap between <br />
              <span className="text-rv-white/40">physical and digital.</span>
            </h1>
            <p className="text-lg md:text-2xl text-rv-white/60 font-light max-w-3xl mx-auto">
              RealView Media was founded on a simple belief: that every space, no matter the size, deserves to be experienced in its full, three-dimensional glory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tighter">Our Obsession with Detail.</h2>
              <p className="text-rv-white/60 leading-relaxed">
                In a world saturated with flat imagery, we saw a disconnect. Businesses were struggling to convey the atmosphere of their physical locations through simple JPEGs. We decided to change that by mastering the intersection of high-end photography and immersive virtual reality.
              </p>
              <p className="text-rv-white/60 leading-relaxed">
                Today, we operate at the cutting edge of visual tech, ensuring that when your customers see you online, they are already halfway through your front door.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-3xl bg-rv-blue/10 border border-rv-white/10 flex items-center justify-center relative"
            >
              <div className="text-center p-8">
                <span className="text-6xl font-bold text-rv-blue">360°</span>
                <p className="text-sm uppercase tracking-widest mt-2">Spatial Expertise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">Why We Do It.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trust', desc: 'Transparency is our currency. We show, we don’t tell.' },
              { title: 'Innovation', desc: 'We stay ahead of the curve so you don\'t have to.' },
              { title: 'Impact', desc: 'Every pixel we capture is designed to drive results.' }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-rv-white/5 border border-rv-white/5 hover:border-rv-blue/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-rv-white/60 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}