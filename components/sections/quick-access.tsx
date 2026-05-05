import { ArrowRight } from 'lucide-react';
import { municipalityInfo } from '@/lib/data/municipality';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function QuickAccessSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Accesos rápidos"
            title="Gestiones y consultas frecuentes"
            description="Los accesos prioritarios se ubican al inicio para resolver necesidades habituales sin recorrer todo el portal."
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {municipalityInfo.quickAccess.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 70} perspective={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}>
              <a
                href={item.href}
                className="block h-full rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-700">
                  Ir a la sección
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
