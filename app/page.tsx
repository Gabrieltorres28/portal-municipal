import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickAccessSection from './components/QuickAccessSection';
import MunicipalitySection from './components/MunicipalitySection';
import AuthoritiesSection from './components/AuthoritiesSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import TourismSection from './components/TourismSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <MunicipalitySection />
      <AuthoritiesSection />
      <ServicesSection />
      <NewsSection />
      <TourismSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
