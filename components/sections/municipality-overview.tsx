import Image from 'next/image';
import { municipalityInfo } from '@/lib/data/municipality';
import { InfoCard } from '@/components/ui/info-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function MunicipalityOverviewSection() {
  return (
    <section id="municipio" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal perspective="left">
          <SectionHeader
            eyebrow="Municipio"
            title={municipalityInfo.summaryTitle}
            description={municipalityInfo.summary}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {municipalityInfo.highlights.map((item) => (
              <InfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Reveal>

        <Reveal perspective="right" delay={120} className="overflow-hidden rounded-[1.75rem] border border-primary-100 bg-primary-50 shadow-lg shadow-primary-900/10">
          <Image
            src={municipalityInfo.summaryImage}
            alt="Vista institucional de El Alcázar"
            width={1280}
            height={1280}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
