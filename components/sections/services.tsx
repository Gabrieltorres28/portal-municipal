import { ServiceCard } from '@/components/ui/service-card';
import { SectionHeader } from '@/components/ui/section-header';
import { services, serviceMeta } from '@/lib/data/services';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';

export function ServicesSection() {
  const featuredServices = services.filter((service) => service.featured);
  const standardServices = services.filter((service) => !service.featured);

  return (
    <section id="tramites" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal perspective="left">
          <SectionHeader
            eyebrow={serviceMeta.eyebrow}
            title={serviceMeta.title}
            description={serviceMeta.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} perspective="up">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {standardServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 70} perspective={index % 2 === 0 ? 'left' : 'right'}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} perspective="zoom" className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <p className="max-w-3xl text-sm leading-6 text-gray-600">{serviceMeta.helperText}</p>
          <Button href={serviceMeta.helperLink.href} variant="secondary">
            {serviceMeta.helperLink.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
