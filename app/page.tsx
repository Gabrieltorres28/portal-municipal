import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AuthoritiesSection } from '@/components/sections/authorities';
import { ContactSection } from '@/components/sections/contact';
import { FaqSection } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero';
import { InstitutionalTrustSection } from '@/components/sections/institutional-trust';
import { MunicipalityOverviewSection } from '@/components/sections/municipality-overview';
import { QuickAccessSection } from '@/components/sections/quick-access';
import { ServicesSection } from '@/components/sections/services';
import { TourismSection } from '@/components/sections/tourism';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <MunicipalityOverviewSection />
      <InstitutionalTrustSection />
      <ServicesSection />
      <AuthoritiesSection />
      <TourismSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
