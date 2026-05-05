import { faqItems, faqSection } from '@/lib/data/faq';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function FaqSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            description={faqSection.description}
            align="center"
          />
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 60} perspective="up">
            <details
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
            </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
