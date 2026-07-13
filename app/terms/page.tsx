'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Terms of Service</h1>
          <p className="text-white/50 text-sm font-mono uppercase tracking-widest">Last Updated: July 2026</p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-12 text-white/70 leading-relaxed font-light">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website (rvmedia.vn) or engaging RealView Media for virtual tour, photography, or digital media services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services & Client Responsibilities</h2>
            <p className="mb-4">When booking a digital capture or virtual tour session, the client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure the property is clean, staged, and fully prepared prior to the scheduled capture time.</li>
              <li>Provide our technicians with safe and unhindered access to all areas of the property scheduled for capture.</li>
              <li>Obtain all necessary permissions from property owners, tenants, or management prior to our arrival.</li>
            </ul>
            <p className="mt-4 text-sm text-white/50">
              *Rescheduling fees may apply if the property is not accessible or prepared at the agreed-upon time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property & Media Rights</h2>
            <p className="mb-4">
              <strong>Ownership:</strong> RealView Media retains the copyright and ownership of all original media, photographs, and raw 360° captures created during the project.
            </p>
            <p>
              <strong>Licensing:</strong> Upon full payment, the client is granted a perpetual, non-exclusive, non-transferable license to use the final delivered digital twins, virtual tours, and images for their own marketing and business purposes. Clients may not resell the raw media to third parties without written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Google Maps & Platform Integration</h2>
            <p>
              For projects involving Google Maps or Street View integration, RealView Media acts as an authorized publisher on your behalf. We are not responsible for subsequent changes made to the Google Maps platform, its algorithms, or how it displays third-party imagery. We do not guarantee specific search ranking improvements as a result of media deployment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Hosting & Maintenance</h2>
            <p>
              Custom-hosted virtual tours require ongoing server resources. Hosting terms, including duration and renewal fees, will be outlined in your specific project agreement. RealView Media reserves the right to unpublish hosted tours if hosting fees remain unpaid after standard grace periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Vietnam, without regard to its conflict of law provisions.
            </p>
          </section>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}