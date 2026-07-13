'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm font-mono uppercase tracking-widest">Last Updated: July 2026</p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-12 text-white/70 leading-relaxed font-light">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              RealView Media ("we", "our", or "us") collects information that identifies, relates to, or could reasonably be linked to you or your business. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business details provided during consultation bookings.</li>
              <li><strong>Property Data:</strong> Physical addresses, floor plans, and logistical details necessary to conduct our 360° virtual tour and photography services.</li>
              <li><strong>Digital Analytics:</strong> IP addresses, browser types, and usage metrics when you interact with our website or hosted digital twins.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver our services, including on-site capture and digital processing.</li>
              <li>Deploy authorized media directly to Google Maps and Google Street View on your behalf.</li>
              <li>Host and maintain your digital twins and interactive tours on our secure servers.</li>
              <li>Communicate regarding scheduling, invoicing, and project delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Integrations & Google Maps</h2>
            <p>
              Our core services involve integrating your visual media with third-party platforms, specifically Google Maps and Google Street View. By utilizing our integration services, you acknowledge that published media (including 360° imagery of your physical locations) becomes subject to Google's Privacy Policy and Terms of Service. We do not sell your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your raw media files, digital assets, and personal information from unauthorized access or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or requests regarding your data, please contact us at: <br/>
              <a href="mailto:contact@rvmedia.vn" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">contact@rvmedia.vn</a>
            </p>
          </section>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}