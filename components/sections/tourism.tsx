import Image from 'next/image';
import { tourismItems, tourismSection } from '@/lib/data/tourism';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function TourismSection() {
  return (
    <section id="turismo" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={tourismSection.eyebrow}
            title={tourismSection.title}
            description={tourismSection.description}
          />
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {tourismItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} perspective={index % 2 === 0 ? 'up' : 'zoom'} className="h-full">
            <a
              href={item.href}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg hover:shadow-primary-900/10"
            >
              <Image
                src={item.image}
                alt=""
                width={640}
                height={416}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
