import { useEffect } from 'react';
import { salon } from './config/salon';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Booking } from './components/sections/Booking';
import { Pricing } from './components/sections/Pricing';
import { InstagramSection } from './components/sections/InstagramSection';
import { VisitMap } from './components/sections/VisitMap';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  useEffect(() => {
    document.title = salon.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && salon.metaDescription) {
      meta.setAttribute('content', salon.metaDescription);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <WhyChooseUs />
      <Gallery />
      <InstagramSection />
      <Testimonials />
      <VisitMap />
      <Booking />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
