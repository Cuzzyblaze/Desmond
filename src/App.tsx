import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import ProjectGrid from './components/ProjectGrid';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import FunnelSection from './components/FunnelSection';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProjectGrid />
        <Services />
        <About />
        <Process />
        <Experience />
        <TechStack />
        <FunnelSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
