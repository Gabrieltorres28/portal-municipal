import { authorities, authoritiesSection } from '@/lib/data/authorities';
import { AuthorityCard } from '@/components/ui/authority-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeader } from '@/components/ui/section-header';

export function AuthoritiesSection() {
  const featuredAuthority = authorities.find((item) => item.featured);

  return (
    <section id="autoridades" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={authoritiesSection.eyebrow}
            title={authoritiesSection.title}
            description={authoritiesSection.description}
            align="center"
          />
        </Reveal>

        {featuredAuthority ? (
          <Reveal perspective="zoom" className="mx-auto mt-10 max-w-5xl">
            <AuthorityCard authority={featuredAuthority} />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
