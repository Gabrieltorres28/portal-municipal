import Image from 'next/image';
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck } from 'lucide-react';
import { municipalityInfo } from '@/lib/data/municipality';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary-950 pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#06291e_0%,#16422f_48%,#66372a_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <Reveal perspective="left">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-50 backdrop-blur">
              {municipalityInfo.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {municipalityInfo.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-50/92">
              Gobierno local, atención al vecino y servicios municipales con información clara, canales oficiales y una experiencia digital simple para la comunidad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {municipalityInfo.heroActions.map((action) => (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={action.variant}
                  className={action.variant === 'ghost' ? 'justify-center border-primary-100/25 bg-white/10 text-white hover:bg-white/18' : ''}
                >
                  {action.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ))}
            </div>

            <ul className="mt-9 grid gap-3 border-t border-white/12 pt-6 sm:grid-cols-3">
              {municipalityInfo.heroTrustPoints.map((point) => (
                <li key={point} className="flex items-center text-sm font-medium text-white/90">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary-200" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal perspective="right" delay={120}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-white/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-white/[0.08] p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-8">
              <div className="flex items-center gap-4 border-b border-white/12 pb-6">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                  <Image
                    src="/logoalcazar.webp"
                    alt=""
                    fill
                    priority
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-100">
                    Portal municipal
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">El Alcázar</p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/12 bg-white/10 p-5">
                  <Landmark className="h-7 w-7 text-primary-100" />
                  <p className="mt-4 text-sm font-semibold text-white">Gestión institucional</p>
                  <p className="mt-2 text-sm leading-6 text-primary-50/78">
                    Información ordenada para trámites, consultas y orientación municipal.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/10 p-5">
                  <ShieldCheck className="h-7 w-7 text-primary-100" />
                  <p className="mt-4 text-sm font-semibold text-white">Canales oficiales</p>
                  <p className="mt-2 text-sm leading-6 text-primary-50/78">
                    Contacto directo, atención administrativa y servicios para vecinos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
