import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience360 from "@/components/Experience360";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-rv-black min-h-screen">
        <Hero />
        <Services />
        <Experience360 />
        <PortfolioCarousel />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
