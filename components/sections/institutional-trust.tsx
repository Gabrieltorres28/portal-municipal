import { municipalityInfo } from '@/lib/data/municipality';
import { InstitutionalFlipCard } from '@/components/ui/institutional-flip-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function InstitutionalTrustSection() {
  return (
    <section className="bg-primary-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal perspective="zoom" className="[&_h2]:text-white [&_p]:text-primary-100/85">
          <SectionHeader
            eyebrow="Institucional"
            title="Información útil para confiar en el portal"
            description="La portada debe dejar claro que el municipio está operativo, organizado y disponible para atender consultas, reclamos y servicios."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {municipalityInfo.trustItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} perspective="up">
              <InstitutionalFlipCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                detail={item.detail}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
